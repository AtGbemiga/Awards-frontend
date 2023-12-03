export interface VideoCommentsResponse {
  comments: Comment[];
}

export interface Comment {
  reels_comments_id: number;
  user_comment: string;
  user_id: number;
  short_video_id: number;
  username: string;
}
