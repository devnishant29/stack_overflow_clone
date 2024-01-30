import React from "react";
import "./css/AllQuestions.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import "./css/AllQuestions.css"

function AllQuestions() {
  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>Votes</span>
            </div>

            <div className="all-option">
              <p>0</p>
              <span>Answers</span>
            </div>

            <div className="all-option">
              <small>0 Views</small>
            </div>
          </div>
        </div>

        <div className="question-answer">
          <Link>This is question title</Link>
          <div
            style={{
              width: "98%",
            }}
          >
            <div>This is answer</div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <span className="question-tags">react</span>
            <span className="question-tags">js</span>
            <span className="question-tags">frontend</span>
          </div>

          <div className="author">
            <small >Time Stamp</small>
            <div className="author-details">
              <Avatar />
              <p>username</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
