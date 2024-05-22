import React from "react";
import Hero from "../Components/Hero";
import "./Members.css";

function Members() {
  return (
    <div>
      <Hero title="Membership" />
      <div className="no-members">
        <h3 className="no-members-text">No members yet</h3>
      </div>
    </div>
  );
}

export default Members;
