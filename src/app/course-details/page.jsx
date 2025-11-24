import { Wrapper } from "@/layout";
import CourseDetailsOneMain from "@/components/course-details";
import { course_data } from "@/data";

export const metadata = {
  title: 'Course Details One'
}

const CourseDetailsPage = () => {
  const course = course_data[0];
    return (
        <Wrapper>
            <CourseDetailsOneMain course={course} />
        </Wrapper>
    )
}

export default CourseDetailsPage;