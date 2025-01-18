//your code here!
let orderedList = document.getElementById("infi-list");
for(let i = 1; i <= 10; i++){
    let list = document.createElement("li");
    list.innerText = "Item" + i;
    orderedList.appendChild(list);
}
