import { useState } from "react";
import "./ProfileCard.css";

function ProfileCard({ name, image, description }) {
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    <>
      <div className="profile-card">

        <div className="profile-image-wrapper">
          <img
            src={image}
            alt={name}
            className="profile-image"
          />
        </div>

        <div className="profile-content">

          <span className="profile-badge">
            MCA STUDENT
          </span>

          <h2>{name}</h2>

          <p className="profile-title">
            Master of Computer Applications
          </p>

          <p className="profile-description">
            {description}
          </p>

          <div className="profile-skills">
            <span>Java</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>MySQL</span>
          </div>

          <button
            className="profile-button"
            onClick={() => setShowPhoto(true)}
          >
            View Profile
          </button>

        </div>

      </div>

      {showPhoto && (
        <div
          className="photo-modal"
          onClick={() => setShowPhoto(false)}
        >

          <div
            className="photo-modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="close-button"
              onClick={() => setShowPhoto(false)}
            >
              ×
            </button>

            <img
              src={image}
              alt={name}
              className="large-profile-photo"
            />

            <h3>{name}</h3>

          </div>

        </div>
      )}
    </>
  );
}

export default ProfileCard;