document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.primary-nav');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
        });

        nav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => nav.classList.remove('open'));
        });
    }
});
