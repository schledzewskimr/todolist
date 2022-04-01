// Show an unordered list of to-do items
// Show an input to enter a new to-do
// Show a button to add a to-do. When the button is clicked:
const newListItem = document.getElementById("newListItem");
const list = document.querySelector("ul");
// The text from the input box is used to add a list item to the bottom of the list
function addLi(){
    if(newListItem.value!=0){
        let newTask = document.createElement('li');
        newTask.innerText=newListItem.value;
        list.appendChild(newTask).className += "listItem";
        // The text from the input box is cleared out.
        document.getElementById("newListItem").value = "";
    }
    else{
        alert("stop messing around");
    }
}
// When the user clicks on a list item, it is removed
const ul = document.querySelector('.theList');
for (let i=0; i<ul.length; i++) {
    let li = document.createElement('li');
    li.textContent = `Item ${i+1}`;
    ul.appendChild(li);
}
ul.addEventListener('click', function(e) {
    this.removeChild(e.target);
})
