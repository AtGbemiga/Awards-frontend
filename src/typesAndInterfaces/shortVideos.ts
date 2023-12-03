export interface Response {
  reels: Reel[];
}

export interface Reel {
  short_videos_id: number;
  video: string;
  detail?: string;
  creator?: string;
  likes: number | null;
  views: number | null;
  created_at: Date;
  years_ago: number;
  months_ago: number;
  days_ago: number;
  hours_ago: number;
  minutes_ago: number;
  seconds_ago: number;
}
