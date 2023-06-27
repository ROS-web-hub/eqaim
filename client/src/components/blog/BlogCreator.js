import React, { useState } from "react";
import api from '../../utils/api';
import axios from "axios";
import $ from 'jquery';
import { connect } from 'react-redux';
import { createBlog } from "../../actions/blog";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";

const CreatePost = ({ createBlog }) => {
    const formats = [
        'header', 'bold', 'italic', 'underline', 'strike', 'align', 'link', 'image'
    ];

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ align: [] }],
            ['link', 'image'],
            ['clean']
        ],
        clipboard: {
            matchVisual: false
        }
    };
    const [value, setValue] = useState('');
    const publishClick = () => {
        createBlog(value);
    }

    return (
        <section className="container-fluid p-0 creator-container">
            <div className=" row justify-content-center">
                <div className='col-12 col-sm-9 pt-3'>
                    <ReactQuill formats={formats} modules={modules} className="blog-editor" theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className='d-flex flex-column icons'>
                <div className='icon-home custom-grey p-2 my-2'>
                    <Link to="/">
                        <svg width="42" height="54" viewBox="0 0 42 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 27L21 1L41 27" stroke="#000001" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.15385 33V53H34.8462V33" stroke="#000001" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
                <div className='icon-publish custom-grey p-2' onClick={publishClick}>
                    <svg width="42" height="54" viewBox="0 0 42 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31 5H37C38.0609 5 39.0783 5.42143 39.8284 6.17157C40.5786 6.92172 41 7.93913 41 9V49C41 50.0609 40.5786 51.0783 39.8284 51.8284C39.0783 52.5786 38.0609 53 37 53H5C3.93913 53 2.92172 52.5786 2.17157 51.8284C1.42143 51.0783 1 50.0609 1 49V9C1 7.93913 1.42143 6.92172 2.17157 6.17157C2.92172 5.42143 3.93913 5 5 5H11" stroke="#000001" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M27 1H15C12.7909 1 11 2.79086 11 5V7C11 9.20914 12.7909 11 15 11H27C29.2091 11 31 9.20914 31 7V5C31 2.79086 29.2091 1 27 1Z" stroke="#000001" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11 33L19 39L29 23" stroke="#000001" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>
            </div>

        </section>
    );
};

const mapStateToProps = (state) => ({
});
export default connect(mapStateToProps, { createBlog })(CreatePost);