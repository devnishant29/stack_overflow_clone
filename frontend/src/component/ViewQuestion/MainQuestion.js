import { Bookmark, History, SportsRugbySharp } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";

import "./index.css";

function MainQuestion() {
  const [show, setShow] = useState(false);

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question">This is question title</h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>
        </div>
        <div className="main-desc">
          <div className="info">
            <p>TimeStamp</p>
            <p>
              Active<span>today</span>
            </p>
            <p>
              Viewed<span>43 times</span>
            </p>
          </div>
        </div>

        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <p className="arrow">▲</p>
                <p className="arrow">0</p>
                <p className="arrow">▼</p>

                <Bookmark />
                <History />
              </div>
            </div>

            <div className="question-answer">
              <p>This is question body</p>
              <div className="author">
                <small>Asked-Timestamp</small>
                <div className="auth-details">
                  <Avatar />
                  <p>Author Name</p>
                </div>
              </div>

              <div className="comments">
                <div className="comment">
                  <p>
                    This is a comment - <span>username</span>
                    <small>Timestamp</small>
                  </p>
                </div>

                <p onClick={() => setShow(!show)}>Add a comment</p>
                {show && (
                  <div className="title">
                    <textarea
                      typeof="text"
                      placeholder="add your comment..."
                      rows={5}
                      style={{
                        margin: "5px 0px",
                        padding: "10px",
                        border: "1px solid rgba(0,0,0,0.2)",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                    ></textarea>
                    <button style={{
                      maxWidth: "fit-content"
                    }}>Add comment</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="all-questions">
            <p style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "300"
            }}>No. of answers</p>
            <div className="all-questions-container">
              <div className="all-questions-left">
                <div className="all-options">
                  <p className="arrow">▲</p>
                  <p className="arrow">0</p>
                  <p className="arrow">▼</p>

                  <Bookmark />
                  <History />
                </div>
              </div>

              <div className="question-answer">
                <p>This is question body</p>
                <div className="author">
                  <small>Asked-Timestamp</small>
                  <div className="auth-details">
                    <Avatar />
                    <p>Author Name</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="main-answer">
       <h3>Your answer</h3>
       <ReactQuill className="react-quill" theme="snow" style={{
        height: "200px"
       }}/>
       <button className="post-button">Post your answer</button>
      </div>

    </div>
  );
}

export default MainQuestion;
