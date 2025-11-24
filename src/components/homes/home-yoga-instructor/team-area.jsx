import React from 'react';
import { yoga_instructor } from '../../../data/instructors.js';
import TeamFour from "../../team-member/team-four";

const TeamArea = () => {
    return (
        <div className="edu-team-area team-area-4">
            <div className="container">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title pre-textsecondary">Instructors</span>
                    <h2 className="title">Course Instructors</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>
                <div className="row g-5">
                    {yoga_instructor.slice(0,3).map((instructor) => (
                        <div key={instructor.id} className="col-lg-4 col-sm-6 col-12" data-sal-delay={instructor.delay} data-sal="slide-up" data-sal-duration="800">
                            <TeamFour instructor={instructor} />
                        </div>
                    ))}
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <span data-depth="1">
                        <img src="/assets/images/others/shape-14.png" alt="Shape" />
                    </span>
                </li>
                <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <span data-depth="-2">
                        <img src="/assets/images/others/shape-13.png" alt="Shape" />
                    </span>
                </li>
                <li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <img data-depth="2" src="/assets/images/others/shape-12.png" alt="Shape" />
                </li>
            </ul>
        </div>
    )
};

export default TeamArea;