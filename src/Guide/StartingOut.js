import React from "react";
import "./StartingOut.css";
import Paper from "@material-ui/core/Paper";
class StartingOut extends React.Component {
  render() {
    return (
      <Paper style={{ height: "100vh" }}>
        <div className="startingout-container">
          <h3>How to practice?</h3>
          <div>
            <p style={{ display: "flex", justifyContent: "center" }}>
              A simple practice routine contains
            </p>
            <ul className="practice-list">
              <li className="p-list-item">Scales and arpeggios (5-10 min)</li>
              <li className="p-list-item">
                Working through the pieces you are currently working on: (15-60
                min)
              </li>
              <li className="p-list-item">
                Practice one to two measures at a time; start with a slow
                metronome speed and gradually increase
              </li>
              <li className="p-list-item">
                Sight reading (use pieces below the level of the current pieces
                you're working on) (5-10 min)
              </li>
            </ul>
          </div>
        </div>
      </Paper>
    );
  }
}

export default StartingOut;
