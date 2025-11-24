import React from 'react';
import { blog_data } from '@/data';
import Link from 'next/link';

// single blog 
function SingleBlog({blog}) {
  return (
    <div className="edu-blog blog-style-11">
      <div className="inner">
          <div className="thumbnail">
              <Link href={`/blog-details/${blog.id}`}>
                  <img src={blog.img} alt="Blog Images"/>
              </Link>
              <div className="category-wrap">
                  <a href="#" className="blog-category">{blog.category}</a>
              </div>
          </div>
          <div className="content">
              <ul className="blog-meta">
                  <li><i className="icon-27"></i>{blog.date}</li>
                  <li><i className="icon-28"></i>Com {blog.comment}</li>
              </ul>
              <h4 className="title">
                <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
                </h4>
              <Link href={`/blog-details/${blog.id}`} className="blog-btn">
                Learn More <i className="icon-4"></i>
              </Link>
          </div>
      </div>
  </div>
  )
}

const BlogArea = () => {
  const blog_items = blog_data.filter(b => b.home_quran_learning)
  return (
    <div className="edu-blog-area blog-area-11 edu-section-gap">
        <div className="container edublink-animated-shape">
            <div className="section-title section-center" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                <span className="pre-title">Latest Articles</span>
                <h2 className="title">Get News with EduBlink</h2>
                <span className="shape-line"><i className="icon-19"></i></span>
            </div>
            <div className="row g-5">

                {blog_items.map((blog,i) => (
                <div key={blog.id} className="col-lg-4" data-sal-delay={`${i+1}00`} data-sal="slide-up" data-sal-duration="800">
                    <SingleBlog blog={blog} />
                </div>
                ))}

            </div>
            <ul className="shape-group">
                <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <img data-depth="1" src="/assets/images/others/shape-76.png" alt="Shape"/>
                </li>
                <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <img data-depth="-1.5" src="/assets/images/others/shape-75.png" alt="Shape"/>
                </li>
                <li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <img data-depth="1.5" src="/assets/images/about/shape-51.png" alt="Shape"/>
                </li>
                <li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <img data-depth="-1.5" src="/assets/images/others/shape-74.png" alt="Shape"/>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default BlogArea;