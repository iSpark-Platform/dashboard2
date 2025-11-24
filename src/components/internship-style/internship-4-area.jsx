import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { internship_data } from '../../data';
import CourseSidebar from '../common/sidebar/course-sidebar';
import SortingArea from '../internship-filter/sorting-area';
import InternshipItems from './internship-items';
import { add_price } from '../../redux/features/filter-slice';

// course_items
const course_items = internship_data.filter((arr, index, self) =>
    index === self.findIndex( ( i ) => ( i.img === arr.img && i.State === arr.State ) ) );

const InternshipFourArea = () => {
    const dispatch = useDispatch();
    const [courses, setCourses] = useState(course_items);
    const [showing,setShowing] = useState(0);
    const { categories, instructors, levels, languages, price } = useSelector( (state) => state.filter );

    useEffect(() => {
        const maxInternshipPrice = Math.max(...internship_data.map(i => Number(i.course_price)));
        dispatch(add_price([0, maxInternshipPrice]));
    }, [dispatch]);

    let items = courses?.filter( (item1) =>
        categories?.length !== 0
        ? categories?.some( (item2) => item1.category == item2 )
        : item1
    ).filter( (item1) =>
        instructors?.length !== 0
        ? instructors?.some( (item2) => item1.instructor == item2 )
        : item1
    ).filter( (item1) =>
        levels?.length !== 0
        ? levels?.some( (item2) => item1.level == item2 )
        : item1
    ).filter((item1) =>
        languages?.length !== 0
        ? languages?.some( (item2) => item1.language == item2 )
        : item1
    ).filter((item) => Number(item.course_price) >= price[0] && Number(item.course_price) <= price[1])

    return (
        <div className="edu-course-area course-area-1 section-gap-equal">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-3">
                        {/* course sidebar start */}
                        <CourseSidebar course_items={course_items} />
                        {/* course sidebar end */}
                    </div>

                    <div className="col-lg-9 col-pl--35">
                        {/* sorting area start */}
                        <SortingArea course_items={course_items} course_list={true} num={showing} setCourses={setCourses} courses={courses} items={items}  />
                        {/* sorting area end */}

                        <InternshipItems itemsPerPage={6} items={items} course_style="8" setShowing={setShowing} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InternshipFourArea;