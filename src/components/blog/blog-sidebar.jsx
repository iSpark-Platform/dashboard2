import Link from 'next/link';
import React from 'react';
import { blog_data } from '../../data';

const latest_blog = blog_data.slice(0, 3);

const BlogSidebar = () => {
    return (
        <div className="edu-blog-sidebar">
            <div className="edu-blog-widget widget-search">
                <div className="inner">
                    <h4 className="widget-title">Search</h4>
                    <div className="content">
                        <form className="blog-search" onSubmit={e => e.preventDefault()}>
                            <button className="search-button"><i className="icon-2"></i></button>
                            <input type="text" placeholder="Search" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="edu-blog-widget widget-latest-post">
                <div className="inner">
                    <h4 className="widget-title">Latest Post</h4>
                    <div className="content latest-post-list">
                        {latest_blog.map((blog) => (
                            <div key={blog.id} className="latest-post">
                                <div className="thumbnail">
                                    <Link href={`/blog-details/${blog.id}`}>
                                            <img src={blog.img} alt="Blog Images" />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <h6 className="title">
                                        <Link href={`/blog-details/${blog.id}`}>
                                            {blog.title.substring(0, 25)}...
                                        </Link>
                                    </h6>
                                    <ul className="blog-meta">
                                        <li><i className="icon-27"></i>{blog.date}</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="edu-blog-widget widget-categories">
                <div className="inner">
                    <h4 className="widget-title">Categories</h4>
                    <div className="content">
                        <ul className="category-list">
                            <li><a href="#">Humanoid Robotics<span>(1)</span></a></li>
                            <li><a href="#">Artificial Inteligence<span>(1)</span></a></li>
                            {/* <li><a href="#">Medical &amp; Health<span>(2)</span></a></li> */}
                            <li><a href="#">Cloud &amp; Edge Computing <span>(1)</span></a></li>
                            <li><a href="#">Cyber Security &amp; Digital forensics<span>(1)</span></a></li>
                            {/* <li><a href="#"><span>(9)</span></a></li> */}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="edu-blog-widget widget-action">
                <div className="inner">
                    <h4 className="title">Get Online Courses From <span>iSpark</span></h4>
                    <span className="shape-line"><i className="icon-19"></i></span>
                    <p>We Help The Students to Learn 21st Century Skills</p>
                    <a href="#" className="edu-btn btn-medium">Start Now <i className="icon-4"></i></a>
                </div>
            </div>

            <div className="edu-blog-widget widget-categories">
                <div className="inner">
                    <h4 className="widget-title">Archives</h4>
                    <div className="content">
                        <ul className="category-list">
                            <li><a href="#">2024 November <span>(1)</span></a></li>
                            <li><a href="#">2023 December <span>(1)</span></a></li>
                            <li><a href="#">2022 July<span>(1)</span></a></li>
                            {/* <li><a href="#">2021 February <span>(1)</span></a></li> */}
                            <li><a href="#">2021 January <span>(1)</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="edu-blog-widget widget-tags">
                <div className="inner">
                    <h4 className="widget-title">Tags</h4>
                    <div className="content">
                        <div className="tag-list">
                            <a href="#">AI</a>
                            <a href="#">Robotics</a>
                            <a href="#">ML</a>
                            <a href="#">Computing</a>
                            <a href="#">Cyber Security</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar;