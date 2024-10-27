document.addEventListener('DOMContentLoaded', function () {
    // For toggling the navbar in mobile mode
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
    const navbarMenu = document.getElementById('navbar-sticky');

    toggleButton.addEventListener('click', function () {
        navbarMenu.classList.toggle('hidden');
    });

    gsap.registerPlugin(ScrollTrigger);

    // Body Section animations
    const animations = [
        {
            target: "#navbar",
            props: { rotation: 10, opacity: 0, y: -100, duration: 1.3, ease: "power2.out", delay: 1.8 }
        },
        {
            target: "#welcomeText",
            scrollTrigger: { trigger: "#welcomeText", start: "top 80%" },
            props: { rotation: 7, opacity: 0, x: -100, duration: 1.5, ease: "power2.out", delay: 0.5 }
        },
        {
            target: ".heroText",
            props: { rotation: 7, opacity: 0, y: 50, duration: 1, ease: "power2.out", delay: 1.5 }
        },
        {
            target: ".heroText2",
            props: { rotation: 7, opacity: 0, y: -10, duration: 1, ease: "power2.out", delay: 1.7 }
        },
        {
            target: "#btnBox",
            props: { rotation: 10, opacity: 0, duration: 1.3, ease: "power2.out", delay: 2 }
        },
    ];

    animations.forEach(animation => {
        if (animation.scrollTrigger) {
            gsap.from(animation.target, { ...animation.props, scrollTrigger: animation.scrollTrigger });
        } else {
            gsap.from(animation.target, animation.props);
        }
    });

    // Backbones Section animation
    const backboneText = {
        target: ".sectionText",
        scrollTrigger: { trigger: ".sectionText", start: "top 80%" },
        props: { rotation: 7, opacity: 0, y: 100, duration: 1, delay: 0.5, ease: "power2.out" }
    };
    gsap.from(backboneText.target, { ...backboneText.props, scrollTrigger: backboneText.scrollTrigger });

    // Define animations for mobile and desktop
    const createBackAnimations = (elements, props) => {
        elements.forEach(el => {
            gsap.from(el, { ...props, scrollTrigger: { trigger: el, start: "top 80%" } });
        });
    };

    let mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
        createBackAnimations([".back1", ".back2", ".back3"], { opacity: 0, x: 100, duration: 2, ease: "power2.out" });
    });

    mm.add("(min-width: 768px)", () => {
        createBackAnimations([".back1", ".back2", ".back3"], { opacity: 0, y: 100, duration: 2, delay: 0.5, ease: "power2.out" });
    });

    // NEC Winner Section animations
    const necAnimations = [
        {
            target: "#necText",
            scrollTrigger: { trigger: "#necText", start: "top 80%" },
            props: { rotation: 7, opacity: 0, y: 100, duration: 1, delay: 0.5, ease: "power2.out" }
        },
        {
            target: "#necText1",
            scrollTrigger: { trigger: "#necText1", start: "top 80%" },
            props: { opacity: 0, x: 50, duration: 1, delay: 0.5, ease: "power2.out" }
        },
        {
            target: "#necText2",
            scrollTrigger: { trigger: "#necText2", start: "top 80%" },
            props: { opacity: 0, x: 50, duration: 1, delay: 0.6, ease: "power2.out" }
        },
        {
            target: "#necImage",
            scrollTrigger: { trigger: "#necImage", start: "top 80%" },
            props: { opacity: 0, y: 100, duration: 1, ease: "power2.out" }
        },
    ];

    necAnimations.forEach(animation => {
        gsap.from(animation.target, { ...animation.props, scrollTrigger: animation.scrollTrigger });
    });

    // Contact Us Section animation
    gsap.from("#contactText", {
        scrollTrigger: { trigger: "#contactText", start: "top 90%" },
        rotation: 7,
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out"
    });
});
