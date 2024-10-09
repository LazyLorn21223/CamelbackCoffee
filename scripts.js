//Product

//Game 
document.getElementById('guessForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const userGuess = parseInt(document.getElementById('userGuess').value.trim());
    const guessError = document.getElementById('guessError');
    const resultMessage = document.getElementById('resultMessage');

    // Clear previous error
    guessError.innerText = '';
    resultMessage.style.display = 'none';


    // Validate user input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 1000) {
      guessError.innerText = "Please enter a number between 1 and 1,000.";
      return;
    }

    // Generate a random number between 1 and 1,000
    const randomNumber = Math.floor(Math.random() * 1000) + 1;

    // Display the result
    if (userGuess === randomNumber) {
      resultMessage.innerHTML = `<strong>Congratulations!</strong> You guessed ${userGuess}, and the random number was ${randomNumber}. You win!. Please fill out the contact form below!`;
      resultMessage.className = 'message win';
    } else {
      resultMessage.innerHTML = `Not this time :( Try again!`;
      resultMessage.className = 'message try-again';
    }
    resultMessage.style.display = 'block';
  });

// Contact Form JS
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.innerText = '');

    // Input values
    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const comments = document.getElementById('comments').value.trim();
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked');

    // Regex for phone and email validation
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation logic
    if (!fullName) {
      document.getElementById('fullNameError').innerText = "Full name is required.";
      valid = false;
    }
    if (!contactMethod) {
      document.getElementById('contactMethodError').innerText = "Please select how you would like to be contacted.";
      valid = false;
    } else if (contactMethod.value === 'phone' && !phoneRegex.test(phone)) {
      document.getElementById('phoneError').innerText = "A valid 10-digit phone number is required.";
      valid = false;
    } else if (contactMethod.value === 'email' && !emailRegex.test(email)) {
      document.getElementById('emailError').innerText = "A valid email address is required.";
      valid = false;
    }

    // If the form is valid, create the customer object
    if (valid) {
      const customer = {
        fullName: fullName,
        phone: phone || "Not provided",
        email: email || "Not provided",
        comments: comments,
        contactMethod: contactMethod.value
      };

      // Reset form and display thank you message
      document.getElementById('contactForm').reset();
      const thankYouMessage = document.getElementById('thankYouMessage');
      thankYouMessage.innerHTML = `<strong>Thank you for your submission, ${customer.fullName}!</strong><br>
        We will contact you via ${customer.contactMethod === 'phone' ? 'phone' : 'email'} at ${customer.contactMethod === 'phone' ? customer.phone : customer.email}.<br>
        Your comments: "${customer.comments}".`;
      thankYouMessage.style.display = 'block';
    }
  });