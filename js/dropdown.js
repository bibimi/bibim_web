const dropdown = document.querySelector(".dropdown_bundle")

let musicianInfo = [];


function show_hideBox () {
    const click = document.getElementsByClassName("block")
    if(click.style.display === "none") {
        click.style.display ="block";
    }else {
        click.style.display ="none";
    }
}

function show_hideCreateBtn () {
    const click = document.getElementsByClassName("dropdown_bundle_null")
    if(click.style.display === "none") {
        click.style.display ="block";
    }else {
        click.style.display ="none";
    }
}


function init() {
    

}

init();