import { NominationForm } from "../typesAndInterfaces/nominationForm";

async function nominationFn({ formData }: { formData: NominationForm }) {
  const url = "http://localhost:3000/api/v1/nominate";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  // check for if res fails
  if (!res.ok) {
    const exactErrorMsg = await res.json();
    throw new Error(
      `Request failed with status ${res.status}, ${exactErrorMsg.message}`
    );
  }

  // get good res at this stage
  const data = await res.json();
  // post sent. No need for res.
  console.log(res.status);
  console.log(data);

  return data;
}
export default nominationFn;
