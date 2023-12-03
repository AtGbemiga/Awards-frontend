export default async function createClubFn(formData: FormData) {
  const url = "http://localhost:3000/api/v1/club";

  console.log({ formData });

  const response = await fetch(url, {
    method: "POST",
    body: formData,
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

  const data = await response.json();
  console.log(data);

  return data;
}
