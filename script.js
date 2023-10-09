const course = {
  corseName: "DATA COMMUNICATION AND NETWORKING",
  corseCode: "CSC465",
  everyYearOffer: 2,
  nameOFFaculty: ["a", "m", "Z"],
  isPrerequisite: true,
};
// console.log(typeof course);
// console.log(course);
// const courseStringify = JSON.stringify(course);
// console.log(typeof courseStringify);
// console.log(courseStringify);
// const parseString = JSON.parse(courseStringify);
// console.log(typeof parseString);
// console.log(parseString);

function calling() {
  document.getElementById("calling").style.opacity = 0;
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => display(data));
  function display(users) {
    const personContainer = document.getElementById("persons");
    for (const user of users) {
      console.log(user);
      const div = document.createElement("div");

      personContainer.style.opacity = 1;
      div.innerHTML = `
    <div class="container">
    <h1 class="title">${user.name}</h1>
    <div class="info">
      <h3>${user.email}</h3>
      <h3>${user.address.city}</h3>
      <p>${user.company.name}</p>
      <h3>${user.website}</h3>
    </div>
    `;

      personContainer.appendChild(div);
      // console.log(personContainer);
    }
  }
}
