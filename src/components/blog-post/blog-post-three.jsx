import Link from 'next/link';
import React from 'react';

const BlogPostThree = ({blog}) => {
  return (
    <div className="edu-blog blog-style-1 digital-marketing-sytle">
      <div className="inner">
          <div className="thumbnail">
              <Link href={`/blog-details/${blog.id}`}>
                  <img src={blog.img} alt="Blog Images"/>
              </Link>
          </div>
          <div className="content">
              <div className="read-more-btn">
                  <Link className="btn-icon-squre" href={`/blog-details/${blog.id}`}>
                    <i className="icon-4"></i>
                  </Link>
              </div>
              <ul className="blog-meta">
                  <li><i className="icon-27"></i>{blog.date}</li>
                  <li><i className="icon-28"></i>Com {blog.comment}</li>
              </ul>
              <h5 className="title">
                <Link href={`/blog-details/${blog.id}`}>
                  {blog.title}
                </Link>
              </h5>
          </div>
      </div>
  </div>
  );
};

export default BlogPostThree;