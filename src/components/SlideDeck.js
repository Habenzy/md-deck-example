import React, { useState } from "react";
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

  //markdownText used to stub out sample data ideally data will be stored in DB or github repo
  const markdownText = `# Hello!

## This should be the first slide

some content

# This is another title

## And this is on the second slide

more content

# Here's a third slide!

even more content
`;

  //take the markdown and break it into discreet slides
  function breakDeck(markdownTxt) {
    //markdown text passed in can't start with a newline character or first slide is blank
    let slides = markdownTxt.split("\n# ");

    return slides.map(slide => "# " + slide);
  }

  let contentArray = breakDeck(markdownText);

  const classes = useStyles();
  return (
    <div>
      {/* Replace iFrame with custom slide deck component
          write slides in markdown for tansferability
          build array of content breaking on H1s and cycle through content by clicking buttons
          Check with Josh about these ideas...
          creat div to hold MarkdownRenderer, prev and next buttons
      */}
      <div
        id="slides"
        title="Lesson Slides"
        className={clsx(classes.slides, fullScreen && classes.fullScreen)}
      >
        <SlideView content={contentArray} />
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
