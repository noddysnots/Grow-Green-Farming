/**
 * Grow Green Farming Website JavaScript
 * Handles interactivity for the farm equipment rental platform
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.classList.add('mobile-menu-toggle');
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('nav');
    const navUl = nav.querySelector('ul');
    const header = document.querySelector('header .container');
    
    header.insertBefore(mobileMenuToggle, nav);
    
    mobileMenuToggle.addEventListener('click', function() {
        navUl.classList.toggle('show');
        
        if (navUl.classList.contains('show')) {
            mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
            navUl.style.display = 'flex';
            navUl.style.flexDirection = 'column';
            navUl.style.position = 'absolute';
            navUl.style.top = '100%';
            navUl.style.left = '0';
            navUl.style.width = '100%';
            navUl.style.backgroundColor = '#fff';
            navUl.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            navUl.style.padding = '20px';
            
            const navItems = navUl.querySelectorAll('li');
            navItems.forEach(item => {
                item.style.margin = '10px 0';
            });
        } else {
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            navUl.style.display = '';
        }
    });
    
    // Form validation
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';
            
            // Mock API call with timeout to simulate network request
            setTimeout(function() {
                alert('Form submitted successfully! We will get back to you soon.');
                form.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1500);
        });
    });
    
    // Highlight current page in navigation
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = currentLocation.split('/').pop();
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Simple testimonial slider functionality
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    if (testimonialSlider) {
        // Sample testimonials data (in a real application, this could come from a database)
        const testimonials = [
            {
                text: '"Grow Green Farming has transformed my small farm\'s productivity. With access to affordable machinery, I\'ve doubled my yield while reducing costs."',
                author: 'Rajesh Kumar',
                position: 'Small Farm Owner, Haryana'
            },
            {
                text: '"The green farming techniques I learned through their workshops have made my farm more resilient to climate variations and increased my profits."',
                author: 'Anita Devi',
                position: 'Progressive Farmer, Punjab'
            },
            {
                text: '"As an equipment owner, partnering with Grow Green Farming has allowed me to maximize my machine utilization and generate steady income."',
                author: 'Suresh Patel',
                position: 'Equipment Owner, Gujarat'
            }
        ];
        
        let currentTestimonialIndex = 0;
        
        function showTestimonial(index) {
            const testimonial = testimonials[index];
            
            testimonialSlider.innerHTML = `
                <div class="testimonial">
                    <p>${testimonial.text}</p>
                    <div class="testimonial-author">
                        <h4>${testimonial.author}</h4>
                        <p>${testimonial.position}</p>
                    </div>
                </div>
            `;
        }
        
        function nextTestimonial() {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            showTestimonial(currentTestimonialIndex);
        }
        
        // Show first testimonial and set up auto-rotation
        showTestimonial(currentTestimonialIndex);
        setInterval(nextTestimonial, 5000);
    }
}); 
