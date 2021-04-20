import { MDXProvider } from '@mdx-js/react';
import React, { useState } from 'react';
import {Deck, Slide} from 'spectacle';
import { mdxComponentMap} from 'spectacle-mdx-loader'

function SlideView(props) {
  const [currIndex, setCurrIndex] = useState(0);

  console.log(props.content)

  return (
    <MDXProvider components={mdxComponentMap}>
    <Deck>

      {props.content.map((MDXSlide, i) => [MDXSlide])
        .map(([MDXSlide], i) => (
          <Slide key={`slide-${i}`} slideNum={i}>
            <MDXSlide />
          </Slide>
        ))}
      

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
    </MDXProvider>
  );
}

export default SlideView;
