const courses = ["HTML", "CSS", "Java", "JavaScript"];

const result = courses.filter(course =>
    course.startsWith("J")
);

console.log(result);