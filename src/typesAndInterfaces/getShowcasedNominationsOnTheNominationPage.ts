export interface Response {
  nominations: Nomination[];
}

export interface Nomination {
  id: number;
  awardName: string;
  picture: string;
  content: string;
}
