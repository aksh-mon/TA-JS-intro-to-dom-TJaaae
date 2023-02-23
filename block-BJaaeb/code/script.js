/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
function createInputElm(label, type = "text") {
  const labelElm = document.createElement("label");

  const inputElm = document.createElement("input");
  inputElm.type = type;

  labelElm.textContent = label;

  labelElm.appendChild(inputElm);

  return labelElm;
}

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

function createInputElm(label, type = "text") {
  const inputElm = `<label>${label}<input type="${type}"></label>`;
  return inputElm;
}

// Your code goes here

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here

function createList(items) {
  let listItems = "";
  items.forEach(item => {
    listItems += `<li>${item}</li>`;
  });
  const ul = `<ul>${listItems}</ul>`;
  return ul;
}

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here

function createTodoList(todoItems) {
  const ul = document.createElement("ul");

  todoItems.forEach(item => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = item.name;
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = item.isDone;
    const span = document.createElement("span");
    span.textContent = "X";
    li.appendChild(p);
    li.appendChild(checkbox);
    li.appendChild(span);
    ul.appendChild(li);
  });

  return ul;
}

// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
