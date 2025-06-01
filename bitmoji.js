const form = document.getElementById("styleForm");
const outfitText = document.getElementById("outfit-text");
const outfitImage = document.getElementById("outfit-image");

const suggestions = {
  casual: {
    summer: "Graphic tee, denim shorts, sunglasses, sneakers",
    winter: "Hoodie, jeans, boots",
    rainy: "coat, joggers, waterproof boots",
    spring: "Pastel cardigan, jeans, sneakers",
  },
  sporty: {
    summer: "Tank top, gym shorts, trainers, sweatband",
    winter: "Track jacket, leggings, beanie, sports shoes",
    rainy: "Windbreaker, joggers, sneakers, waterproof cap",
    spring: "Activewear set, light hoodie, sneakers",
  },
  party: {
    summer: "Crop top, skirt, heels, clutch",
    winter: "Velvet dress, tights, boots, faux fur coat",
    rainy: "Satin dress, light jacket, waterproof shoes",
    spring: "Floral dress, sandals, shrug, bracelet",
  },
  professional: {
    summer: "Blazer, cotton shirt, formal trousers, loafers",
    winter: "Coat, wool trousers, turtleneck, ankle boots",
    rainy: "Trench coat, formal pants, umbrella",
    spring: "Blazer, blouse, pencil skirt, kitten heels",
  },
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const style = document.getElementById("style").value;
  const season = document.getElementById("season").value;

  if (suggestions[style] && suggestions[style][season]) {
    outfitText.textContent = `Suggested Outfit: ${suggestions[style][season]}`;
    outfitImage.src = `images/${style}_${season}.jpg`;
    outfitImage.style.width = "60%";
    outfitImage.style.marginLeft = "13vh";
    outfitImage.style.display = "block"; // show the image
  } else {
    outfitText.textContent = "Please select both style and season.";
    outfitImage.style.display = "none"; // hide the image
  }
});
