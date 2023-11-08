export enum enum_major{
  SI = "Scientifique",
  GL = "Genie Logiciel",
  CP = "Conduite de projet"
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major?: enum_major;
}
