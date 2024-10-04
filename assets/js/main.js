/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 390) {
      current = section.getAttribute('id');
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.classList.contains(current)) {
      link.classList.add('active');
    }
  })
})

// function linkAction() {
//   /*Active link*/
//   navLinks.forEach((n) => n.classList.remove("active"));
//   this.classList.add("active");

//   /*Remove menu mobile*/
const navMenu = document.getElementById("nav-menu");
//   navMenu.classList.remove("show");
// }
navLinks.forEach((n) => n.addEventListener("click", () => { navMenu.classList.remove("show") }));

/*===== COPY Email =====*/
const copy = document.getElementById("copy");
copy.addEventListener("click", () => {
  navigator.clipboard.writeText("kasulaarunteja@gmail.com");
  copy.innerHTML = "copied";
  setTimeout(() => {
    copy.innerHTML = null;
  }, 1000);
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home-title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".home-social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about-img", {});
sr.reveal(".about-subtitle", { delay: 400 });
sr.reveal(".about-text", { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal(".skills-subtitle", {});
sr.reveal(".skills-text", {});
sr.reveal(".skills-data", { interval: 100 });
// sr.reveal(".skills-img", { delay: 600 });

/*SCROLL projects*/
sr.reveal(".project-img", { interval: 200 });

/*SCROLL CONTACT*/
  // sr.reveal(".contact-input", { interval: 200 });

  function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode")
  }


  var messageArr = ["MERN Developer", "Frontend Developer", "Backend Developer"];
  var textPosition = 0;
  var speed = 200;

  typewriter = () => {
    // for(let i = 0; i < messageArr.length; i++) {
    document.querySelector("#jobTitle").innerHTML = messageArr[0].substring(0, textPosition)  ;
    if(textPosition ++  != messageArr[0].length)
        setTimeout(typewriter, speed)
  }


  window.addEventListener("load" , typewriter);


// Function to add a new skill with an uploaded icon
function addSkill() {
  const newSkillName = document.getElementById('new-skill-name').value.trim();
  const iconInput = document.getElementById('icon-upload');
  const file = iconInput.files[0];

  if (newSkillName && file) {
      const skillsList = document.getElementById('skills-list');

      // Create the new skill item
      const skillItem = document.createElement('div');
      skillItem.classList.add('skills-data');

      // Create a URL for the uploaded file
      const iconURL = URL.createObjectURL(file);

      skillItem.innerHTML = `
          <div class="skills-names">
              <img class="skills-icon" src="${iconURL}" alt="icon" />
              <span class="skills-name">${newSkillName}</span>
          </div>
          <div>
              <button onclick="editSkill(this)">Edit</button>
              <button onclick="deleteSkill(this)">Delete</button>
          </div>
      `;

      // Add the new skill to the list
      skillsList.appendChild(skillItem);

      // Clear the input fields
      document.getElementById('new-skill-name').value = '';
      iconInput.value = ''; // Reset the file input
  } else {
      alert('Please enter a skill name and upload an icon.');
  }
}

// Function to delete a skill
function deleteSkill(skillElement) {
  const skillItem = skillElement.parentElement.parentElement;
  skillItem.remove();
}

// Function to edit a skill
function editSkill(skillElement) {
  const skillNameElement = skillElement.parentElement.previousElementSibling.querySelector('.skills-name');
  const newSkillName = prompt('Edit skill name:', skillNameElement.textContent);

  if (newSkillName) {
      skillNameElement.textContent = newSkillName;
  }
}

  

    // Select DOM elements
    const educationList = document.getElementById('education-list');
    const educationNameInput = document.getElementById('education-name');
    const educationPlatformInput = document.getElementById('education-platform');
    const educationDurationInput = document.getElementById('education-duration');
    const addEducationButton = document.getElementById('add-education');

    // Function to create an education entry
    function createEducationEntry(name, platform, duration) {
        const educationData = document.createElement('div');
        educationData.className = 'education-data';

        educationData.innerHTML = `
            <div class="education-names">
                <span class="education-name">${name}</span>
                <p class="education-platform">${platform}</p>
                <p class="education-duration">${duration}</p>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            </div>
        `;

        // Add event listener for the delete button
        educationData.querySelector('.delete-button').addEventListener('click', () => {
            educationList.removeChild(educationData); // Remove the entry
        });

        // Add event listener for the edit button
        educationData.querySelector('.edit-button').addEventListener('click', () => {
            // Fill inputs with current values for editing
            educationNameInput.value = name;
            educationPlatformInput.value = platform;
            educationDurationInput.value = duration;

            // Remove the entry on edit to avoid duplicates
            educationList.removeChild(educationData);
        });

        educationList.appendChild(educationData); // Append the new entry
    }

    // Add event listener to add education button
    addEducationButton.addEventListener('click', () => {
        const name = educationNameInput.value.trim();
        const platform = educationPlatformInput.value.trim();
        const duration = educationDurationInput.value.trim();

        // Validate inputs
        if (name && platform && duration) {
            createEducationEntry(name, platform, duration); // Create new entry
            educationNameInput.value = ''; // Clear inputs
            educationPlatformInput.value = '';
            educationDurationInput.value = '';
        } else {
            alert('Please fill in all fields'); // Alert if fields are empty
        }
    });
