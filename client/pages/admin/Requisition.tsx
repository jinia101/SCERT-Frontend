import AdminLayout from "@/components/AdminLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { School, BookOpen, Send } from "lucide-react";

const dummyRequisitions = [
  {
    id: 1,
    school: "Sunrise Public School",
    requests: [
      { title: "Maths for Class 3", requested: 50, inStock: 120, sent: 20 },
      { title: "Science Explorer", requested: 30, inStock: 80, sent: 10 },
    ],
  },
  {
    id: 2,
    school: "Green Valley School",
    requests: [
      { title: "English Reader", requested: 40, inStock: 60, sent: 40 },
      { title: "Hindi Basics", requested: 25, inStock: 30, sent: 10 },
    ],
  },
];

export default function Requisition() {
  const [requisitions, setRequisitions] = useState(dummyRequisitions);
  // Track batch input per school/book
  const [batchInputs, setBatchInputs] = useState<{ [key: string]: string }>({});

  const handleBatchInput = (
    schoolId: number,
    bookIdx: number,
    value: string,
  ) => {
    setBatchInputs((prev) => ({ ...prev, [`${schoolId}-${bookIdx}`]: value }));
  };

  const handleSendBatch = (schoolId: number, bookIdx: number) => {
    setRequisitions((prev) =>
      prev.map((req) => {
        if (req.id !== schoolId) return req;
        const book = req.requests[bookIdx];
        if (book.sent >= book.requested) return req;
        const key = `${schoolId}-${bookIdx}`;
        const maxSend = Math.min(book.requested - book.sent, book.inStock);
        let toSend = parseInt(batchInputs[key] || "0", 10);
        if (isNaN(toSend) || toSend <= 0) toSend = 0;
        if (toSend > maxSend) toSend = maxSend;
        const updatedRequests = req.requests.map((b, idx) =>
          idx === bookIdx
            ? { ...b, sent: b.sent + toSend, inStock: b.inStock - toSend }
            : b,
        );
        return { ...req, requests: updatedRequests };
      }),
    );
    // Clear input after send
    setBatchInputs((prev) => ({ ...prev, [`${schoolId}-${bookIdx}`]: "" }));
  };

  const getFulfillment = (requests: any[]) => {
    const total = requests.reduce((sum, b) => sum + b.requested, 0);
    const sent = requests.reduce((sum, b) => sum + b.sent, 0);
    return total === 0 ? 0 : Math.round((sent / total) * 100);
  };

  return (
    <AdminLayout
      title="Requisition Management"
      description="Approve and fulfill book requests from schools"
      adminLevel="STATE ADMIN"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {requisitions.map((req) => {
          const fulfillment = getFulfillment(req.requests);
          const isComplete = fulfillment === 100;
          return (
            <Card
              key={req.id}
              className={`border-2 ${
                isComplete
                  ? "bg-gradient-to-br from-green-100 to-green-50 border-green-400"
                  : "bg-gradient-to-br from-yellow-100 to-pink-50 border-pink-300"
              }`}
            >
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <School className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-lg text-blue-900">
                    {req.school}
                  </CardTitle>
                </div>
                <CardDescription>
                  {isComplete ? (
                    <span className="text-green-700 font-semibold">
                      Fulfilled
                    </span>
                  ) : (
                    <span className="text-pink-700 font-semibold">Pending</span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Progress value={fulfillment} className="h-3 bg-gray-200" />
                  <div className="text-xs mt-1 text-gray-600">
                    {fulfillment}% fulfilled
                  </div>
                </div>
                <div className="space-y-3">
                  {req.requests.map((book, idx) => {
                    const bookFulfilled = book.sent >= book.requested;
                    const key = `${req.id}-${idx}`;
                    const maxSend = Math.min(
                      book.requested - book.sent,
                      book.inStock,
                    );
                    return (
                      <div
                        key={book.title}
                        className={`flex flex-col md:flex-row md:items-center justify-between p-3 rounded-lg border ${
                          bookFulfilled
                            ? "bg-gradient-to-r from-green-50 to-green-100 border-green-200"
                            : "bg-gradient-to-r from-yellow-50 to-pink-50 border-pink-200"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-purple-500" />
                          <span className="font-semibold">{book.title}</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2 md:mt-0">
                          <span className="text-xs text-gray-700">
                            Requested: {book.requested}
                          </span>
                          <span className="text-xs text-blue-700">
                            In Stock: {book.inStock}
                          </span>
                          <span className="text-xs text-green-700">
                            Sent: {book.sent}
                          </span>
                          {!bookFulfilled && !isComplete && (
                            <div className="flex items-center gap-2">
                              <Input
                                type="number"
                                min={1}
                                max={maxSend}
                                value={batchInputs[key] || ""}
                                onChange={(e) =>
                                  handleBatchInput(req.id, idx, e.target.value)
                                }
                                className="w-20 h-8 text-sm"
                                placeholder={`Max ${maxSend}`}
                                disabled={book.inStock === 0}
                              />
                              <Button
                                size="sm"
                                className="bg-blue-200 text-blue-900 hover:bg-blue-300"
                                onClick={() => handleSendBatch(req.id, idx)}
                                disabled={
                                  book.inStock === 0 ||
                                  !batchInputs[key] ||
                                  parseInt(batchInputs[key], 10) <= 0
                                }
                              >
                                <Send className="h-4 w-4 mr-1" /> Send
                              </Button>
                            </div>
                          )}
                          {bookFulfilled && (
                            <span className="text-xs text-green-700 font-semibold">
                              Done
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </AdminLayout>
  );
}
