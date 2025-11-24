import { Wrapper } from "@/layout";
import CourseDetailsOneMain from "@/components/course-details";
import { course_data } from "@/data";

export const metadata = {
  title: 'Course Details One'
}

const CourseDetailsPage = ({params}) => {
  const course = course_data.find(item => Number(item.id) === Number(params.id))
    return (
        <Wrapper>
            <CourseDetailsOneMain course={course} />
        </Wrapper>
    )
}

export default CourseDetailsPage;