import React from 'react';
import Link from 'next/link';
import { quran_instructors } from '@/data/instructors';

const TeamArea = () => {
  return (
    <div className="edu-team-area team-area-8 gap-tb-text">
      <div className="container">
          <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
              <span className="pre-title color-secondary">Instructors</span>
              <h2 className="title">Course Instructors</h2>
              <span className="shape-line"><i className="icon-19"></i></span>
          </div>
          <div className="row g-5">
              {quran_instructors.map((item,i) => (
              <div key={item.id} className="col-lg-4 col-sm-6 col-12" data-sal-delay={`${i+1}00`} data-sal="slide-up" data-sal-duration="800">
                  <div className="edu-team-grid team-style-1 team-style-8">
                      <div className="inner">
                          <div className="thumbnail-wrap">
                              <div className="thumbnail">
                                  <Link href="/team-details">
                                      <img src={`/assets/images/team/${item.img}`} alt="team images"/>
                                  </Link>
                              </div>
                              <ul className="team-share-info">
                                {item.social_links.map((social, i) => (
                                    <li key={i}>
                                        <a href={social.link} target='_blank'>
                                            <i className={social.icon}></i>
                                        </a>
                                    </li>
                                ))}
                              </ul>
                          </div>
                          <div className="content">
                              <h5 className="title">
                                <Link href="/team-details">{item.name}</Link>
                              </h5>
                              <span className="designation">{item.title}</span>
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