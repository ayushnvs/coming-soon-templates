const launchDate = new Date('2025-12-31T23:59:59').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<p class="countdown-label">We are live!</p>';
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Notify Form
document.getElementById('notifyForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;

    // In a real implementation, you would send this to your backend
    console.log('Email submitted:', email);

    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.add('show');

    // Clear the input
    document.getElementById('emailInput').value = '';

    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
});

// Animated Particles
const particlesContainer = document.getElementById('particles');
const particleCount = 30;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;

    particlesContainer.appendChild(particle);
}