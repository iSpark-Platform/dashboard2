import React from 'react';
import { useState } from 'react';
import { internship_data } from '../../data';
import SortingArea from '../internship-filter/sorting-area';
import InternshipType from '../course/internship-type';
import BreadcrumbThree from "../../components/breadcrumb/breadcrumb-3";


const Internship = () => {
    const coursePerView = 6;
    const [next, setNext] = useState(coursePerView);
    const [internships, setInternships] = useState(internship_data);
    // handleLoadData
    const handleLoadData = () => {
        setNext(value => value + 3)
    }
    return (
        <>
        <BreadcrumbThree title="Internships" subtitle="Internship Programs" />
        <div className="edu-course-area course-area-1 gap-tb-text">
            <div className="container">
                <SortingArea course_items={internship_data} num={internships?.slice(0,next)?.length} setCourses={setInternships} courses={internships} />

                <div className="row g-5">
                    { internships?.slice(0, next)?.map((internship, key) => (
                        <div key={internship.id} 
                            className={ `col-12 col-xl-4 col-lg-6 col-md-6 
                                ${ ( key+1 ) % 3 === 0 && key !== 0 ? 'course-style-3-third-item' : '' } 
                                ${ ( key+1 ) % 2 === 0 && key !== 0 ? 'course-style-3-even' : 'course-style-3-odd' }` 
                            }
                        >
                            <InternshipType data={internship} />
                        </div>
                    ) ) }
                </div>

                {next < internships.length && 
                    <div onClick={handleLoadData} className="load-more-btn" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1200">
                        <a className="edu-btn" style={{ cursor: 'pointer' }}>Load More <i className="icon-56"></i></a>
                    </div>
                }
            </div>
        </div>
        </>
    )
}

export default Internship;