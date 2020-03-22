import React from 'react';
import marked from 'marked';
import './MarkdownPreviewer.scss';

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      content: placeholderText
    };
  }

  handleChange(event) {
    console.log("this is working!", event.target.value)
    this.setState({ content: event.target.value });
  }

  render() {
    return <main id="markdown-previewer">
      <Editor handleChange={this.handleChange} />
      <Preview content={this.state.content} />
    </main>
  }
}

function Editor(props) {
  return (
    <div id="editor-container">
      <div>Editor</div>
      <textarea name="" id="editor" onChange={props.handleChange}></textarea>
    </div>
  )
}

function Preview(props) {

  function createMarkup() {
    return { __html: marked(props.content) }
  }

  return (
    <div id="preview-container">
      <div>Preview</div>
      <div id="preview" dangerouslySetInnerHTML={createMarkup()}>
      </div>
    </div>
  )
}

export default MarkdownPreviewer

const placeholderText =
  `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`