import React from "react";
import "./Home.css";
import "./ScalePlayer.js";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
class FingeringPaper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return this.props.isPlaying ? (
      <>
        <Paper style={{ fontSize: "24px" }} className="fingering-paper">
          {
            <>
              <Typography>
                <strong>{"RH fingering: "}</strong>
                {this.props.RHFingering[this.props.activeNotesIndex]}
              </Typography>
              <Typography>
                <strong>{" LH fingering: "}</strong>
                {this.props.LHFingering[this.props.activeNotesIndex]}
              </Typography>
            </>
          }
        </Paper>
      </>
    ) : (
      <>
        <Paper className="fingering-paper">
          {
            <>
              <Typography>
                <strong>{"RH fingering: "}</strong>
                {this.props.RHFingering}
              </Typography>
              <Typography>
                <strong>{" LH fingering: "}</strong>
                {this.props.LHFingering}
              </Typography>
            </>
          }
        </Paper>
      </>
    );
  }
}

export default FingeringPaper;
