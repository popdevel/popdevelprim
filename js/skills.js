function showInfo(
  userName = "Unknown",
  age = "Unknown",
  rate = "Unknown",
  show = "yes",
  ...skills
) {
  document.write(`<div>`);
  document.write(`<h2>Show The Account Information</h2>`);
  document.write(`<p>User Name : ${userName}</p>`);
  document.write(`<p>Age : ${age}</p>`);
  document.write(`<p>Rage Hour Is : $${rate}</p>`);
  show === "yes"
    ? document.write(`<p>skills is: ${skills.join(" | ")}</p>`)
    : document.write(`<p>Skills is Hidden</p>`);
  document.write(`</div>`);
}
showInfo("Peter", 36, 50, "yes", "HTML", "CSS", "JS");