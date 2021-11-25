import React from "react";
import PropTypes from "prop-types";
//import { children } from "react";

function Profile(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.fullname}</h1>
      <p>{props.bio}</p>
      <p>{props.profession}</p>
      {props.children}
      <button onClick={(name) => props.HandleName(`Welcome ${props.fullname}`)}>
        Contact me
      </button>
    </div>
    // <p>I am a software developer</p>
  );
}
Profile.defaultProps = {
  fullname: "Your name goes here",
  bio: "Tell us a bit about yourself",
  profession: "What is your profession?",
};

Profile.propTypes = {
  fullname: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  HandleName: PropTypes.func,
};

export default Profile;
