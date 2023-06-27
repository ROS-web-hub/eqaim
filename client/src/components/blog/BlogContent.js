import React, { useEffect } from 'react';
import DOMPurify from 'dompurify'
import Parser from 'html-react-parser';
import $ from 'jquery';
import { useSearchParams } from 'react-router-dom';
import { viewBlog } from "../../actions/blog";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState } from 'react';

const BlogContent = ({ _blog, viewBlog }) => {
    const [blog, setBlog] = useState({});
    const [searchParams, setSearchParams] = useSearchParams();

    const blogId = searchParams.get("id");
    useEffect(() => {
        viewBlog(blogId);
    }, []);

    useEffect(() => {
        setBlog(_blog);

    }, [_blog]);
    
    $(function () {
        $(".blog-content").html(blog?.content);
    })
    return (
        <>
            <section className="container-fluid">
                <div className='row m-0 justify-content-center'>
                    <div className='col-8 pt-4 blog-content'>
                    </div>
                </div >
                <div className='home p-2 custom-grey'>
                    <Link to="/">
                        <svg width="42" height="54" viewBox="0 0 42 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 27L21 1L41 27" stroke="#000001" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.15385 33V53H34.8462V33" stroke="#000001" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                </div>
            </section >
        </>
    )
}

const mapStateToProps = (state) => ({
    _blog: state.blog.blog
});

export default connect(mapStateToProps, { viewBlog })(BlogContent);