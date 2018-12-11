const iconLink = document.querySelector('.ham-icon');
const navBar = document.getElementsByClassName('mob-nav-list')[0];
const icon = document.querySelector('.navigation__menu-icon');





iconLink.addEventListener('click', () => {

    iconLink.classList.toggle( "active" );

    if (navBar.style.display === 'inline-block') {
        navBar.style.display = 'none';
    } else {
        navBar.style.display = 'inline-block';
    }
});
