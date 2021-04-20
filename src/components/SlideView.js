import React, { useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer';

function SlideView(props) {
  const [currIndex, setCurrIndex] = useState(0);

  console.log(props.content)

  return (
    <div>
      
      <MarkdownRenderer text={props.content[currIndex]} />

      {props.content[currIndex - 1] && (
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
      )}
    </div>
  );
}

export default SlideView;
