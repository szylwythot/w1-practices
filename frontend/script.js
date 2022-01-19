function loadEvent(){
    console.log("The page is loaded.");

    const list = document.querySelectorAll("section");

    for (const elem of list) {
        elem.insertAdjacentHTML("beforeend", `
        <p>text</p>
        `);
        elem.querySelector("p").style.fontFamily = `'Poppins', sans-serif`;
    }
}
window.addEventListener("load", loadEvent); //We make sure, that the html is ready when this script runs (?)
(blabla)