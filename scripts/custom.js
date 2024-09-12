window.addEventListener('scroll', function() {
    const navbar = document.getElementById('main-nav');
    const logoFix = document.getElementById('logo-fix');
    const searchFix = document.getElementById('searchFix');
    if (window.pageYOffset > 100) { 
        navbar.classList.add('fixed');
        logoFix.style.display="block";
        searchFix.style.display="block";
    } else {
        navbar.classList.remove('fixed');
        logoFix.style.display="none";
        searchFix.style.display="none";
    }
});
