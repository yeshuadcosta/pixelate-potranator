let path='';

document.querySelector("#space").addEventListener("click", () => {
    path = "/assets/images/space.jpg";
    getInfo();
});
document.querySelector("#amazon").addEventListener("click", () => {
    path = "/assets/images/amazon.jpg";
    getInfo();
});
document.querySelector("#everest").addEventListener("click", () => {
    path = "/assets/images/everest.jpg";
    getInfo();
});
document.querySelector("#desert").addEventListener("click", () => {
    path = "/assets/images/desert.jpg";
    getInfo();
});
document.querySelector("#city").addEventListener("click", () => {
    path = "/assets/images/city.jpg";
    getInfo();
});
document.querySelector("#country").addEventListener("click", () => {
    path = "/assets/images/country.jpg";
    getInfo();
});
document.querySelector("#home").addEventListener("click", () => {
    path = "/assets/images/home.jpg";
    getInfo();
});
document.querySelector("#terrain").addEventListener("click", () => {
    path = "/assets/images/terrain.jpg";
    getInfo();
});

// This script will execute when the user proceeds to the next page
function getInfo(){
    // Getting the user"s name
    let uName = document.querySelector("#name").value;
    console.log("The user's name is " + uName);
    localStorage.setItem("name", uName);

    // Sending the colors of each individual box in the grid
    localStorage.setItem("ucolor", JSON.stringify(ucolor));

    localStorage.setItem("theme", path);
}