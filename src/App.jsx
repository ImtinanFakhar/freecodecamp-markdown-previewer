import React, { useState } from 'react';
import { marked } from 'marked';  // Corrected import
import './App.css';

const App = () => {
  const initialMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...

[FreeCodeCamp](https://www.freecodecamp.org)

\`<div></div>\`

\`\`\`
code block
\`\`\`

- List item

> Blockquote

![Image](https://via.placeholder.com/150)

**Bolded text**
  `;

  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const getMarkdownText = () => {
    return { __html: marked(markdown, { breaks: true }) };
  };

  return (
    <div className="App">
      <h1>Editor</h1>
      <textarea 
        id="editor" 
        value={markdown} 
        onChange={handleChange} 
      />
      <h1>Preview</h1>
      <div 
        id="preview" 

        dangerouslySetInnerHTML={getMarkdownText()} 
      />
    </div>
  );
};

export default App;
