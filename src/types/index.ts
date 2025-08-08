// Core types for the SCERT Book Management System

export interface District {
  id: string;
  name: string;
  phone?: string;
  blocks: Block[];
}

export interface Block {
  id: string;
  name: string;
  phone?: string;
  districtId?: string;
}

export interface School {
  udise: string;
  name: string;
  district: string;
  block: string;
  type?: "government" | "private";
}

export interface AdminLevel {
  state: "STATE ADMIN";
  district: "DISTRICT ADMIN";
  block: "BLOCK ADMIN";
  school: "SCHOOL ADMIN";
  private: "PRIVATE SCHOOL ADMIN";
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  level: keyof AdminLevel;
  districtId?: string;
  blockId?: string;
  schoolId?: string;
}

export interface Book {
  id: string;
  title: string;
  class: string;
  subject: string;
  medium: "english" | "hindi" | "bengali" | "other";
  isbn?: string;
  quantity: number;
}

export interface Requisition {
  id: string;
  schoolId: string;
  bookId: string;
  quantity: number;
  status: "pending" | "approved" | "rejected" | "fulfilled";
  requestedBy: string;
  requestedAt: Date;
  approvedBy?: string;
  approvedAt?: Date;
}
