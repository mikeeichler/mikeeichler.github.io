// enable adding items by hitting enter
document.getElementById("new_item").addEventListener("keyup", function(event) {
  // this checks if it was the enter key that got pressed
  if (event.key === 'Enter') {
    // make sure it doesn't do anything else
    event.preventDefault();
    // click on the plus sing
    document.getElementById("add_new").click();
  }
});

// this will store the list of items, it's in the global scope
var list = [];
function add_item() {
    // get the text of the item
    let new_item = document.getElementById("new_item").value;
    // add item to the list
    list.push(new_item)
    // remove the text from the input
    document.getElementById("new_item").value = "";
    // destroy the existing list on the page
    document.getElementById("list").innerHTML = "";
    // console.log(new_item);
    // create an item for each element of the list, with the clickable trash can
    for (var i=0; i<list.length; i++) {
        document.getElementById("list").innerHTML += '<li id="' + i + '" ><img onclick="remove_item(' + i + ')" class="list_image"/>' + list[i] + '</li>';
    }
}

// on click of the trash can, this will remove the item from the list
function remove_item(item_num) {
    // item_num is the list index
    item_num = parseInt(String(item_num));
    // console.log('removing ' + item_num);
    // remove one item at the given index
    list.splice(item_num, 1);
    // console.log(list)
    // reset the list 
    document.getElementById("list").innerHTML = "";
    // console.log(new_item);
    // add all the remaining list elements to the DOM
    for (var i=0; i<list.length; i++) {
        document.getElementById("list").innerHTML += '<li id="' + i + '" ><img onclick="remove_item(' + i + ')" class="list_image"/>' + list[i] + '</li>';
    }
}