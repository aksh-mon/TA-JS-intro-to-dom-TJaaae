{/* <div class="container">
<div class="box">
  div.flex
  <img src="image1.jpg" alt="Image 1"> // people.image
  <h2>Title 1</h2> // people.name

  <p>Paragraph 1</p> // people.description
  <button><a href="">Button</a></button> // people.wikikink
</div>

</div> */}

let rootElement = document.querySelector(".container");

got.houses.forEach((house) => {

  house.people.forEach((person) => {
  
    let box = document.createElement("div");
    box.classList.add("box");
    
    let img = document.createElement("img");
    img.src = person.image;

    let h2 = document.createElement("h2");
    h2.innerText = person.name;

    let paragraph = document.createElement("p");
    paragraph.innerText = person.description;

    let button = document.createElement("button");
    button.innerText = "Learn More!";

    let anchor = document.createElement("a");
    anchor.href = person.wikiLink;

    anchor.append(button);
    box.append(img, h2, paragraph, anchor);
    rootElement.append(box);
  });
});

   