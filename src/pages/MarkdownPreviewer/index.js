import React from 'react';
import marked from 'marked'
import './MarkdownPreviewer.scss'

  ;

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      content: ""
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

  return (
    <div id="preview-container">
      <div>Preview</div>
      <div id="preview" >
        {marked(props.content, { sanitize: true })}
      </div>
    </div>
  )

}

export default MarkdownPreviewer