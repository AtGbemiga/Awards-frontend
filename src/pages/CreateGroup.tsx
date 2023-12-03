import SubHeading from "../components/app/SubHeading";
import styles from "./styles/createGroupPage/form.module.css";
import styles1 from "./styles/createGroupPage/wallpaperAndImgArea.module.css";
import styles2 from "./styles/createGroupPage/tagsArea.module.css";
import styles3 from "./styles/createGroupPage/formTextInputArea.module.css";
import { useState } from "react";
import createClubFn from "../lib/club/createClub";
import { CreateClub } from "../typesAndInterfaces/createClub";
import { useNavigate } from "react-router-dom";

const CreateGroup = () => {
  const navigate = useNavigate();
  const [formDataInputs, setFormDataInputs] = useState<CreateClub>({
    club_name: "",
    about_club: "",
    club_allow_invite: 0,
    club_location: "",
    club_tag: "fashion",
    club_rules_and_regulation: "",
    club_type: "public",
    club_img: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      if (key === "club_img") {
        const value = formDataInputs[key];
        if (value instanceof FileList) {
          const fileList = value as FileList;
          for (let i = 0; i < fileList.length; i++) {
            formDataBody.append(key, fileList[i]);
          }
        } else if (typeof value === "string") {
          // If the value is already a string, it means a picture URL was provided.
          // In that case, directly set the field without appending to the FormData.
          formDataBody.append(key, value);
        }
      } else {
        formDataBody.append(key, String(formDataInputs[key]));
      }
    }

    try {
      const data = await createClubFn(formDataBody);
      console.log(data.message.insertId);
      navigate(`/group/${data.message.insertId}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <label htmlFor="club_name" className="form-label">
          Club name
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="club_name"
          name="club_name"
          value={formDataInputs.club_name}
        />
      </div>
      <div>
        <label htmlFor="about_club" className="form-label">
          about_club
        </label>
        <textarea
          onChange={handleChange}
          className="form-control"
          id="about_club"
          name="about_club"
          value={formDataInputs.about_club}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="club_img" className="form-label">
          club_img
        </label>
        <input
          onChange={handleChange}
          type="file"
          className="form-control"
          id="club_img"
          name="club_img"
        />
      </div>
      <div>
        <label htmlFor="club_allow_invite" className="form-label">
          club_allow_invite
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="club_allow_invite"
          name="club_allow_invite"
          value={formDataInputs.club_allow_invite}
        />
      </div>
      <div>
        <label htmlFor="club_location" className="form-label">
          club_location
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="club_location"
          name="club_location"
          value={formDataInputs.club_location}
        />
      </div>
      <div>
        <label htmlFor="club_tag" className="form-label">
          club_tag
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="club_tag"
          name="club_tag"
          value={formDataInputs.club_tag}
        />
      </div>
      <div>
        <label htmlFor="club_rules_and_regulation" className="form-label">
          club_rules_and_regulation
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="club_rules_and_regulation"
          name="club_rules_and_regulation"
          value={formDataInputs.club_rules_and_regulation}
        />
      </div>
      <div>
        <label htmlFor="club_type" className="form-label">
          club_type
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="club_type"
          name="club_type"
          value={formDataInputs.club_type}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreateGroup;
