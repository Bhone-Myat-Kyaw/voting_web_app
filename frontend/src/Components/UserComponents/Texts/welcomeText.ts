import { People } from "../../../Shared/Types";

export interface WelcomeText {
    status: string;
    title: string;
    body: string;
}

export const welcomeTexts: WelcomeText[] = [
  {
    status: `${People.Freshmen}`,
    title: "Welcome to the CEIT Family!",
    body: "As this new academic year begins, we are delighted to welcome you — our incoming batch of CEIT students.May your journey with us be filled with knowledge, growth, and countless opportunities to learn, create, and thrive.Let’s begin this chapter together, with enthusiasm and hope for all that lies ahead.",
    
  },
  {
    status: `${People.Senior}`,
    title: "Inviting All Seniors – Your Guidance Matters!",
    body: "As we embark on a new academic year, we invite our senior CEIT students to join us in welcoming the newest members of our major.Your experience, support, and leadership will help shape their first days — and strengthen the bonds of our department.Together, let’s build a thriving CEIT community.",
    
  },
  {
    status: `${People.Teacher}`,
    title: "Esteemed Teachers of CEIT — Your Presence Is Requested",
    body: "We warmly invite all CEIT teachers and staff to attend our Annual Freshers’ Welcome Ceremony.Your wisdom, mentorship, and encouragement play a vital role as we usher in the new batch of students.Please join us in extending a warm greeting to the newcomers and supporting the unity of our department.", 
  },
  
]