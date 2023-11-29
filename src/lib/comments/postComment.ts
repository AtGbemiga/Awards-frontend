interface Response {
  message: string;
}

async function postCommentFn(
  {
    post_id,
  }: {
    post_id: string;
  },
  { name, email, statement }: { name: string; email: string; statement: string }
): Promise<Response> {
  const url = `http://localhost:3000/api/v1/comments?post_id=${post_id}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      statement,
    }),
  });

  // check for if res fails
  if (!res.ok) {
    const exactErrorMsg = await res.json();
    throw new Error(
      `Request failed with status ${res.status}, ${exactErrorMsg.message}`
    );
  }

  // get good res at this stage
  const data: Response = await res.json();

  return data;
}
export default postCommentFn;
