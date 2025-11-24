import { blog_data } from '../../../data';
import BlogPostOne from '../../blog-post/blog-post-one';
import BlogPostTwo from '@/components/blog-post/blog-post-two';
import BlogPostThree from '@/components/blog-post/blog-post-three';

const BlogArea = ({ style_2,style_3=false,cls='',style_4}) => {
    const blogItems = blog_data.filter(b => b.home_1);
    return (
        <div className={`edu-blog-area ${style_2?style_2:"blog-area-1 edu-section-gap"} ${cls}`}>
            <div className="container">
                <div className="section-title section-center" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title">Latest Articles</span>
                    <h2 className="title">Get News with iSpark Learning Solutions</h2>
                    <span className="shape-line">
                        <i className="icon-19"></i>
                    </span>
                </div>
                <div className="row g-5"> 
                    {blogItems.map((blogItem, i) => ( 
                        <div key={i} className="col-lg-4 col-md-6 col-12" data-sal-delay={blogItem.delay} data-sal="slide-up" data-sal-duration="800">
                          {style_4 ? <BlogPostThree blog={blogItem} />: style_3 ? <BlogPostTwo blogItem={blogItem}/> : <BlogPostOne param={blogItem} />}
                        </div> 
                    ))} 
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1 scene">
                    <img data-depth="-1.4" src="/assets/images/about/shape-02.png" alt="Shape" />
                </li>
                <li className="shape-2 scene">
                    <span data-depth="2.5"></span>
                </li>
                <li className="shape-3 scene">
                    <img data-depth="-2.3" src="/assets/images/counterup/shape-05.png" alt="Shape" />
                </li>
            </ul>
        </div>
    )
}

export default BlogArea;