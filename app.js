const ul = document.querySelector(".ulTag");
const preBtn = document.querySelector(".preBtn");
const inp = document.querySelector("input");

//function for toto
function addItem() {
  let list = document.createElement("li");
  list.classList = "newLi";
  let newBtn = document.createElement("button");
  newBtn.classList = "newBtn";

  newBtn.innerText = "delete";
  list.innerText = inp.value;
  ul.appendChild(list);
  list.appendChild(newBtn);
  inp.value = "";

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList = "";
  list.prepend(checkBox);

  checkBox.addEventListener("change", (event) => {
    let checkedUl = document.querySelector(".checkedUl");

    if (event.target.checked) {
      list.style.textDecoration = "line-through";
      list.style.opacity = "0.4";

      checkedUl.appendChild(list);
      let checkedItem = document.querySelector(".checkedItem");
      checkedItem.innerText = "Work finished";
    } else {
      list.style.textDecoration = "";
      list.style.opacity = "1";
      ul.append(list);

      //to remove element after no elemetn in checkedUl
      if (checkedUl.childElementCount == 0) {
        let checkedItem = document.querySelector(".checkedItem");
        checkedItem.innerText = "";
      }
    }
  });

  //to delete list
  newBtn.addEventListener("click", () => {
    list.remove();
  });
}

// event for btn press to add item in list
preBtn.addEventListener("click", (event) => {
  if (!(inp.value.trim() == "")) {
    addItem();
  }
});

// event for Enter and NumpasEnter press to add item in list
inp.addEventListener("keypress", (event) => {
  if (event.code == "Enter" || event.code == "NumpadEnter") {
    if (!(inp.value.trim() == "")) {
      addItem();
    }
  }
});
