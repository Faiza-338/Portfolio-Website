// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
  
  // --- Live Date & Time Logic ---
  function updateDateTime() {
    const now = new Date();
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    
    const timeElement = document.getElementById('live-datetime');
    if (timeElement) {
      timeElement.textContent = formattedDateTime;
    }
  }
  
  // Start the clock
  updateDateTime();
  setInterval(updateDateTime, 1000);

  // --- Form Validation Logic ---
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); 
      
      let isValid = true;

      const validateField = (id, condition, errorMsg) => {
        const input = document.getElementById(id);
        const error = document.getElementById(id + 'Error');
        
        if (!condition) {
          input.classList.remove('border-blue-500/30', 'focus:border-blue-400');
          input.classList.add('border-red-500', 'focus:border-red-500');
          error.textContent = errorMsg;
          error.classList.remove('hidden');
          isValid = false;
        } else {
          input.classList.add('border-blue-500/30', 'focus:border-blue-400');
          input.classList.remove('border-red-500', 'focus:border-red-500');
          error.classList.add('hidden');
        }
      };

      const nameVal = document.getElementById('name').value.trim();
      validateField('name', nameVal.length > 0, "Please enter your name.");

      const emailVal = document.getElementById('email').value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      validateField('email', emailRegex.test(emailVal), "Please enter a valid email address.");

      const phoneVal = document.getElementById('phone').value.trim();
      const phoneRegex = /^[\d\+\-\s]+$/; 
      validateField('phone', phoneRegex.test(phoneVal) && phoneVal.length >= 7, "Please enter a valid phone number.");

      const addressVal = document.getElementById('address').value.trim();
      validateField('address', addressVal.length > 0, "Please enter your address.");

      const messageVal = document.getElementById('message').value.trim();
      validateField('message', messageVal.length >= 10, "Message must be at least 10 characters long.");

      const successMessage = document.getElementById('successMessage');
      if (isValid) {
        successMessage.classList.remove('hidden');
        this.reset(); 
        
        setTimeout(() => {
          successMessage.classList.add('hidden');
        }, 5000);
      } else {
        successMessage.classList.add('hidden');
      }
    });
  }
});