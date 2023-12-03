export interface SpecificClubArrRes {
  club: Club;
}

export interface Club {
  club_id: number;
  club_name: string;
  about_club?: string;
  club_img?: string;
  club_allow_invite?: number;
  club_location?: string;
  club_tag?: string;
  club_rules_and_regulation?: string;
  club_type?: string;
}

// when the searched club id is not found
export interface AlternativeClubsRes {
  message: string;
  clubs: Club[];
}

export enum ClubTag {
  Education = "education",
  Empty = "",
  Fashion = "fashion",
}

/* get club option limit 4 */
export interface ClubOptionResponse {
  clubs: ClubOption[];
}

export interface ClubOption {
  club_id: number;
  club_name: string;
  club_img: string;
}
