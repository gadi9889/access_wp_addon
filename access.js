function increaseFontSize() {
  let currentSize = parseInt(document.body.style.fontSize) || 16;
  currentSize += 2;
  document.body.style.fontSize = currentSize + "px";
}

function decreaseFontSize() {
  let currentSize = parseInt(document.body.style.fontSize) || 16;
  currentSize -= 2;
  document.body.style.fontSize = currentSize + "px";
}

// // הגדרת מערך של הקישורים הפעילים בעמוד
// let links = document.querySelectorAll('a[href]:not([tabindex="-1"])');

// // הוספת מאזין למקשי המקלדת
// document.addEventListener("keydown", (event) => {
//   // אם המקש שנלחץ הוא חץ למעלה או למטה
//   if (event.code === "ArrowUp" || event.code === "ArrowDown") {
//     event.preventDefault();
//     // מציאת הקישור הבא או הקודם בהתאם למקש הנלחץ
//     let index = Array.from(links).indexOf(document.activeElement);
//     if (event.code === "ArrowUp") {
//       index = index === 0 ? links.length - 1 : index - 1;
//     } else {
//       index = index === links.length - 1 ? 0 : index + 1;
//     }
//     // קביעת הקישור המתאים לפעילות
//     links[index].focus();
//   }
// });

// // הוספת כיתוב CSS למחלקה body
// document.body.style.opacity = 0;

// // חיכוך לטעינת הדף המלאה
// window.addEventListener("load", () => {
//   document.body.style.opacity = 1;
// });

// // קביעת כיתוב CSS למחלקת body
// document.body.style.filter = "grayscale(100%)";

// // בכדי להחזיר את הצבעים למצבם הרגיל, ניתן להשתמש בקוד הבא:
// document.body.style.filter = "none";

// // Get the canvas and image elements
// canvas = document.getElementById("canvas");
// ctx = canvas.getContext("2d");
// img = document.getElementById("image");

// // Draw the image on the canvas
// ctx.drawImage(img, 0, 0);

// // Apply the Sepia filter
// imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
// data = imageData.data;

// for (let i = 0; i < data.length; i += 4) {
//   let r = data[i];
//   let g = data[i + 1];
// }

// // Get the canvas and image elements
// canvas = document.getElementById("canvas");
// ctx = canvas.getContext("2d");
// img = document.getElementById("image");

// // Draw the image on the canvas
// ctx.drawImage(img, 0, 0);

// // Apply the high contrast filter
// imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
// data = imageData.data;

// for (let i = 0; i < data.length; i += 4) {
//   let r = data[i];
//   let g = data[i + 1];
//   let b = data[i + 2];

//   data[i] = r < 128 ? 0 : 255;
//   data[i + 1] = g < 128 ? 0 : 255;
//   data[i + 2] = b < 128 ? 0 : 255;
// }

// ctx.putImageData(imageData, 0, 0);

// // Get the canvas and image elements
// canvas = document.getElementById("canvas");
// ctx = canvas.getContext("2d");
// img = document.getElementById("image");

// // Draw the image on the canvas
// ctx.drawImage(img, 0, 0);

// // Apply the black and yellow contrast filter
// imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
// data = imageData.data;

// for (let i = 0; i < data.length; i += 4) {
//   let r = data[i];
//   let g = data[i + 1];
//   let b = data[i + 2];

//   let grayscale = 0.299 * r + 0.587 * g + 0.114 * b;

//   if (grayscale < 128) {
//     data[i] = 0;
//     data[i + 1] = 0;
//     data[i + 2] = 0;
//   } else {
//     data[i] = 255;
//     data[i + 1] = 255;
//     data[i + 2] = 0;
//   }
// }

// ctx.putImageData(imageData, 0, 0);

// // Get the canvas and image elements
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// let img = document.getElementById("image");

// // Draw the image on the canvas
// ctx.drawImage(img, 0, 0);

// // Apply the color reversal filter
// let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
// let data = imageData.data;

