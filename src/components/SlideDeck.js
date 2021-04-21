import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import SlideView from "./SlideView";

const useStyles = makeStyles(() => ({
  slides: {
    width: "90%",
    height: "70vh",
    margin: "auto",
    display: "block",
  },
  fullScreen: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    zIndex: "10",
  },
  enterFullscreenBtn: {
    display: "block",
    margin: "15px auto 0 auto",
    fontSize: "1.2rem",
  },
  exitFullscreenBtn: {
    position: "absolute",
    bottom: "2vh",
    left: "2vh",
    zIndex: "11",
    fontSize: "1.2rem",
    color: "black",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "lightgrey",
      color: "black",
    },
  },
}));

const SlideDeck = (props) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!content.length) {
      fetch("https://habenzy.github.io/md-sample-deck/test-one.md")
        .then((res) => res.text())
        .then((mdTxt) => {
          setContent(mdTxt);
        });
    }
  });

  const classes = useStyles();
  return (
    <div>
      <div
        id="slides"
        title="Lesson Slides"
        className={clsx(classes.slides, fullScreen && classes.fullScreen)}
      >
        <SlideView content={content} />
      </div>
      <Button
        className={classes.enterFullscreenBtn}
        type="button"
        size="small"
        variant="outlined"
        onClick={() => {
          setFullScreen(true);
        }}
      >
        See Full Screen Slides
      </Button>
      {fullScreen && (
        <Button
          className={classes.exitFullscreenBtn}
          type="button"
          size="small"
          variant="outlined"
          onClick={() => {
            setFullScreen(false);
          }}
        >
          Exit Full Screen Slides
        </Button>
      )}
    </div>
  );
};

export default SlideDeck;
