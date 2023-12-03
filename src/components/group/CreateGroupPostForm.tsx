import createClubPostFn from "../../lib/club/createClubPost";
import { CreateClubPost } from "../../typesAndInterfaces/createGroupPost";
import { useState } from "react";
import styles from "../../pages/styles/dynamicGroupPageReusable.module.css/createGroupPostForm/createGroupPostForm.module.css";

type Props = {
  club_id?: string;
};
const CreateGroupPostForm = ({ club_id }: Props) => {
  const [formDataInputs, setFormDataInputs] = useState<CreateClubPost>({
    club_post_content: "",
    club_post_tag: "general",
    club_post_likes: 0,
    club_post_views: 0,
    club_post_imgs: "",
  });

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type } = event.target;
    console.log(`Name:${name} , Value: ${value}`);

    if (type === "file") {
      const fileList = (event.target as HTMLInputElement).files;
      if (fileList) {
        setFormDataInputs((prevFormData) => ({
          ...prevFormData,
          [name]: fileList,
        }));
      }
    } else {
      setFormDataInputs((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formDataBody = new FormData();
    for (const key in formDataInputs) {
      if (key === "club_post_imgs") {
        const value = formDataInputs[key];
        if (value instanceof FileList) {
          const fileList = value as FileList;
          for (let i = 0; i < fileList.length; i++) {
            formDataBody.append(key, fileList[i]);
          }
        } else if (typeof value === "string") {
          formDataBody.append(key, value);
        }
      } else {
        formDataBody.append(key, String(formDataInputs[key]));
      }
    }

    try {
      if (!club_id) {
        throw new Error("club_id is required");
      }
      const data = await createClubPostFn(formDataBody, club_id);
      console.log(data.message.insertId);

      // reset the form
      setFormDataInputs({
        club_post_content: "",
        club_post_tag: "general",
        club_post_likes: 0,
        club_post_views: 0,
        club_post_imgs: "",
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className={styles.clubPostForm}
    >
      <div>
        <label htmlFor="club_post_content" className="form-label"></label>
        <textarea
          onChange={handleChange}
          id="club_post_content"
          name="club_post_content"
          value={formDataInputs.club_post_content}
          placeholder="Write Something..."
        />
      </div>
      <div className={styles.buttonsArea}>
        <div>
          <label htmlFor="club_post_tag" className="form-label"></label>
          <select
            onChange={handleChange}
            id="club_post_tag"
            name="club_post_tag"
            value={formDataInputs.club_post_tag}
          >
            <option value="general">General</option>
            <option value="sport">Sport</option>
            <option value="realEstate">Real Estate</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="club_post_imgs" className="form-label"></label>
          <input
            onChange={handleChange}
            type="file"
            id="club_post_imgs"
            name="club_post_imgs"
            multiple
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Post
        </button>
      </div>
    </form>
  );
};

export default CreateGroupPostForm;
