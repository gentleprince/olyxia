// toggle button
const navbar_button_changer = document.querySelector(".navbar-button-changer");

// links checker
const inspector = document.querySelector(".inspector");

// toggle button icon
const toggle_changer = document.querySelector(".toggle-changer");

// bs phone hamburger
const toggler = {
  event: navbar_button_changer.addEventListener("click", () => {
    if (inspector.classList.contains("navbar-open") === true) {
      inspector.classList.replace("navbar-open", "navbar-close");
      toggle_changer.classList.replace("navbar-toggler-icon", "fa-solid");
      toggle_changer.classList.add("fa-xmark");
    } else {
      inspector.classList.replace("navbar-close", "navbar-open");
      toggle_changer.classList.replace("fa-solid", "navbar-toggler-icon");
      toggle_changer.classList.remove("fa-xmark");
    }
  }),
};
export default toggler;
