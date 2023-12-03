import {
  AlternativeClubsRes,
  SpecificClubArrRes,
} from "../../typesAndInterfaces/club";

export default async function getClubByIdFn({
  club_id,
}: {
  club_id: string;
}): Promise<SpecificClubArrRes | AlternativeClubsRes> {
  const url = `http://localhost:3000/api/v1/club/getClubById?club_id=${club_id}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      `Request failed with status ${response.status}, ${JSON.stringify(
        errorResponse
      )}`
    );
  }

  const data: SpecificClubArrRes | AlternativeClubsRes = await response.json();

  return data;
}
