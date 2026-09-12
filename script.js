/**
 * Divyansh Bhatnagar - Personal Portfolio JavaScript
 * B.Tech 1st Year (Computer Science & Engineering)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ================= 1. THEME TOGGLE (DARK / LIGHT) =================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  body.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
    });
  }

  // ================= 2. MOBILE NAVIGATION DRAWER =================
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close mobile menu on clicking any link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  // ================= 3. TYPING EFFECT IN HERO SECTION =================
  const typingElement = document.getElementById('typing-text');
  const words = [
    "1st Year B.Tech CSE Student",
    "Problem Solver & C/C++ Enthusiast",
    "Aspiring Software Developer",
    "Tech Club & Hackathon Participant"
  ];
  
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeEffect() {
    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause at full word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 350; // Pause before typing next word
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();

  // ================= 4. ACTIVE NAVIGATION LINK ON SCROLL =================
  const sections = document.querySelectorAll('section[id]');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          targetNavLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);

  // ================= 5. ACHIEVEMENTS FILTERING =================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const achievementCards = document.querySelectorAll('.achievement-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active filter button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      achievementCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // ================= 6. CONTACT FORM VALIDATION & SUBMISSION =================
  const contactForm = document.getElementById('contact-form');
  const formAlert = document.getElementById('form-alert');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        nameInput.closest('.form-group').classList.remove('has-error');
      }

      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
        emailInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        emailInput.closest('.form-group').classList.remove('has-error');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        messageInput.closest('.form-group').classList.remove('has-error');
      }

      if (isValid) {
        // Show simulated loading on button
        const originalBtnHtml = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Submitting...</span>`;

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
          
          // Show success message
          if (formAlert) {
            formAlert.classList.remove('hidden');
          }

          // Reset form
          contactForm.reset();

          // Hide message after 6 seconds
          setTimeout(() => {
            if (formAlert) {
              formAlert.classList.add('hidden');
            }
          }, 6000);
        }, 1000);
      }
    });

    // Clear error on input
    ['name', 'email', 'message'].forEach(id => {
      const field = document.getElementById(id);
      if (field) {
        field.addEventListener('input', () => {
          field.closest('.form-group').classList.remove('has-error');
        });
      }
    });
  }

  // ================= 7. RESUME / CV DOWNLOAD TOAST =================
  const cvBtn = document.getElementById('cv-btn');
  const toastModal = document.getElementById('toast-modal');
  const closeToastBtn = document.getElementById('close-toast');

  if (cvBtn && toastModal) {
    cvBtn.addEventListener('click', () => {
      toastModal.classList.remove('hidden');

      // Automatically hide after 4.5 seconds
      setTimeout(() => {
        toastModal.classList.add('hidden');
      }, 4500);
    });
  }

  if (closeToastBtn && toastModal) {
    closeToastBtn.addEventListener('click', () => {
      toastModal.classList.add('hidden');
    });
  }

  // ================= 8. BACK TO TOP BUTTON =================
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
