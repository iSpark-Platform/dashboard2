import { Wrapper } from "@/layout";
import { course_data } from "@/data";
import CourseDetailsTwoMain from "@/components/course-details-2";

export const metadata = {
  title: 'Course Details Two'
}

const CourseDetailsTwoPage = () => {
  const course = course_data[0];
    return (
        <Wrapper>
            <CourseDetailsTwoMain course={course} />
        </Wrapper>
    )
}

export default CourseDetailsTwoPage;