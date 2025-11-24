import React from 'react';
import { blog_data } from '@/data';
import Link from 'next/link';

const BlogArea = () => {
  const blog_items = blog_data.filter(b => b.home_sales_coach);
  return (
    <div className="edu-blog-area blog-area-3 edu-section-gap sales-coach-blog">
        <div className="container">
            <ul className="blog-section-title">
                <li>
                    <div className="section-title section-left sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                        <span className="pre-title">Latest Articles</span>
                        <h2 className="title">Get News with EduBlink</h2>
                        <span className="shape-line"><i className="icon-19"></i></span>
                    </div>
                </li>
                <li>
                    <div className="blog-view-all sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1200">
                        <Link href="/blog-standard" className="edu-btn">More Article <i className="icon-4"></i></Link>
                    </div>
                </li>
            </ul>
            <div className="row g-5">

                <div className="col-lg-6 col-12" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                    <div className="edu-blog blog-style-2 blog-style-10 first-large-blog">
                        <div className="inner">
                            <div className="thumbnail">
                                <Link href={`/blog-details/${blog_items[0].id}`}>
                                    <img src={blog_items[0].img} alt="Blog Images"/>
                                </Link>
                                <div className="content">
                                    <div className="category-wrap">
                                        <a href="#" className="blog-category">{blog_items[0].category}</a>
                                    </div>
                                    <h3 className="title">
                                      <Link href={`/blog-details/${blog_items[0].id}`}>{blog_items[0].title}</Link>
                                    </h3>
                                    <ul className="blog-meta">
                                        <li><i className="icon-27"></i>{blog_items[0].date}</li>
                                        <li><i className="icon-28"></i>Com {blog_items[0].comment}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {blog_items.slice(1,3).map((blog,i) => (
                <div key={i} className="col-lg-3" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                    <div className="edu-blog blog-style-2 blog-style-10">
                        <div className="inner">
                            <div className="thumbnail">
                                <Link href={`/blog-details/${blog.id}`}>
                                    <img src={blog.img} alt="Blog Images"/>
                                </Link>
                            </div>
                            <div className="content">
                                <div className="category-wrap">
                                    <a href="#" className="blog-category small-category">{blog.category}</a>
                                </div>
                                <h5 className="title">
                                    <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
                                </h5>
                                <ul className="blog-meta">
                                    <li><i className="icon-27"></i>{blog.date}</li>
                                    <li><i className="icon-28"></i>Com {blog.comment}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default BlogArea;