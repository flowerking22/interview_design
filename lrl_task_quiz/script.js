const ol = document.querySelector("#ol");
addQuestion();
function addQuestion() {
  let li = document.createElement("li");
  let input = document.createElement("input");
  let br = document.createElement("br");
  let add = document.createElement("button");
  add.addEventListener("click", function () {
    // add.setAttribute("data-action", "delete");
    add.textContent = "-";
    // addQuestion();
    if(add.getAttribute('data-action')=='delete'){
        // alert('it has delete action');
        ol.removeChild(li);
            }
            else{
                addQuestion();
        
            }
            add.setAttribute("data-action", "delete");
        
  });
  add.textContent = "+";
  li.appendChild(input);
  li.appendChild(add);
  //   li.appendChild(br);
  //   ol.appendChild(li);

  let ans = document.createElement("ol");
  ans.setAttribute("type", "a");
  addChoice(ans);
/*
    let ansli = document.createElement("li");
    let ansinput = document.createElement("input");
    let ansadd = document.createElement("button");
    ansadd.textContent='+';
    ansadd.addEventListener("click", function () {
  addChoice(ans);
    });
    let ansbr = document.createElement("br");
    ansli.appendChild(ansinput);
    ansli.appendChild(ansadd);
    ans.appendChild(ansli);
  */
  li.appendChild(ans);
  ol.appendChild(li);
}
function addChoice(ans) {
  let ansli = document.createElement("li");
  let ansinput = document.createElement("input");
  let ansadd = document.createElement("button");
  ansadd.textContent = "+";
  ansadd.setAttribute("data-action", "add");
  //   let ansbr = document.createElement("br");
  ansadd.addEventListener("click", function () {
    ansadd.textContent = "-";
    if(ansadd.getAttribute('data-action')=='delete'){
// alert('it has delete action');
ans.removeChild(ansli);
    }
    else{
        addChoice(ans);

    }
    ansadd.setAttribute("data-action", "delete");

  });
  ansli.appendChild(ansinput);

  ansli.appendChild(ansadd);
  ans.appendChild(ansli);
}
function deleteChoice(element) {
  element.parentElement.removeChild();
}
