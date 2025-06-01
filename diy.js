const form = document.getElementById("projectForm");
const result = document.getElementById("result");

const projects = {
  home: {
    beginner: [
      "Make a photo frame using popsicle sticks.",
      "DIY candle holders from mason jars.",
      "Create a simple wall art using canvas and paint.",
    ],
    intermediate: [
      "Build a floating wall shelf.",
      "Refurbish an old chair with new fabric.",
      "Make a decorative mirror frame.",
    ],
    advanced: [
      "Construct a custom coffee table with storage.",
      "Install your own backsplash tiles.",
      "Build a wooden pallet sofa.",
    ],
  },
  tech: {
    beginner: [
      "Create a simple LED blink circuit with Arduino.",
      "Assemble a USB fan.",
      "Build a paper circuit greeting card.",
    ],
    intermediate: [
      "Build a Bluetooth speaker.",
      "Create a Raspberry Pi weather station.",
      "Set up a home security camera system.",
    ],
    advanced: [
      "Design and 3D print a drone frame.",
      "Build a smart mirror with Raspberry Pi.",
      "Develop your own mobile app.",
    ],
  },
  garden: {
    beginner: [
      "Decorate pots with hand painting.",
      "Plant a mini succulent garden.",
      "Make DIY seed bombs.",
    ],
    intermediate: [
      "Build a vertical herb garden.",
      "Create a compost bin.",
      "Design a garden stepping stone path.",
    ],
    advanced: [
      "Set up an automated irrigation system.",
      "Build a greenhouse from recycled materials.",
      "Design a pond with a water fountain.",
    ],
  },
  craft: {
    beginner: [
      "Make a friendship bracelet.",
      "Create paper flowers.",
      "DIY slime for fun!",
    ],
    intermediate: [
      "Create a macrame wall hanging.",
      "Design and sew a simple tote bag.",
      "Decorate a photo album.",
    ],
    advanced: [
      "Craft a handmade leather wallet.",
      "Build a shadow box with LED lights.",
      "Make a resin art tray.",
    ],
  },
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const category = document.getElementById("category").value;
  const skill = document.getElementById("skill").value;

  if (projects[category] && projects[category][skill]) {
    const ideas = projects[category][skill];
    let ideaList = "<ul>";
    ideas.forEach((idea) => {
      ideaList += `<li>${idea}</li>`;
    });
    ideaList += "</ul>";
    result.innerHTML = `<h3>🎨 Your Project Ideas:</h3>${ideaList}`;
    result.style.display = "block";
  } else {
    result.innerHTML = "<p>Please select both category and skill level.</p>";
    result.style.display = "block";
  }
});
