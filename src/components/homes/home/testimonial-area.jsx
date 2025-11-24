import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

const testimonial_data = [
    {
        img: '/assets/images/testimonial/testimonial-01.png',
        desc: 'As I continue to navigate the exciting world of technology, I am eager to see how my skills and knowledge.',
        ratings: <>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
        </>,
        name: 'Krithvik',
        title: 'Student'
    },
    {
        img: '/assets/images/testimonial/testimonial-02.png',
        desc: 'iSpark allows me to transform my creative ideas into tangible objects, fostering hands-on learning and innovation.',
        ratings: <>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
        </>,
        name: 'Shika',
        title: 'Student'
    },
    {
        img: '/assets/images/testimonial/testimonial-03.png',
        desc: 'iSpark allows me to engage in hands-on, creative learning experiences that combine robotics and programming.',
        ratings: <>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
        </>,
        name: 'Divya',
        title: 'Student'
    },
    {
        img: '/assets/images/testimonial/testimonial-04.png',
        desc: 'iSpark opens doors to a world of hands-on learning, problem-solving, and innovation.',
        ratings: <>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
            <i className="icon-23"></i>
        </>,
        name: 'Yukesh Raj',
        title: 'Student'
    }
]

export default function TestimonialArea() {
    const [loop,setLoop] = useState(false);
    useEffect(() => setLoop(true) ,[])
    return (
        <div className="testimonial-area-1 section-gap-equal">
            <div className="container">
                <div className="row g-lg-5">
                    <div className="col-lg-5">
                        <div className="testimonial-heading-area">
                            <div className="section-title section-left" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">Testimonials</span>
                                <h2 className="title">What Our Students Have To Say</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>Student voices provide valuable insights into their learning journey, shaping improvements and creating a more engaging educational experience for everyone.</p>
                                <a href="#" className="edu-btn btn-large">View All<i className="icon-4"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={loop}
                            className="home-one-testimonial-activator swiper "
                            modules={[Autoplay]}
                            pagination={false}
                            grabCursor={true}
                            speed={1500}
                            autoplay={{
                                delay: 3500
                            }}
                            breakpoints={{
                                577: {
                                slidesPerView: 2
                                }
                            }}
                        >
                            {testimonial_data.map((testi, i) => (
                                <SwiperSlide key={i}>
                                    <div className="testimonial-grid">
                                        <div className="thumbnail">
                                            <img src={testi.img} alt="Testimonial" />
                                            <span className="qoute-icon"><i className="icon-26"></i></span>
                                        </div>
                                        <div className="content">
                                            <p>{testi.desc}</p>
                                            <div className="rating-icon">
                                                {testi.ratings}
                                            </div>
                                            <h5 className="title">{testi.name}</h5>
                                            <span className="subtitle">{testi.title}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
