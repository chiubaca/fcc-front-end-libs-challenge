import React from 'react';
import './MarkdownPreviewer.scss'

export default function RandomQuoteMachine() {
  return (
    <main id="markdown-previewer">
      <Editor />
      <Preview />
    </main>
  );
}

function Editor() {
  return (
    <div id="editor-container">
      <div>Editor</div>
      <textarea name="" id="editor" ></textarea>
    </div>
  )
}

function Preview() {
  return (
    <div id="preview-container">
      <div>Preview</div>
      <div id="preview">
      </div>
    </div>
  )

}