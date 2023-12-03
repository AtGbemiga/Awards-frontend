export interface CreateClubPost {
  club_post_content: string;
  club_post_tag: string;
  club_post_likes: number;
  club_post_views: number;
  club_post_imgs: FileList | string;
  [key: string]: string | number | FileList;
}
