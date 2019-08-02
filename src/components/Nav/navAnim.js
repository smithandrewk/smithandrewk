const navAnim = (burger, nav, navLinks, headline) => {


    //Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        if(headline)
            headline.classList.toggle('headlineActive');
        
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