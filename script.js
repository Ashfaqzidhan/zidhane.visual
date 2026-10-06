/* =========================================
   INTRO
========================================= */

window.addEventListener("load", () => {

    const loader =
        document.querySelector(".loader");


    /*
        Logo stays visible for a moment,
        then fades away.
    */

    setTimeout(() => {

        loader.classList.add("hide");

    }, 2300);

});



/* =========================================
   CURSOR GLOW
========================================= */

const glow =
    document.querySelector(".cursor-glow");


document.addEventListener(
    "mousemove",
    (event) => {

        if (!glow) return;


        glow.style.left =
            event.clientX + "px";


        glow.style.top =
            event.clientY + "px";

    }
);



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "active"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =========================================
   HERO 3D CARD
========================================= */

const card =
    document.querySelector(".hero-card");


document.addEventListener(
    "mousemove",
    (event) => {

        if (!card) return;


        /*
            Don't use 3D effect on
            small screens.
        */

        if (
            window.innerWidth <= 800
        ) {

            return;

        }


        const x =
            (
                window.innerWidth / 2 -
                event.clientX
            ) / 35;


        const y =
            (
                window.innerHeight / 2 -
                event.clientY
            ) / 35;


        card.style.transform =
            `rotate(3deg)
             rotateX(${y}deg)
             rotateY(${-x}deg)`;

    }
);



/* =========================================
   PROJECT 3D TILT
========================================= */

const projects =
    document.querySelectorAll(".project");


projects.forEach((project) => {


    project.addEventListener(
        "mousemove",
        (event) => {


            if (
                window.innerWidth <= 800
            ) {

                return;

            }


            const rect =
                project.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) / 25;


            const rotateY =
                (centerX - x) / 25;


            project.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );



    project.addEventListener(
        "mouseleave",
        () => {

            project.style.transform =
                "translateY(0)";

        }
    );

});



/* =========================================
   PORTFOLIO FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");


filterButtons.forEach((button) => {


    button.addEventListener(
        "click",
        () => {


            filterButtons.forEach(
                (btn) => {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            const filter =
                button.dataset.filter;


            projects.forEach(
                (project) => {


                    const category =
                        project.dataset.category;


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        project.classList.remove(
                            "hide"
                        );

                    } else {

                        project.classList.add(
                            "hide"
                        );

                    }

                }
            );

        }
    );

});



/* =========================================
   DESKTOP NAV ACTIVE SECTION
========================================= */

const sections =
    document.querySelectorAll(
        ".section"
    );


const desktopLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const mobileLinks =
    document.querySelectorAll(
        ".mobile-nav-item"
    );


const navObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {


                    if (
                        entry.isIntersecting
                    ) {


                        const id =
                            entry.target.id;


                        if (!id) {

                            return;

                        }


                        /*
                           Desktop
                        */

                        desktopLinks.forEach(
                            (link) => {

                                link.classList.remove(
                                    "active"
                                );


                                if (
                                    link.getAttribute(
                                        "href"
                                    ) === "#" + id
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );


                        /*
                           Mobile
                        */

                        mobileLinks.forEach(
                            (link) => {

                                link.classList.remove(
                                    "active"
                                );


                                if (
                                    link.dataset.section
                                    === id
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );

                    }

                }
            );

        },

        {
            threshold: 0.45
        }

    );


sections.forEach(
    (section) => {

        navObserver.observe(
            section
        );

    }
);



/* =========================================
   MOBILE NAV CLICK
========================================= */

mobileLinks.forEach(
    (link) => {


        link.addEventListener(
            "click",
            () => {


                mobileLinks.forEach(
                    (item) => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                link.classList.add(
                    "active"
                );

            }
        );

    }
);