import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./style.css";

export default function Index() {
  return (
    <div className="footer">
      <small> ©copyright sarabpreetsingh --</small>
      <small>
        <span className="social-icon">
          <TwitterIcon />
        </span>
        <span className="social-icon">
          <FacebookIcon />
        </span>
        <span className="social-icon">
          <LinkedInIcon />
        </span>
      </small>
    </div>
  );
}
