
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#0056b3';
  });
  button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '';
  });
});

//scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Testimonial handle
document.getElementById('testimonial-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const userName = document.getElementById('user-name').value;
  const userFeedback = document.getElementById('user-feedback').value;
  
  if (userName && userFeedback) {
      const testimonialContainer = document.createElement('div');
      testimonialContainer.classList.add('testimonial');
      
      const userNameHeading = document.createElement('h3');  
      userNameHeading.textContent = userName; 
      
      const userFeedbackParagraph = document.createElement('p'); 
      userFeedbackParagraph.textContent = userFeedback;  
      testimonialContainer.appendChild(userNameHeading);  
      testimonialContainer.appendChild(userFeedbackParagraph);  
      
      document.getElementById('submitted-testimonials').appendChild(testimonialContainer);
      
      // Clear the form inputs
      document.getElementById('user-name').value = '';
      document.getElementById('user-feedback').value = '';
  }
});

// Dark mode toggle
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
