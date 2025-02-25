// Function to redirect the user
function redirectUser() {
    // Check if the user is registered
    const isRegistered = localStorage.getItem('isRegistered');
  
    if (isRegistered === 'true') {
      // Redirect to the Community Page
      window.location.href = 'NextStep Community Page/CommunityPage.html';
    } else {
      // Redirect to the Login Page
      window.location.href = 'NextStep Login Page/loginpage.html';
    }
  }
  
  // Example: Simulate user registration (for testing purposes)
  function simulateRegistration() {
    // Set the user as registered
    localStorage.setItem('isRegistered', 'true');
    alert('You are now registered!');
  }
  
  // Example: Simulate user logout (for testing purposes)
  function simulateLogout() {
    // Set the user as not registered
    localStorage.setItem('isRegistered', 'false');
    alert('You have been logged out!');
  }