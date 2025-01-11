// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // Adjust for header height
        behavior: 'smooth',
      });
    }
  }
  
  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1); // Extract target section ID
      scrollToSection(targetId);
    });
  });
  
  // Highlight Active Link Based on Scroll Position
  window.addEventListener('scroll', () => {
    let currentSection = '';
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 100) {
        currentSection = section.getAttribute('id');
      }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });
  
  // Toggle Mobile Menu (Hamburger)
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  
  // Scroll to Portfolio Section when "View My Work" Button is Clicked
  document.querySelector('.hero button').addEventListener('click', () => {
    scrollToSection('portfolio');
  });
  