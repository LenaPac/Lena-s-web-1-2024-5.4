// 1. Declare a variable name 'imageContainer' and store the html element with the id 'imageContainer'
//  - Using querySelector, store the selector #imageContainer
console.log("dd");

let imageContainer=document.querySelector("#imageContainer");

console.log(imageContainer);

// 2. Add at least four image urls to the imageUrls array
let imageUrls = ["https://jonahwrites.blog/wp-content/uploads/2022/12/marin.jpg?w=1024",
"https://i.pinimg.com/originals/97/74/d3/9774d30531ece341b2bb6f4634579988.jpg",
"Photo3.jpg",
"Photo4.jpg"];


let image;
// 3. Selecting the imageUrls array, create a forEach loop.
imageUrls.forEach(function(i){
    image = document.createElement("img");
    image.src = i;
    imageContainer.appendChild(image);

});

// In side the body of the loop:
//  - Create an image element and store it in a variable named 'image'
//  - Update the src of the image element to equal the function parameter (the array element)
//  - Append the image to the image container.
