import SubHeading from "../components/app/SubHeading";
import { Club, ClubOption } from "../typesAndInterfaces/club";
import styles from "./styles/dynamicGroupPageReusable.module.css/mainContainer.module.css";
import stylesOne from "./styles/dynamicGroupPageReusable.module.css/ImgArea.module.css";
import stylesTwo from "./styles/dynamicGroupPageReusable.module.css/body.module.css";
import stylesThree from "./styles/dynamicGroupPageReusable.module.css/aboutGroupsArea.module.css";
import stylesFour from "./styles/dynamicGroupPageReusable.module.css/otherGroupsArea.module.css";
import stylesFive from "./styles/dynamicGroupPageReusable.module.css/createGroupPostArea.module.css";
import CreateGroupPostForm from "../components/group/CreateGroupPostForm";

type Props = {
  club: Club;
  clubOptions: ClubOption[];
  club_id?: string;
};

function DynamicGroupPageReusable({ club, clubOptions, club_id }: Props) {
  return (
    <section className={styles.mainContainer}>
      <SubHeading value="GROUP" />
      <div className={stylesOne.imgArea}>
        <img src="/Rectangle 108.svg" alt="group" />
      </div>
      <section className={stylesOne.viewMembersOrPostArea}>
        <div>
          <button className={`${styles.green}`}>Post</button>
          <button>Members</button>
        </div>
      </section>
      <section className={stylesTwo.body}>
        <div className={stylesTwo.firstHalfContent}>
          <div className={stylesFive.createGroupPostArea}>
            <div className={stylesFive.userImgArea}>
              <img
                src="/Ellipse 48.svg"
                alt="user"
                className={stylesFive.userImg}
              />
            </div>
            <div>
              <CreateGroupPostForm club_id={club_id} />
            </div>
          </div>
        </div>
        <div className={stylesTwo.secondHalfContent}>
          <div className={stylesThree.aboutGroupsArea}>
            <h4>About Group</h4>
            <p>{club.about_club}</p>
            <button className={`${styles.green}`}>Share Group</button>
          </div>
          <div className={stylesFour.otherGroupsArea}>
            <h4>Other Groups</h4>
            <div className={stylesFour.cardContainer}>
              {clubOptions.map((option) => (
                <div key={option.club_id} className={stylesFour.card}>
                  <img src={option.club_img} alt={option.club_name} />
                  <div className={stylesFour.contentCard}>
                    <h5>{option.club_name}</h5>
                    <div className={stylesFour.membersAndPosts}>
                      <p>1 member</p>
                      <p>0 post today</p>
                    </div>
                    <button className={`${styles.green} ${stylesFour.joinBtn}`}>
                      Join
                    </button>
                  </div>
                  <p></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <p></p>
    </section>
  );
}
export default DynamicGroupPageReusable;
