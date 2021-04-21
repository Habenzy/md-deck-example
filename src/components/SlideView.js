import React, { useState } from "react";
import { Deck, Slide, MarkdownSlideSet } from "spectacle";

function SlideView(props) {
  console.log(props.content);

  return props.content ? (
    <Deck>
      <MarkdownSlideSet>{props.content}</MarkdownSlideSet>
    </Deck>
  ) : (
    <p>Loading...</p>
  );
}

export default SlideView;
