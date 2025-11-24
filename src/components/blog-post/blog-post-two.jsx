import Link from 'next/link';
import React from 'react';

const BlogPostTwo = ({blogItem}) => {
  return (
    <div className="edu-blog blog-style-1 remote-traning-sytle">
      <div className="inner">
          <div className="thumbnail">
              <Link href={`/blog-details/${blogItem.id}`}>
                  <img src={blogItem.sm_img} alt="Blog Images" />
              </Link>
          </div>
          <div className="content">
              <div className="category-wrap">
                  <a href="#" className="blog-category">{blogItem.category}</a>
              </div>
              <h5 className="title">
                <Link href={`/blog-details/${blogItem.id}`}>{blogItem.title}</Link>
              </h5>
              <ul className="blog-meta">
                  <li><i className="icon-27"></i>{blogItem.date}</li>
                  <li><i className="icon-28"></i>Com {blogItem.comment}</li>
              </ul>
              <p>{blogItem.sm_desc.slice(0,54)}</p>
          </div>
      </div>
  </div>
  );
};

export default BlogPostTwo;