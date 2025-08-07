// Static data for Tripura districts and schools
import { District, School } from "../types";

export const tripuraDistricts: District[] = [
  {
    id: "DHALAI",
    name: "Dhalai",
    blocks: [
      { id: "AMBASSA", name: "Ambassa" },
      { id: "GANDACHERA", name: "Gandachera" },
    ],
  },
  {
    id: "GOMATI",
    name: "Gomati",
    blocks: [
      { id: "UDAIPUR", name: "Udaipur" },
      { id: "AMARPUR", name: "Amarpur" },
    ],
  },
  {
    id: "KHOWAI",
    name: "Khowai",
    blocks: [],
  },
  {
    id: "NORTH_TRIPURA",
    name: "North Tripura",
    blocks: [],
  },
  {
    id: "SEPAHIJALA",
    name: "Sepahijala",
    blocks: [],
  },
  {
    id: "SOUTH_TRIPURA",
    name: "South Tripura",
    blocks: [],
  },
  {
    id: "UNAKOTI",
    name: "Unakoti",
    blocks: [],
  },
  {
    id: "WEST_TRIPURA",
    name: "West Tripura",
    blocks: [
      { id: "AGARTALA_MC", name: "Agartala Municipal Corporation" },
      { id: "DHUKLI", name: "Dhukli" },
      { id: "MOHANPUR", name: "Mohanpur" },
      { id: "HEZAMARA", name: "Hezamara" },
      { id: "MANDAI", name: "Mandai" },
    ],
  },
];

export const schoolsData: School[] = [
  {
    udise: "16010100108",
    name: "DAKSHIN LANKAMURA J.B SCHOOL",
    district: "West Tripura",
    block: "Agartala Municipal Corporation",
  },
  {
    udise: "16010100109",
    name: "LANKAMURA H.S. SCHOOL",
    district: "West Tripura",
    block: "Agartala Municipal Corporation",
  },
  {
    udise: "16010100110",
    name: "DAKSHIN NARAYANPUR SB SCHOOL",
    district: "West Tripura",
    block: "Agartala Municipal Corporation",
  },
  // Add more schools as needed...
];
