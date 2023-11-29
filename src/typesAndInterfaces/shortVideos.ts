export interface Response {
  reels: Reel[];
}

export interface Reel {
  id: number;
  video: string;
  detail?: string;
  creator?: string;
  comments?: null | string;
  likes: number | null;
  views: number | null;
}
