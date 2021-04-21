import React, { useState } from 'react';
import {Deck, Slide, MarkdownSlideSet} from 'spectacle';

function SlideView(props) {


  console.log(props.content)

  return (
    <Deck>
      <MarkdownSlideSet>
        {props.content}
      </MarkdownSlideSet>
    </Deck>
  );
}

export default SlideView;
