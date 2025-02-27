document.addEventListener("DOMContentLoaded", function () {
    // Get buttons
    const googleBtn = document.getElementById("googleBtn");
    const facebookBtn = document.getElementById("facebookBtn");
    const continueBtn = document.getElementById("continueBtn");

    // Google Login
    window.handleGoogleLogin = function (response) {
        console.log("Google Login Successful!", response);
        alert("Logged in with Google!");
        redirectToNextPage();
    };

    // Facebook Login
    function checkFacebookLoginState() {
        FB.getLoginStatus(function (response) {
            if (response.status === "connected") {
                alert("Logged in with Facebook!");
                redirectToNextPage();
            } else {
                FB.login(function (response) {
                    if (response.status === "connected") {
                        alert("Logged in with Facebook!");
                        redirectToNextPage();
                    }
                }, { scope: "email,public_profile" });
            }
        });
    }

    // Initialize Facebook SDK
    window.fbAsyncInit = function () {
        FB.init({
            appId: "YOUR_FACEBOOK_APP_ID",
            cookie: true,
            xfbml: true,
            version: "v13.0"
        });
    };

    // Google Button Click Event
    googleBtn.addEventListener("click", function () {
        google.accounts.id.prompt();
    });

    // Facebook Button Click Event
    facebookBtn.addEventListener("click", function () {
        checkFacebookLoginState();
    });

    // Continue Button Redirect
    continueBtn.addEventListener("click", function () {
        let mobileNumber = document.getElementById("mobile").value;
        if (mobileNumber.trim() === "") {
            alert("Please enter your mobile number!");
        } else {
            redirectToNextPage();
        }
    });

    function redirectToNextPage() {
        window.location.href = "loginpage1.html";
    }
});
