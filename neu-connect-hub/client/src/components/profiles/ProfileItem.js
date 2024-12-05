import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ProfileItem.css";

const ProfileItem = ({ profile }) => {
  // Destructure with fallback values to avoid errors if profile or user is null
  const {
    user = {},
    status,
    company,
    location,
    skills = [],
  } = profile || {}; // Fallback to empty object if profile is null or undefined

  const { _id, name, avatar } = user || {}; // Fallback to empty object if user is null or undefined

  return (
    <div className="profile-card">
      <div className="profile-card-header">
        {/* <img src={avatar} alt={name} className="profile-avatar" /> */}
        <div className="profile-info">
          <h2 className="profile-name">{name || "Unknown Name"}</h2>
          <p className="profile-status">
            {status || "No status"} {company && <span>at {company}</span>}
          </p>
          {location && <p className="profile-location">{location}</p>}
        </div>
      </div>

      <div className="profile-skills">
        {skills.length > 0 ? (
          skills.slice(0, 4).map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))
        ) : (
          <p>No skills listed</p>
        )}
      </div>

      <Link to={`/profile/${_id}`} className="view-profile-button">
        View Profile
      </Link>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.shape({
    user: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
    status: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProfileItem;
