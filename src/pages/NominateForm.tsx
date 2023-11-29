import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NominationForm } from "../typesAndInterfaces/nominationForm";
import styles from "./styles/nominateForm.module.css";
import nominationFn from "../lib/nomination";
import Register from "../components/register/Register";
import stylesTwo from "../components/register/register.module.css";
import Cookies from "js-cookie";
import Login from "../components/login/Login";
function NominateFormPage() {
  const [formData, setFormData] = useState<NominationForm>({
    award_name: "",
    hero_name: "",
    award_reason: "",
    hero_contact: "",
    your_name: "",
    your_email: "",
    phone_number: "",
    contact_you: "",
    join_newsletter: "",
  });
  const navigate = useNavigate();
  const [displayRegisterForm, setDisplayRegisterForm] = useState(true); // default false
  const [toggleRegisterAndLogin, setToggleRegisterAndLogin] = useState(true);

  function handleInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked ? "yes" : "no",
      });
    } else if (type === "select-one") {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  function handleToggleRegisterAndLogin() {
    setToggleRegisterAndLogin((prevState) => !prevState);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!Cookies.get("token")) {
      setDisplayRegisterForm(true);
      return;
    }
    const res = await nominationFn({ formData });
    console.log(res.ok);
    navigate("/form-submitted");
  }
  return (
    <>
      <form
        className={styles.nominationForm}
        onSubmit={handleSubmit}
        // move this to the parent app
        onClick={() => setDisplayRegisterForm(false)}
      >
        <p className={styles.formHeader}>
          Nominate someone for the Pride of Britain Awards 2024 by filling in
          the form below. Nominations close at 11:59pm on Sunday 11th August
          2024.
        </p>
        <div className={styles.awardDiv}>
          <label htmlFor="award_name">Award</label>
          <select
            name="award_name"
            id="award_name"
            value={formData.award_name}
            onChange={handleInput}
            required
          >
            <option value="TSBCommunityHeroAward">
              TSB Community Hero Award
            </option>
            <option value="awardOne">award one</option>
          </select>
        </div>
        <div className={styles.textInputDiv}>
          <label htmlFor="hero_name"></label>
          <input
            type="text"
            name="hero_name"
            id="hero_name"
            placeholder="Name of your unsung hero"
            value={formData.hero_name}
            onChange={handleInput}
            required
          />
        </div>
        <div className={styles.textInputDiv}>
          <label htmlFor="award_reason"></label>
          <input
            type="text"
            name="award_reason"
            id="award_reason"
            placeholder="Why do they deserve the award? (Please include as much detail as possible)"
            value={formData.award_reason}
            onChange={handleInput}
            required
          />
        </div>
        <div className={styles.textInputDiv}>
          <label htmlFor="hero_contact"></label>
          <input
            type="text"
            name="hero_contact"
            id="hero_contact"
            placeholder="Contact details for your unsung hero (if you have them)"
            value={formData.hero_contact}
            onChange={handleInput}
            required
          />
        </div>
        <div className={styles.textInputDiv}>
          <label htmlFor="your_name"></label>
          <input
            type="text"
            name="your_name"
            id="your_name"
            placeholder="Your name"
            value={formData.your_name}
            onChange={handleInput}
            required
          />
        </div>
        <div className={styles.textInputDiv}>
          <label htmlFor="your_email"></label>
          <input
            type="text"
            name="your_email"
            id="your_email"
            placeholder="Your email"
            value={formData.your_email}
            onChange={handleInput}
            required
          />
        </div>
        <div className={styles.textInputDiv}>
          <label htmlFor="phone_number"></label>
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="Phone number"
            value={formData.phone_number}
            onChange={handleInput}
            required
          />
        </div>
        <div className={styles.textInputDiv}>
          <label htmlFor="contact_you"></label>
          <input
            type="text"
            name="contact_you"
            id="contact_you"
            placeholder="How would you like us to contact you?"
            value={formData.contact_you}
            onChange={handleInput}
            required
          />
        </div>
        <p>
          Would you like to receive Pride of Britain Awards updates from the
          Mirror sent direct to your inbox?
        </p>
        <div>
          <input
            type="checkbox"
            name="join_newsletter"
            id="join_newsletter"
            placeholder="How would you like us to contact you?"
            value={
              formData.join_newsletter ||
              formData.join_newsletter === undefined ||
              formData.join_newsletter === null ||
              formData.join_newsletter === ""
                ? "no"
                : "yes"
            }
            onChange={handleInput}
          />
          <label htmlFor="join_newsletter">Yes Please</label>
        </div>
        <p>
          We use your sign-up to provide content in ways you've consented to and
          to improve our understanding of you. This may include adverts from us
          and 3rd parties based on our understanding. You can unsubscribe at any
          time. <a href="#">More Info.</a>
        </p>
        <p>
          By submitting your nomination form you consent to our terms and
          conditions, which can be viewed <a href="#">here.</a>
        </p>
        <p>
          Personal Data will be processed in accordance with the Pride of
          Britain Awards Privacy Policy <a href="">here.</a>
        </p>

        <div className={styles.submitBtnDiv}>
          <button className={styles.submitBtn}>Click here to nominate</button>
        </div>
      </form>
      {displayRegisterForm && (
        <section className={stylesTwo.registerFormSection}>
          {toggleRegisterAndLogin ? (
            <Register
              passedEmail={formData.your_email}
              setDisplayRegisterForm={setDisplayRegisterForm}
            />
          ) : (
            <Login setDisplayRegisterForm={setDisplayRegisterForm} />
          )}
          <div className={stylesTwo.loginOption}>
            <p>
              Already have an account?{" "}
              <button
                onClick={handleToggleRegisterAndLogin}
                className={stylesTwo.loginOptionLink}
              >
                {toggleRegisterAndLogin ? "Login" : "Register"}
              </button>
            </p>
          </div>
        </section>
      )}
    </>
  );
}
export default NominateFormPage;
