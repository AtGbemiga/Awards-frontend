import { ClubOptionResponse } from "../../typesAndInterfaces/club";

export default async function getGroupOptionLimit4Fn(): Promise<ClubOptionResponse> {
  const url = `http://localhost:3000/api/v1/club/getClubOptions`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response);

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      `Request failed with status ${response.status}, ${JSON.stringify(
        errorResponse
      )}`
    );
  }

  const data: ClubOptionResponse = await response.json();
  console.log(data);

  return data;
}