// for (let i = 0; i < data.length; i += 4) {
//   data[i] = 255 - data[i]; // invert red
//   data[i + 1] = 255 - data[i + 1]; // invert green
//   data[i + 2] = 255 - data[i + 2]; // invert blue
// }

// ctx.putImageData(imageData, 0, 0);

// // Get all the h1, h2, and h3 elements on the page
// let headings = document.querySelectorAll("h1, h2, h3");

// // Loop through each heading and apply the highlight effect
// headings.forEach((heading) => {
//   // Create a span element with the text content of the heading
//   let span = document.createElement("span");
//   span.textContent = heading.textContent;

//   // Add a class to the span for styling
//   span.classList.add("highlight");

//   // Replace the heading with the span
//   heading.parentNode.replaceChild(span, heading);
// });

// // Get all the links on the page
// links = document.getElementsByTagName("a");

// // Loop through each link and apply the highlight effect
// for (let i = 0; i < links.length; i++) {
//   // Add a class to the link for styling
//   links[i].classList.add("highlight");
// }

// // Get the element that contains the description
// description = document.getElementById("description");

// // Add a click event listener to the element
// description.addEventListener("click", function () {
//   // Toggle the class that shows/hides the description
//   this.classList.toggle("show-description");
// });

// // Get the element that contains the description
// let description = document.getElementById("description");

// // Get the offset position of the description
// let descriptionOffset = description.offsetTop;

// // Add a scroll event listener to the window
// window.addEventListener("scroll", function () {
//   // Check if the user has scrolled past the description
//   if (window.pageYOffset > descriptionOffset) {
//     // Add a class to fix the description in place
//     description.classList.add("fixed-description");
//   } else {
//     // Remove the class to restore the normal position
//     description.classList.remove("fixed-description");
//   }
// });

// // Get the element that contains the text
// let text = document.getElementById("text");

// // Add a click event listener to the element
// text.addEventListener("click", function () {
//   // Toggle the class that sets the legible font
//   this.classList.toggle("legible-font");
// });

// // Get the element that contains the content
// content = document.getElementById("content");

// // Get the button that triggers the enlargement
// let enlargeButton = document.getElementById("enlarge-button");

// // Add a click event listener to the button
// enlargeButton.addEventListener("click", function () {
//   // Toggle the class that sets the screen enlargement
//   content.classList.toggle("screen-enlargement");
// });

// // Get the button that triggers the minimize
// let minimizeButton = document.getElementById("minimize-button");

// // Add a click event listener to the button
// minimizeButton.addEventListener("click", function () {
//   // Minimize the screen using the browser API
//   window.innerWidth = 0;
//   window.innerHeight = 0;
//   window.screenX = 0;
//   window.screenY = 0;
//   window.moveTo(0, 0);
// });

// // Get the element that will display the marker
// marker = document.getElementById("marker");

// // Add a mousemove event listener to the document
// document.addEventListener("mousemove", function (event) {
//   // Set the position of the marker to the position of the mouse
//   marker.style.left = event.clientX - 25 + "px";
//   marker.style.top = event.clientY - 25 + "px";
// });

// // Get the element that will display the marker
// marker = document.getElementById("marker");

// // Add a mousemove event listener to the document
// document.addEventListener("mousemove", function (event) {
//   // Set the position of the marker to the position of the mouse
//   marker.style.left = event.clientX - 25 + "px";
//   marker.style.top = event.clientY - 25 + "px";
// });

// // Set the style of the marker
// marker.style.position = "absolute";
// marker.style.width = "50px";
// marker.style.height = "50px";
// marker.style.backgroundColor = "black";
// marker.style.borderRadius = "50%";
// marker.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

// // Get the elements to hide and show
// let content = document.getElementById("content");
// let readingModeButton = document.getElementById("readingModeButton");

// // Hide the content by default
// content.style.display = "none";

