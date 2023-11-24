import styles from "./footer.module.css";
function Footer(): JSX.Element {
  return (
    <>
      <section className={styles.firstSection}>
        <div>
          <div className={styles.logoDiv}>
            <img
              src="/awardHeaderLogo.jpeg"
              alt="logo"
              className={styles.companyLogo}
            />
          </div>
          <div className={styles.socialMediaDiv}>
            <img
              src="/twitterIcon.svg"
              alt="logo"
              className={styles.socialMediaIcon}
            />
            <img
              src="/whatsapp-30.svg"
              alt="logo"
              className={styles.socialMediaIcon}
            />
            <img
              src="/facebookIcon.svg"
              alt="logo"
              className={styles.socialMediaIcon}
            />
            <img
              src="/instaIcon.svg"
              alt="logo"
              className={styles.socialMediaIcon}
            />
          </div>
        </div>
        <div>
          <div className={styles.newsletterDiv}>
            SUBSCRIBE TO OUR <span>NEWSLETTER</span>
          </div>
          <div className={styles.newsletterInputDiv}>
            <input
              type="text"
              name="newsletter"
              id="newsletter"
              className={styles.newsletterInput}
              placeholder="Enter your email"
            />
            <button className={styles.newsletterBtn}>
              <img src="/Vector 36.svg" alt="send icon" />
            </button>
          </div>
        </div>
      </section>
      <section className={styles.linksContainer}>
        <div>
          <ul>
            <li>Corporate Info</li>
            <li>Accessibility</li>
            <li>Jobs</li>
            <li>Ad Choices</li>
            <li>Privacy Policy</li>
            <li>CA Notice</li>
            <li>Terms of Service - NEW</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>NBC App</li>
            <li>Peacock</li>
            <li>Advertise</li>
            <li>Closed Captioning</li>
          </ul>
        </div>
        <div>
          <ul>
            <p>PON Quick Links</p>
            <li>Advertise</li>
            <li>Link TV Provider</li>
            <li>FAQ</li>
            <li>Casting</li>
            <li>Contact Us</li>
            <li>Local Schedule</li>
            <li>Tickets and NBC Studio Tour</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Parental Guidelines and TV Ratings</li>
            <li>Video Viewing Policy</li>
            <li>Viewer Panel</li>
            <li>Shop</li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default Footer;
