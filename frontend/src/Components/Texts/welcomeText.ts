import { People } from "./peopleInfo"

export interface WelcomeText {
    status: string;
    title: string;
    body: string;
}

export const welcomeTexts: WelcomeText[] = [
  {
    status: `${People.Freshmen}`,
    title: "Welcome, New Students!",
    body: "A heartfelt welcome to the newest members of our university community! You are embarking on an exciting journey of discovery, growth, and connection. This next chapter is yours to write, and we are thrilled to support you every step of the way. Explore the opportunities, connect with your peers, and get ready for an incredible experience!",
    
  },
  {
    status: `${People.Senior}`,
    title: "Welcome Back, Seniors!",
    body: "It's great to have you back! As seasoned members of our community, you bring invaluable experience, spirit, and leadership to our campus. Whether you are returning for your final year or continuing your studies, we look forward to your contributions. Set a great example for our new students and make this year your best one yet!",
    
  },
  {
    status: `${People.Teacher}`,
    title: "Welcome Back, Teachers",
    body: "Welcome back to another dynamic academic year. Your dedication, expertise, and passion are the core of our institution's success. We appreciate all the hard work you put into shaping the minds of future generations. We look forward to a productive and inspiring year of collaboration and learning.",
    
  },
  
]