export enum People {
    Freshmen= "freshmen",
    Senior= "senior",
    Teacher= "teacher",
}

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
  description: string;
  imagepath: string;
  rollnum: number;
  gender: string; 
}

export interface SelectedCandidate {
  id: number;
  studentid: number;
  students: Candidate;
}