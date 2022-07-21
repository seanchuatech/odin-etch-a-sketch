const child_divs = document.createElement("div");
child_divs.classList.add('child_elements');
const fragment = new DocumentFragment();

for (let i = 1; i < 257; i++) {
    fragment.appendChild(child_divs.cloneNode(true));
}

let parent_div = document.getElementById("container");
parent_div.appendChild(fragment);

const gridBtn = document.getElementById("gridBtn");
let new_grid = gridBtn.addEventListener("click", function(){
    let grids = prompt("PLEASE ENTER A NUMBER OF GRID");
    for (let i = 0; i < grids; i++) {
        fragment.appendChild(child_divs.cloneNode(true));
    }
    parent_div.innerHTML = "";
    document.getElementById("container").appendChild(fragment);
});
