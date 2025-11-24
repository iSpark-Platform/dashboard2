import { course_data } from "@/data";

export function maxPrice() {
  const courses = [...course_data].filter((arr, index, self) =>
    index === self.findIndex((i) => (i.img === arr.img && i.State === arr.State))
  );

  const max_prices = courses.map(item => Number(item.course_price));
  return Math.max(...max_prices);
}