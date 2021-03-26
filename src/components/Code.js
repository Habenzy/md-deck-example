import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';
import oceanicTheme from 'prism-react-renderer/themes/oceanicNext';
/*  Other Code block themes available
  - defaultTheme
  - lightTheme
  - draculaTheme
  - githubTheme
  - nightOwlTheme
  - nightOwlLightTheme
  - palenightTheme
  - purpleTheme
  - ultraminTheme
  - vsDarkTheme */

let Code =  ({ children, className, live }) => {
  const language = className ? className.replace('language-', '') : 'sh';
  const theme = oceanicTheme;

  return live ? (
    <div
      style={{
        backgroundColor: '#d1dada',
        padding: 20,
        borderRadius: '3px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}>
      <LiveProvider code={children} theme={theme} style={{}}>
        <div
          style={{
            display: 'inline-block',
            width: '48%',
            alignSelf: 'flex-start',
            justifySelf: 'flex-start',
          }}>
          <h2>Code:</h2>
          <LiveEditor style={{ borderRadius: '3px' }} />
        </div>
        <div
          style={{
            display: 'inline-block',
            width: '48%',
            alignSelf: 'flex-start',
            justifySelf: 'flex-end',
          }}>
          <h2>Preview:</h2>
          <LivePreview
            style={{ backgroundColor: 'white', borderRadius: '3px' }}
          />
        </div>
        <LiveError style={{ display: 'block' }} />
      </LiveProvider>
    </div>
  ) : (
    <Highlight
      {...defaultProps}
      code={children}
      font-family='mono-space'
      language={language}
      theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: '1.2rem',
            overflow: 'hidden',
            fontSize: '1.2rem',
            borderRadius: '3px',
          }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code
