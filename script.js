// 1. CUSTOM CURSOR
const cursorDot = document.getElementById('cursor-dot');
document.addEventListener('mousemove', (e) => {
    cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// 2. TOGGLE AI CHAT
function toggleAI() {
    const bubble = document.getElementById('ai-chat-bubble');
    bubble.classList.toggle('hidden');
}

// 3. SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 4. FAQ ACCORDION LOGIC
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.querySelector('.faq-content');
        content.classList.toggle('hidden');
        item.querySelector('span:last-child').textContent = content.classList.contains('hidden') ? '+' : '-';
    });
});

// 5. NAVBAR SHRINK
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 100) {
        nav.style.transform = "scale(0.95)";
        nav.style.padding = "0.5rem 1rem";
    } else {
        nav.style.transform = "scale(1)";
        nav.style.padding = "1rem 2rem";
    }
});