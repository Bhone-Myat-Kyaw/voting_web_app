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

export const voters: Voter[] = [
    {id: 1, gender: "male", name: "Bhone Myat Kyaw", roll: 8, role: "student", admissionID: "24/30201", hasvoted: false, password: 123},
    {id: 2, gender: "female", name: "May Myat Noe Kyaw", roll: 4, role: "student", admissionID: "24/30211", hasvoted: false, password: 123},
]