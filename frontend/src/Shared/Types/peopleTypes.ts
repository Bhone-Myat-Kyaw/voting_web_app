// export enum People {
//     Freshmen= "freshmen",
//     Senior= "senior",
//     Teacher= "teacher",
// }

export const People = {
  Freshmen: "freshmen",
  Senior: "senior",
  Teacher: "teacher",
} as const;

export type People = typeof People[keyof typeof People];

export interface Voter {
    id: number;
    name: string;
    gender: string;
    role: string;
    roll: number;
    admissionID: string;
    hasvoted: boolean;
    password: number;
}

export interface Candidate {
  id: number;
  name: string;
  hasvoted:true;
  year: number;
  rollnum: number;
  gender: string; 
}

export interface SelectedCandidate {
  id: string;
  studentid: string;
  students: Candidate;
  imagepath: string;
  description: string;
}