import { gym_training } from '@/data/instructors';
import Link from 'next/link';
import React from 'react';

const TeamArea = () => {
  return (
    <div className="edu-team-area team-area-9 gap-tb-text">
    <div className="container">
        <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <span className="pre-title color-secondary">Instructors</span>
            <h2 className="title">Course Instructors</h2>
            <span className="shape-line"><i className="icon-19"></i></span>
        </div>
        <div className="row g-5">

            {gym_training.map((item,i) => (
            <div key={i} className="col-lg-4 col-sm-12 col-12" data-sal-delay={`${i+1}00`} data-sal="slide-up" data-sal-duration="800">
                <div className="edu-team-grid team-style-1 team-style-9">
                    <div className="inner">
                        <div className="thumbnail-wrap">
                            <div className="thumbnail">
                                <Link href="/team-details">
                                    <img src={`/assets/images/team/${item.img}`} alt="team images"/>
                                </Link>
                            </div>
                            <ul className="team-share-info">
                                <li><a href="#"><i className="icon-share-alt"></i></a></li>
                                <li><a href="#"><i className="icon-facebook"></i></a></li>
                                <li><a href="#"><i className="icon-twitter"></i></a></li>
                                <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                            </ul>
                            <div className="content ">
                                <h5 className="title">
                                  <Link href="/team-details">{item.name}</Link>
                                </h5>
                                <span className="designation">{item.title}</span>
                            </div>
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

export default TeamArea;