"use strict";

// Light/Dark Mode
const toggleBtn = document.getElementById('modeToggleBtn');
  const body = document.body;

    // Function to toggle between light and dark modes
    function toggleMode() {
      if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleBtn.innerText = 'Switch to Dark Mode';
      } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleBtn.innerText = 'Switch to Light Mode';
      }
    }


//Product

// Product buttons
const btnLightRoast = document.getElementById('btnLightRoast');
const btnMedRoast = document.getElementById('btnMedRoast');
const btnDarkRoast = document.getElementById('btnDarkRoast');
const btnCanyonBlend = document.getElementById('btnCanyonBlend');
const btnSaguaroBlend = document.getElementById('btnSaguaroBlend');

// Product display elements, images found on https://unsplash.com
const productName = document.getElementById('productName');
const productImage = document.getElementById('productImage');
const productDescription = document.getElementById('productDescription');

const products = [
  {
    name: "Sunset Light Roast",
    image: "images/product1.jpg",
    description: "Sunset Light Roast Coffee Beans offer a bright and refreshing brew with delicate flavors and a smooth finish. Sourced from premium coffee-growing regions, these beans are lightly roasted to preserve their natural citrus and floral notes, creating a lively and aromatic cup. Ideal for those who enjoy a milder coffee experience, the light roast highlights subtle sweetness and acidity, making it perfect for morning sips or afternoon pick-me-ups. With a golden hue and a crisp, clean taste, Sunset Light Roast Coffee Beans deliver a gentle yet invigorating coffee experience for any time of day."
  },
  {
    name: "Piestewa Medium Roast",
    image: "images/product2.jpg",
    description: "Piestewa Medium Roast Coffee Beans offer a balanced and rich flavor profile, perfect for those who enjoy a smooth and satisfying cup. Named after Piestewa Peak, these beans are carefully roasted to a medium level, bringing out deep chocolatey undertones with hints of nutty sweetness. The medium roast strikes the perfect balance between boldness and subtlety, delivering a full-bodied taste without overwhelming bitterness. Ideal for any time of day, Piestewa Medium Roast Coffee Beans provide a harmonious blend of flavor and aroma, capturing the warmth and rugged beauty of the desert landscape."
  },
  {
    name: "Superstition Dark Roast",
    image: "images/product3.jpg",
    description: "Superstition Dark Roast Coffee Beans deliver a bold and intense flavor experience, perfect for those who love a strong, robust cup. Inspired by the rugged Superstition Mountains, these beans are expertly roasted to a deep, dark finish, bringing out rich smoky notes with a touch of dark chocolate and a hint of caramelized sweetness. The full-bodied, velvety texture offers a powerful yet smooth coffee experience, with a lingering, satisfying finish. Superstition Dark Roast is perfect for those seeking a deep, complex flavor that evokes the mystery and strength of the desert wilderness. Ideal for strong coffee lovers."
  },
  {
    name: "Canyon Blend",
    image: "images/product4.jpg",
    description: "Canyon Blend Coffee Beans offer a smooth and versatile brew, combining beans from different regions to create a well-rounded flavor profile. With a medium roast, Canyon Blend strikes the perfect harmony between bright acidity and rich depth, featuring notes of caramel, toasted nuts, and a hint of fruit. This blend is crafted to evoke the grandeur and beauty of canyons, delivering a balanced cup with a warm, inviting aroma. Perfect for any time of day, Canyon Blend is ideal for those who appreciate a smooth, approachable coffee with layered complexity and a satisfying, lasting finish."
  },
  {
    name: "Saguaro Blend",
    image: "images/product5.jpg",
    description: "Saguaro Blend Coffee Beans offer a distinctive and flavorful brew inspired by the iconic desert landscape. This medium-dark roast blend combines beans from select regions, creating a robust yet smooth coffee with earthy undertones and subtle hints of dark chocolate and spice. The Saguaro Blend is rich and bold, with a full-bodied texture and a slightly smoky finish, capturing the resilience and beauty of the towering saguaro cacti. Perfect for coffee lovers who appreciate a hearty, flavorful cup that remains balanced and easy to enjoy, Saguaro Blend is ideal for any time of day."
  }
];

// Function to show product
function showProduct(index) {
  productName.textContent = products[index].name;
  productImage.src = products[index].image;
  productDescription.textContent = products[index].description;
}

window.onload = function() {
  showProduct(0);
};

//Game 
  function beanGame(e) {
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
  };

// Contact Form JS
function handleContactFormSubmit(e) {
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
  };

//Event Listeners
btnLightRoast.addEventListener('click', () => showProduct(0));
btnMedRoast.addEventListener('click', () => showProduct(1));
btnDarkRoast.addEventListener('click', () => showProduct(2));
btnCanyonBlend.addEventListener('click', () => showProduct(3));
btnSaguaroBlend.addEventListener('click', () => showProduct(4));
document.getElementById('modeToggleBtn').addEventListener('click', toggleMode);
document.getElementById('guessForm').addEventListener('submit', beanGame);
document.getElementById('contactForm').addEventListener('submit', handleContactFormSubmit);