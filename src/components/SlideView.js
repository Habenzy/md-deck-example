import React, { useState } from 'react';
import {Deck, Slide} from 'spectacle';
import MarkdownRenderer from './MarkdownRenderer';

function SlideView(props) {
  const [currIndex, setCurrIndex] = useState(0);

  console.log(props.content)

  return (
    <Deck>

      {props.content.map((slide, index) => {
        return(
          <Slide key={index}>
            <MarkdownRenderer text={slide} />
          </Slide>
        )
      })}
      

      {/* {props.content[currIndex - 1] && (
        <button
          id="prev-button"
          onClick={() => {
            setCurrIndex(currIndex - 1);
          }}
        >
          Previous
        </button>
      )}

      {props.content[currIndex + 1] && (
        <button
          id="next-button"
          onClick={() => {
            setCurrIndex(currIndex + 1);
          }}
        >
          Next
        </button>
      )} */}
    </Deck>
  );
}

export default SlideView;
