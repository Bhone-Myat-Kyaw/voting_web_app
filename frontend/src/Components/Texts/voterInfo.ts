export interface Voter {
    id: number;
    name: string;
    sex: string;
    role: string;
    roll: number;
    admissionID: string;
    hasVoted: boolean;
    password: number;
}

export const voters: Voter[] = [
    {id: 1, sex: "male", name: "Bhone Myat Kyaw", roll: 8, role: "student", admissionID: "24/30201", hasVoted: false, password: 123},
    {id: 2, sex: "female", name: "May Myat Noe Kyaw", roll: 4, role: "student", admissionID: "24/30211", hasVoted: false, password: 123},
]