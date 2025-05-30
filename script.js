
    // Animate sections on scroll
    function revealOnScroll() {
      const reveals = document.querySelectorAll('.media-item, #about, #contact');
      const windowHeight = window.innerHeight;
      reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 60) {
          el.classList.add('visible');
        }
      });
    }
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('DOMContentLoaded', revealOnScroll);

    // Smooth scroll for nav links
    document.querySelectorAll('.navbar-center ul li a').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
      });
    });


const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});

// Optional: Auto-slide
// setInterval(() => {
//   current = (current + 1) % testimonials.length;
//   showTestimonial(current);
// }, 5000);
