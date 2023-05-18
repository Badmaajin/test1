let title = document.getElementById("hello");
let name = document.getElementById("title");
let sub = document.getElementById("sub");
fetch("./test.json")
    .then((response) => {
        return response.json();
    })
    .then((json) => console.log(json.movies.popular[0].Poster));
fetch("./test.json")
    .then((response) => {
        return response.json();
    })
    .then(
        (json) => (sub.innerHTML = json.movies.popular[0].harry.subscription)
    );
fetch("./test.json")
    .then((response) => {
        return response.json();
    })
    .then((json) => (name.innerHTML = json.movies.popular[0].harry.img));
fetch("./test.json")
    .then((response) => {
        return response.json();
    })
    .then((json) => (move = json.movies.popular[0].Poster));
let move = document.getElementById("move");
move.onclick = function () {
    myFunction();
};
function myFunction() {
    location.href = "tailbar.html";
}
