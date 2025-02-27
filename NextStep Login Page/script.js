document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.querySelector(".close-btn");
    const continueBtn = document.getElementById("continueBtn");
    const mobileInput = document.getElementById("mobile");
    const googleBtn = document.querySelector(".google-btn");
    const facebookBtn = document.querySelector(".facebook-btn");

    // Load saved mobile number
    if (localStorage.getItem("savedMobile")) {
        mobileInput.value = localStorage.getItem("savedMobile");
    }

    // Close modal
    closeBtn.addEventListener("click", function () {
        document.querySelector(".login-container").style.display = "none";
    });

    // Save Mobile Number and Redirect to loginpage1.html
    continueBtn.addEventListener("click", function () {
        const mobileNumber = mobileInput.value.trim();

        if (mobileNumber.length >= 10 && /^[0-9]+$/.test(mobileNumber)) {
            localStorage.setItem("savedMobile", mobileNumber);
            alert("Mobile number saved successfully!");
            window.location.href = "loginpage1.html"; // Redirect to loginpage1.html
        } else {
            alert("Please enter a valid mobile number!");
        }
    });

    // Redirect to Google Sign-In Page
    googleBtn.addEventListener("click", function () {
        window.location.href = "https://accounts.google.com/signin/v2/identifier?service=mail";
    });

    // Redirect to Facebook Sign-In Page
    facebookBtn.addEventListener("click", function () {
        window.location.href = "https://www.facebook.com/login/";
    });
});
