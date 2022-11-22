let course = document.getElementById("liste-commissions");
let newItem = document.createElement("li");
newItem.innerHTML = "sucre";

course.append(newItem);

let button = document.getElementById('validation');
let sup = document.getElementById("supprimer");
let listItem = document.getElementById("listitem");

button.addEventListener("click", function () {
    let newLi = document.createElement("li");
    newLi.innerHTML = listItem.value;
    course.append(newLi);
    listItem.value = '';
})


sup.addEventListener("click", function () {
    course.querySelector("li:last-child").remove();
});
