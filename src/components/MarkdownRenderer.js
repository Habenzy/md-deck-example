import React from 'react';
import MDX from '@mdx-js/runtime';
import { MDXProvider } from '@mdx-js/react';
import { Typography, Table } from '@material-ui/core';
import Code from './Code';
import autolinkHeadings from 'rehype-autolink-headings';
import slug from 'remark-slug';
import { Slide, Heading} from 'spectacle';


// Component takes markdown text as a prop and converts it to JSX
//We need to be able to convert to slides so we bin the mui stuff
//And then we replace with spectacle components
const MarkdownRenderer = (props) => {
  const components = {
    pre: props => <div {...props} />,
    code: props => <Code {...props} />,
    h1: props => <Heading {...props} />,
    //Not worrying about other styles yet
    h2: props => <Typography variant="h2" {...props} gutterBottom />,
    h3: props => <Typography variant="h3" {...props} gutterBottom />,
    h4: props => <Typography variant="h4" {...props} gutterBottom />,
    h5: props => <Typography variant="h5" {...props} gutterBottom />,
    blockquote: props => <Typography variant="caption" display="block" {...props} gutterBottom />,
    p: props => <Typography variant="body1" {...props} gutterBottom />,
    ul: props => <Typography component="ul" variant="subtitle1" {...props} gutterBottom />,
    ol: props => <Typography component="ol" variant="overline" {...props} />,
    table: props => <Table {...props} />,
  };

  return(
    props.text ?
      <div>
        <MDXProvider components={components}>
          <MDX
            remarkPlugins={[
              slug,
            ]}
            rehypePlugins={[
              [
                autolinkHeadings, {
                  linkProperties: { ariaHidden: true },
                  content: [{ type: 'text', value: '\u{1f517}'}],
                },
              ],
            ]}
          >
            {props.text}
          </MDX>
        </MDXProvider>
      </div> :
      <div>Loading Lesson Content or Content Does not Exist</div>
  );
};

export default MarkdownRenderer;
