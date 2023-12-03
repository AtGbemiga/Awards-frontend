import Cookies from "js-cookie";
import { Auth } from "../../typesAndInterfaces/auth";

export const authFn = async (
  {
    username,
    email,
    password,
    users_phone_number,
  }: {
    username?: string;
    email: string;
    password: string;
    users_phone_number?: string;
  },
  identifier: string
): Promise<Auth> => {
  let url;

  // identifier is either login, signup or reset password
  if (identifier === "login") {
    url = "http://127.0.0.1:3000/api/v1/users/login";
  } else if (identifier === "register") {
    url = "http://127.0.0.1:3000/api/v1/users";
  } else if (identifier === "resetPassword") {
    url =
      "https://actionsmm-backend-production.up.railway.app/api/v1/auth/reset-password";
  } else {
    throw new Error("Invalid identifier");
  }

  // attempt fetch
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify({ username, email, password, users_phone_number }),
  });

  console.log("res", res);

  // check for if res fails
  if (!res.ok) {
    const exactErrorMsg = await res.json();
    throw new Error(
      `Request failed with status ${Object.entries(
        res.status
      )}, ${Object.entries(exactErrorMsg)}`
    );
  }

  // get good res at this stage
  const data: Auth = await res.json();

  // remove cookie if it already exists
  Cookies.set("token", data.token, {
    expires: 60,
    path: "/",
    secure: true,
    sameSite: "lax",
  });

  return data;
};
