document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#e3f0fd';
    } else {
        navbar.style.backgroundColor = '#dde9f9';
    }
});

document.getElementById('see-more-btn').addEventListener('click', function() {
    const moreContent = document.querySelector('.more-content');
    const timeline = document.querySelector('.timeline');

    console.log('Button clicked'); // Check if the button click is detected

    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        this.textContent = 'Hide Placements';
        console.log('Adding expanded class'); // Check if the condition is met to add the class
        timeline.classList.add('expanded');
    } else {
        moreContent.style.display = 'none';
        this.textContent = 'View Placements';
        console.log('Removing expanded class'); // Check if the condition is met to remove the class
        timeline.classList.remove('expanded');
    }

    console.log('Current classes:', timeline.className); // Output the current classes of the timeline element
});

