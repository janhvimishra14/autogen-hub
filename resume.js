function generateResume() {
  // Get form values
  const name = document.getElementById("fullName").value;
  const tagline = document.getElementById("tagline").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const summary = document.getElementById("summary").value;
  const skills = document.getElementById("skills").value;
  const experience = document.getElementById("experience").value;
  const education = document.getElementById("education").value;

  // Fill in the resume preview
  document.getElementById("res-name").innerText = name;
  document.getElementById("res-tagline").innerText = tagline;
  document.getElementById("res-contact").innerText = `${email} | ${phone}`;
  document.getElementById("res-summary").innerText = summary;

  // Populate skills list
  const skillArray = skills.split(",").map((skill) => skill.trim());
  const skillsList = document.getElementById("res-skills");
  skillsList.innerHTML = "";
  skillArray.forEach((skill) => {
    if (skill.length > 0) {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
    }
  });

  // Fill experience and education
  document.getElementById("res-experience").innerText = experience;
  document.getElementById("res-education").innerText = education;

  // Show resume output
  document.getElementById("resume-output").style.display = "block";
  document.getElementById("downloadBtn").style.display = "block";
}

function downloadResumePDF() {
  const element = document.getElementById("resume-output");
  const opt = {
    margin: 0.5,
    filename: "My_Resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(element).save();
}
