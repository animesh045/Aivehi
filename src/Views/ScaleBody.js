import React from "react";
import Header from "./Header.js";
import "./Home.css";
import "./ScalePlayer.js";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
class ScaleBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center"
        }}
        elevation={4}
        className="body-container"
      >
        <div style={{ padding: "20px", fontSize: "20px" }}>
          <>
            <Typography>
              <strong>Type: </strong>
              {this.props.tip}
            </Typography>
          </>
        </div>
        <div style={{ paddingTop: "20px" }} className="select-container">
          <FormControl className="scalesForm">
            <InputLabel id="majmin-label">Key</InputLabel>

            <Select
              className="main-select"
              variant="outlined"
              onChange={this.props.handleScaleChange}
              value={this.props.chosenScale}
            >
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="C#/D♭">C#/D♭</MenuItem>
              <MenuItem value="D">D</MenuItem>
              <MenuItem value="E">E</MenuItem>
              <MenuItem value="F">F</MenuItem>
              <MenuItem value="F#/G♭">F#/G♭</MenuItem>
              <MenuItem value="G">G</MenuItem>
              <MenuItem value="D#/E♭">D#/E♭</MenuItem>
              <MenuItem value="G#/A♭">G#/A♭</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="A#/B♭">A#/B♭</MenuItem>
              <MenuItem value="B">B</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="majorMinorForm">
            <InputLabel id="majmin-label">Major/Minor</InputLabel>
            <Select
              className="main-select"
              variant="outlined"
              onChange={this.props.handleMajorMinor}
              value={this.props.isMajor ? "Major" : "Minor"}
            >
              <MenuItem disabled={this.props.isMajor} value="Major">
                Major
              </MenuItem>
              <MenuItem disabled={this.props.isMinor} value="Minor">
                Minor
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl className="speedForm">
            <InputLabel id="speed-label">Speed</InputLabel>
            <Select
              variant="outlined"
              className="main-select"
              onChange={this.props.handleSpeedChange}
              value={this.props.speed}
            >
              <MenuItem value={800}>.25x </MenuItem>
              <MenuItem value={400}>.5x </MenuItem>
              <MenuItem value={200}>1x </MenuItem>
            </Select>
          </FormControl>
        </div>

        <div
          style={{ paddingBottom: "30px" }}
          className="play_buttons_container"
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className="scale-button"
            onClick={this.props.handleScaleAndCreate}
          >
            {this.state.isPlaying ? "Stop" : "Play Scale"}
          </Button>

          <Button
            variant="contained"
            color="secondary"
            size="medium"
            className="scale-button"
            onClick={this.props.handleArpeggioAndCreate}
          >
            {this.props.isPlaying ? "Stop" : "Play arpeggio"}
          </Button>
        </div>
      </Paper>
    );
  }
}

export default ScaleBody;
