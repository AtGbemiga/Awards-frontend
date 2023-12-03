export interface CreateClub {
  club_name: string;
  about_club: string;
  club_allow_invite: number;
  club_location: string;
  club_tag: "fashion" | "dance" | "education" | "music" | "finances";
  club_rules_and_regulation: string;
  club_type: "private" | "public";
  club_img: FileList | string;
  [key: string]: string | number | FileList;
}
