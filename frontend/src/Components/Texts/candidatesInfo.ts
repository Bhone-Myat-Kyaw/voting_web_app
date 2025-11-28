export interface Candidate {
  id: number;
  name: string;
  department: string;
  description: string;
  imgPath: string;
  roll: number;
  sex: string; 
}

export const candidates: Candidate[] = [
  {
    id: 1,
    name: "Olivia Chen",
    department: "Engineering",
    description: "Champion for student welfare",
    imgPath: "/images/cand1.jpg",
    roll: 1,
    sex:"female",
  },
  {
    id: 2,
    name: "Sophia Rodriguez",
    department: "Biology",
    description: "Focus on sustainability initiatives",
    imgPath: "/images/cand2.jpg",
    roll: 2,
    sex:"female",
  },
  {
    id: 3,
    name: "Isabella Nguyen",
    department: "Liberal Arts",
    description: "Bridging academics and arts",
    imgPath: "/images/cand3.jpg",
    roll: 3,
    sex:"female",
  },
  {
    id: 4,
    name: "Emily Carter",
    department: "Computer Science",
    description: "Improving digital experiences",
    imgPath: "/images/cand4.jpg",
    roll: 4,
    sex:"female",
  },
];