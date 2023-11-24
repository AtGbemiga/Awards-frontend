export interface Response {
  message: Post[];
}

export interface Post {
  id: number;
  picture: string;
  name: string;
  sub_heading: string;
  year: string;
  post: string;
  total_comments?: number;
  tag?: string;
}
