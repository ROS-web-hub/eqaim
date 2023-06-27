import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createBlog } from "../../actions/blog";

const BlogEditor = ({ publish, createBlog }) => {
  const editorRef = React.useRef(null);
  React.useEffect(() => {
    if (editorRef.current) {
      const quill = editorRef.current.getEditor();
      const toolbar = quill.getModule('toolbar');
      toolbar.addHandler('center', () => {
        const selection = quill.getSelection();
        if (selection) {
          quill.format('align', 'center');
        }
      });
    }
  }, []);

  return (
    <ReactQuill
      ref={editorRef}
      placeholder="Type something..."
      modules={{
        toolbar: {
          container: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ align: [] }],
            ['link', 'image'],
            ['clean'],
            ['center']
          ]
        }
      }}
    />
  );
  const [value, setValue] = useState('');

  if (publish) {
    console.log("%c Line:7 🥃 value", "color:#6ec1c2", value);
    createBlog(value, 'adawdaw');
  }

  <ReactQuill
    ref={editorRef}
    placeholder="Type something..."
    modules={{
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ align: [] }],
          ['link', 'image'],
          ['clean'],
          ['center']
        ]
      }
    }}
    value={value} onChange={setValue}
  />

  // return <ReactQuill className="blog-editor" theme="snow" value={value} onChange={setValue} />;
}
const mapStateToProps = (state) => ({
});
export default connect(mapStateToProps, { createBlog })(BlogEditor);