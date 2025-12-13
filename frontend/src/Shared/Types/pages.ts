// export enum SelectedPage {
//     Home="home",
//     History= "history",
//     Curriculum= "curriculum",
//     UserManual= "usermanual",
//     MemorableMoment= "memorablemoments"
// }

export const SelectedPage = {
  Home: "home",
  History: "history",
  Curriculum: "curriculum",
  UserManual: "usermanual",
  MemorableMoment: "memorablemoments"
} as const;

export type SelectedPage = typeof SelectedPage[keyof typeof SelectedPage];