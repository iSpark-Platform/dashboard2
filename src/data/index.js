import course_data_raw from "./course-data";
import instructors_data from "./instructors";
import blog_data from "./blog-data";
import event_data from "./event-data";
import shop_data from "./shop-data";
import internship_data from "./internship-data";

const MAX_VISIBLE_COURSES = 5;
const course_data = Array.isArray(course_data_raw)
  ? course_data_raw.slice(0, MAX_VISIBLE_COURSES)
  : course_data_raw;

export {
  course_data,
  internship_data,
  instructors_data,
  blog_data,
  event_data,
  shop_data,
}

