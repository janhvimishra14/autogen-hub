const form = document.getElementById("sceneForm");
const imagesContainer = document.getElementById("imagesContainer");

// Local images mapping: add your image paths here
const sceneryImages = {
  beach: [
    "images/beach1.jpg",
    "images/beach2.jpg",
    "images/beach3.jpg",
    "images/beach4.jpg",
    "images/beach5.jpg",
  ],
  mountain: [
    "images/mountain1.jpg",
    "images/mountain2.jpg",
    "images/mountain3.jpg",
    "images/mountain4.jpg",
    "images/mountain5.jpg",
  ],
  forest: [
    "images/forest1.jpg",
    "images/forest2.jpg",
    "images/forest3.jpg",
    "images/forest4.jpg",
    "images/forest5.jpg",
  ],
  sunset: [
    "images/sunset1.jpg",
    "images/sunset2.jpg",
    "images/sunset3.jpg",
    "images/sunset4.jpg",
    "images/sunset5.jpg",
  ],
  waterfall: [
    "images/waterfall1.jpg",
    "images/waterfall2.jpg",
    "images/waterfall3.jpg",
    "images/waterfall4.jpg",
    "images/waterfall5.jpg",
  ],
  snow: [
    "images/snow1.jpg",
    "images/snow2.jpg",
    "images/snow3.jpg",
    "images/snow4.jpg",
    "images/snow5.jpg",
  ],
  night: [
    "images/night1.jpg",
    "images/night2.jpg",
    "images/night3.jpg",
    "images/night4.jpg",
    "images/night5.jpg",
  ],
  desert: [
    "images/desert1.jpg",
    "images/desert2.jpg",
    "images/desert3.jpg",
    "images/desert4.jpg",
    "images/desert5.jpg",
  ],
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const description = document
    .getElementById("description")
    .value.trim()
    .toLowerCase();

  imagesContainer.innerHTML = "";

  if (sceneryImages[description]) {
    sceneryImages[description].forEach((imgSrc) => {
      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = description;
      imagesContainer.appendChild(img);
    });
  } else {
    imagesContainer.innerHTML =
      "<p>No images found for this description. Please try 'beach', 'mountain', 'forest', etc.</p>";
  }
});