// // Add a click event listener to the button
// readingModeButton.addEventListener("click", function () {
//   // Toggle the visibility of the content
//   if (content.style.display === "none") {
//     content.style.display = "block";
//     readingModeButton.textContent = "Exit Reading Mode";
//   } else {
//     content.style.display = "none";
//     readingModeButton.textContent = "Enter Reading Mode";
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const accessButtonMenu = document.createElement("button");
  accessButtonMenu.id = "accessibility-button";
  accessButtonMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon flat-color" data-name="Flat Color" width="30px" height="30px" viewBox="0 0 24 24"><path d="M10 22h-.21a7 7 0 0 1-3.3-13 1 1 0 0 1 1.37.37 1 1 0 0 1-.37 1.36A5 5 0 0 0 5 14.85 5 5 0 0 0 9.85 20a4.82 4.82 0 0 0 3.26-1.09 1 1 0 0 1 1.24 1.57A7 7 0 0 1 10 22Z" style="fill:#fff"/><path d="M20 20h-1.15l-.72-4.33a2 2 0 0 0-2-1.67H12v-2h3a1 1 0 0 0 0-2h-3V7.82a3 3 0 1 0-2 0V14a2 2 0 0 0 2 2h4.15l.72 4.33a2 2 0 0 0 2 1.67H20a1 1 0 0 0 0-2Z" style="fill:#fff"/></svg>
  `;
  document.querySelector("body").appendChild(accessButtonMenu);
  const accessModal = document.createElement("div");
  const accessModalBack = document.createElement("div");
  accessModal.id = "accessibility-modal";
  accessModalBack.id = "accessibility-modal-back";
  accessModalBack.appendChild(accessModal);
  // accessModal.appendChild()
  accessModal.addEventListener("click", function (event) {
    event.stopPropagation();
  });
  const accessButton = document.createElement("button");
  accessButton.classList.add("access-button");
  const arrayOfFuncs = [
    { title: "הגדלת גופן", func: increaseFontSize },
    { title: "הקטנת גופן", func: decreaseFontSize },
    {
      title: "מונוכרום",
      func: function () {
        if (document.body.style.filter == "grayscale(100%)") {
          document.body.style.filter = "none";
          return;
        }
        document.body.style.filter = "grayscale(100%)";
      },
    },
    {
      title: "ביטול הבהובים",
      func: function () {
        document.body.style.opacity = 0;
        // window.addEventListener("load", () => {
        document.body.style.opacity = 1;
        // });
      },
    },
    {
      title: "ספיה",
      func: function () {
        // Get the canvas and image elements
        const canvas = document.getElementById("canvas");
        const ctx = canvas?.getContext("2d");
        const img = document.getElementById("image");

        // Draw the image on the canvas
        ctx?.drawImage(img, 0, 0);

        // Apply the Sepia filter
        const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
        }
      },
    },
    {
      title: "היפוך צבעים",
      func: function () {
        // Get the canvas and image elements
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        const img = document.getElementById("image");

        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0);

        // Apply the black and yellow contrast filter
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          const grayscale = 0.299 * r + 0.587 * g + 0.114 * b;

          if (grayscale < 128) {
            data[i] = 0;
            data[i + 1] = 0;
            data[i + 2] = 0;
          } else {
            data[i] = 255;
            data[i + 1] = 255;
            data[i + 2] = 0;
          }
        }

        ctx.putImageData(imageData, 0, 0);
      },
    },
  ];
  for (let i = 0; i < arrayOfFuncs.length; i++) {
    const accessButtonClone = accessButton.cloneNode(true);
    accessButtonClone.innerHTML = arrayOfFuncs[i].title;
    accessButtonClone.addEventListener("click", arrayOfFuncs[i].func);
    accessModal.appendChild(accessButtonClone);
  }
  accessModalBack.classList.add("accessibility-modal-hide");
  accessModalBack.addEventListener("click", function () {
    accessModalBack.classList.remove("accessibility-modal-show");
    accessModalBack.classList.add("accessibility-modal-hide");
  });
  document.querySelector("body").appendChild(accessModalBack);
  accessButtonMenu.addEventListener("click", function () {
    accessModalBack.classList.remove("accessibility-modal-hide");
    accessModalBack.classList.add("accessibility-modal-show");
  });
});
