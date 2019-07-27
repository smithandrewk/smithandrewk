const navAnim = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+.5}s`
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });

}
 export default navAnim;