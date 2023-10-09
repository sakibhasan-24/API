const course = {
  corseName: "DATA COMMUNICATION AND NETWORKING",
  corseCode: "CSC465",
  everyYearOffer: 2,
  nameOFFaculty: ["a", "m", "Z"],
  isPrerequisite: true,
};
console.log(typeof course);
console.log(course);
const courseStringify = JSON.stringify(course);
console.log(typeof courseStringify);
console.log(courseStringify);
const parseString = JSON.parse(courseStringify);
console.log(typeof parseString);
console.log(parseString);
