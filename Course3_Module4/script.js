/* Interactive Photo Gallery Script */

function upDate(previewPic) {
    // 1. Check that the event is triggering
    console.log("upDate event triggered!");

    // 2. Print out information about the previewPic variable (alt and src)
    console.log("Preview Pic Alt:", previewPic.alt);
    console.log("Preview Pic Source:", previewPic.src);

    // 3. Select the element with id of "image"
    const imageDiv = document.getElementById("image");

    // 4. Change the text of the element with the id of "image" to the alt text
    imageDiv.innerHTML = previewPic.alt;

    // 5. Change the background image of the element with the id of "image"
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    console.log("Updated #image background-image to:", imageDiv.style.backgroundImage);
}

function undo() {
    console.log("undo event triggered!");

    // Select the element with id of "image"
    const imageDiv = document.getElementById("image");

    // 1. Update the url for the background image back to the original value of url('')
    imageDiv.style.backgroundImage = "url('')";

    // 2. Update the text back to the original text
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Alias unDo() to undo() for compatibility with standard Coursera templates
function unDo() {
    undo();
}

// Add the new function for adding the tabfocus (tabindex) attribute on page load
function addTabFocus() {
    // 1. Add a console.log message to make sure that the onload event triggers
    console.log("onload event triggered: running addTabFocus()");

    // 2. Select all preview images
    const images = document.querySelectorAll(".preview");

    // 3. Write a for loop to loop through each image and add the tabindex attribute
    for (let i = 0; i < images.length; i++) {
        console.log("Adding tabindex to image " + (i + 1) + ":", images[i].alt);
        images[i].setAttribute("tabindex", "0");
    }
}


