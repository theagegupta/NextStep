document.addEventListener("DOMContentLoaded", function () {
    // Get form elements
    const nameInput = document.getElementById("name");
    const educationInput = document.getElementById("education");
    const universityInput = document.getElementById("university");
    const interestsInput = document.getElementById("interests");
    const roleInput = document.getElementById("working-details");
    const saveButton = document.getElementById("submitBtn");

    // Get display elements
    const nameDisplay = document.getElementById("displayName");
    const educationDisplay = document.getElementById("displayEducation");
    const universityDisplay = document.getElementById("displayUniversity");
    const interestsDisplay = document.getElementById("displayInterests");
    
    // Add event listener to save button
    saveButton.addEventListener("click", function () {
        // Update profile display with entered values
        nameDisplay.textContent = nameInput.value || "Name";
        educationDisplay.textContent = educationInput.value || "Education";
        universityDisplay.textContent = universityInput.value || "University";
        interestsDisplay.textContent = interestsInput.value || "Interests";
    });
});
