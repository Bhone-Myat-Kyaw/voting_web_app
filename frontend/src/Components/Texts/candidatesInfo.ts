export interface Candidate {
  id: number;
  name: string;
  description: string;
  imagepath: string;
  rollnum: number;
  gender: string; 
}

export interface SelectedCandidate {
  id: string;
  studentid: number;
  students: Candidate;
}

export const candidates: Candidate[] = [
  {
    id: 1,
    name: "Olivia Chen",
    description: "Champion for student welfare",
    imagepath: "/images/cand1.jpg",
    rollnum: 1,
    gender:"female",
  },
  {
    id: 2,
    name: "Sophia Rodriguez",
    description: "Focus on sustainability initiatives",
    imagepath: "/images/cand2.jpg",
    rollnum: 2,
    gender:"female",
  },
  {
    id: 3,
    name: "Isabella Nguyen",
    description: "Bridging academics and arts",
    imagepath: "/images/cand3.jpg",
    rollnum: 3,
    gender:"female",
  },
  {
    id: 4,
    name: "Emily Carter",
    description: "Improving digital experiences",
    imagepath: "/images/cand4.jpg",
    rollnum: 4,
    gender:"female",
  },
];