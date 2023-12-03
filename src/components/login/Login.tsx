import { useQuery } from "@tanstack/react-query";
import { authFn } from "../../lib/user/auth";
import { useState } from "react";
import styles from "../register/register.module.css";

type Props = {
  passedEmail?: string;
  setDisplayRegisterForm: React.Dispatch<React.SetStateAction<boolean>>;
};

function Login({ passedEmail, setDisplayRegisterForm }: Props): JSX.Element {
  const [email, setEmail] = useState(passedEmail ?? "");
  const [password, setPassword] = useState("");
  // set dynamic error based on response from the database
  const [error, setError] = useState("");

  const loginQuery = useQuery({
    queryKey: ["login"],
    queryFn: () => {
      const res = authFn({ email, password }, "login");
      return res;
    },
    enabled: false,
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await loginQuery.refetch();
    setDisplayRegisterForm(false);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jamesjaohnson@gmail.com"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
            aria-required
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            required
            aria-required
            autoComplete="new-password"
          />
        </div>
        <button className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
}
export default Login;
