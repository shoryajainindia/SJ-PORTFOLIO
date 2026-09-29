/* =========================================================
   SHORYA JAIN — MASTER PORTFOLIO
   JAVASCRIPT PART 1
   CORE NAVIGATION + MENU + SCROLL
========================================================= */


/* =========================================================
   01 — SELECT ELEMENTS
========================================================= */

const body = document.body;

const menuTrigger =
    document.getElementById("menu-trigger");

const mobileMenu =
    document.getElementById("mobile-menu");

const mobileMenuClose =
    document.getElementById("mobile-menu-close");

const sections =
    document.querySelectorAll(".page-section");

const navigationLinks =
    document.querySelectorAll(
        "[data-target]"
    );


/* =========================================================
   02 — SMOOTH SECTION NAVIGATION
========================================================= */

navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("data-target");

        const target =
            document.getElementById(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });


        /* Close mobile menu */

        closeMobileMenu();

    });

});


/* =========================================================
   03 — MOBILE MENU OPEN
========================================================= */

function openMobileMenu() {

    if (!mobileMenu) {
        return;
    }

    mobileMenu.classList.add("is-open");

    mobileMenu.setAttribute(
        "aria-hidden",
        "false"
    );

    body.classList.add("menu-open");

    if (menuTrigger) {

        menuTrigger.setAttribute(
            "aria-expanded",
            "true"
        );

    }

}


/* =========================================================
   04 — MOBILE MENU CLOSE
========================================================= */

function closeMobileMenu() {

    if (!mobileMenu) {
        return;
    }

    mobileMenu.classList.remove("is-open");

    mobileMenu.setAttribute(
        "aria-hidden",
        "true"
    );

    body.classList.remove("menu-open");

    if (menuTrigger) {

        menuTrigger.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}


/* =========================================================
   05 — MENU BUTTON
========================================================= */

if (menuTrigger) {

    menuTrigger.addEventListener(
        "click",
        openMobileMenu
    );

}


if (mobileMenuClose) {

    mobileMenuClose.addEventListener(
        "click",
        closeMobileMenu
    );

}


/* =========================================================
   06 — ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   07 — ACTIVE NAVIGATION
========================================================= */

const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const sectionId =
                        entry.target.id;

                    document
                        .querySelectorAll(
                            `.nav-link[data-target="${sectionId}"]`
                        )
                        .forEach(
                            (link) => {

                                document
                                    .querySelectorAll(
                                        ".nav-link"
                                    )
                                    .forEach(
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

        },
        {
            threshold: 0.45
        }
    );


sections.forEach(
    (section) => {

        sectionObserver.observe(
            section
        );

    }
);


/* =========================================================
   08 — HEADER SCROLL STATE
========================================================= */

const header =
    document.getElementById(
        "global-header"
    );


window.addEventListener(
    "scroll",
    () => {

        if (!header) {
            return;
        }

        if (window.scrollY > 50) {

            header.classList.add(
                "is-scrolled"
            );

        } else {

            header.classList.remove(
                "is-scrolled"
            );

        }

    },
    {
        passive: true
    }
);


/* =========================================================
   09 — BACK TO TOP
========================================================= */

const backToTopButtons =
    document.querySelectorAll(
        '[data-target="hero"]'
    );


backToTopButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }
);


/* =========================================================
   10 — HERO MOUSE PARALLAX
========================================================= */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );

const floatingElements =
    document.querySelectorAll(
        ".floating-element"
    );


if (
    heroVisual &&
    window.matchMedia(
        "(hover: hover)"
    ).matches
) {

    heroVisual.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroVisual.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 35;

            const rotateY =
                (centerX - x) / 35;


            const portrait =
                document.querySelector(
                    ".hero-portrait-wrapper"
                );


            if (portrait) {

                portrait.style.transform =
                    `rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     rotateZ(1deg)`;

            }


            floatingElements.forEach(
                (element, index) => {

                    const strength =
                        (index + 1) * 0.35;

                    const moveX =
                        (centerX - x) *
                        strength /
                        10;

                    const moveY =
                        (centerY - y) *
                        strength /
                        10;

                    element.style.transform =
                        `translate(
                            ${moveX}px,
                            ${moveY}px
                        )`;

                }
            );

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            const portrait =
                document.querySelector(
                    ".hero-portrait-wrapper"
                );

            if (portrait) {

                portrait.style.transform =
                    "rotateZ(1deg)";

            }


            floatingElements.forEach(
                (element) => {

                    element.style.transform =
                        "translate(0, 0)";

                }
            );

        }
    );

}


/* =========================================================
   11 — PAGE LOADER
========================================================= */

const siteLoader =
    document.getElementById(
        "site-loader"
    );


window.addEventListener(
    "load",
    () => {

        if (!siteLoader) {
            return;
        }

        setTimeout(
            () => {

                siteLoader.classList.add(
                    "loaded"
                );

            },
            500
        );

    }
);


/* =========================================================
   12 — CONSOLE MESSAGE
========================================================= */

console.log(
    "%cSHORYA JAIN PORTFOLIO",
    "font-size:20px;font-weight:bold;"
);

console.log(
    "Website JavaScript loaded successfully."
);
/* =========================================================
   SHORYA JAIN — MASTER PORTFOLIO
   JAVASCRIPT PART 2
   PROJECTS + ACHIEVEMENTS + INTERESTS
========================================================= */


/* =========================================================
   01 — PROJECT DATA
========================================================= */

const projectData = {

    "project-01": {
        title: "Future Web Project",
        category: "WEB DEVELOPMENT",
        status: "BUILDING",
        technologies: "HTML / CSS / JAVASCRIPT",
        description:
            "An interactive web-based project focused on creating a useful and engaging digital experience."
    },

    "project-02": {
        title: "AI Automation Project",
        category: "AI / AUTOMATION",
        status: "PLANNING",
        technologies: "AI / AUTOMATION / API",
        description:
            "An automation concept exploring how AI can simplify repetitive digital workflows."
    },

    "project-03": {
        title: "Security Project",
        category: "CYBERSECURITY",
        status: "UPCOMING",
        technologies: "SECURITY / LINUX / NETWORKING",
        description:
            "A future cybersecurity-focused project connected to my technical learning journey."
    },

    "project-04": {
        title: "Content Project",
        category: "CONTENT CREATION",
        status: "UPCOMING",
        technologies: "VIDEO / DESIGN / STORYTELLING",
        description:
            "A creative project focused on digital storytelling and content production."
    },

    "project-05": {
        title: "Hackathon Build",
        category: "HACKATHON",
        status: "PLANNING",
        technologies: "PROTOTYPE / TEAMWORK / INNOVATION",
        description:
            "A competition-focused project designed to turn an idea into a functional prototype."
    },

    "project-06": {
        title: "Business Concept",
        category: "BUSINESS PLANNING",
        status: "UPCOMING",
        technologies: "STRATEGY / RESEARCH / PRODUCT",
        description:
            "A future project exploring product ideas, business strategy and digital execution."
    }

};


/* =========================================================
   02 — PROJECT MODAL ELEMENTS
========================================================= */

const projectModal =
    document.getElementById("project-modal");

const projectModalClose =
    document.getElementById("project-modal-close");

const projectModalTitle =
    document.getElementById("project-modal-title");

const projectModalDescription =
    document.getElementById("project-modal-description");

const projectModalCategory =
    document.getElementById("project-modal-category");

const projectModalStatus =
    document.getElementById("project-modal-status");

const projectModalCategoryDetail =
    document.getElementById("project-modal-category-detail");

const projectModalTechnologies =
    document.getElementById("project-modal-technologies");


/* =========================================================
   03 — OPEN PROJECT MODAL
========================================================= */

function openProjectModal(projectId) {

    const project =
        projectData[projectId];

    if (!project || !projectModal) {
        return;
    }

    projectModalTitle.textContent =
        project.title;

    projectModalDescription.textContent =
        project.description;

    projectModalCategory.textContent =
        project.category;

    projectModalStatus.textContent =
        project.status;

    projectModalCategoryDetail.textContent =
        project.category;

    projectModalTechnologies.textContent =
        project.technologies;

    projectModal.classList.add(
        "is-open"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    body.classList.add(
        "menu-open"
    );

}


/* =========================================================
   04 — CLOSE PROJECT MODAL
========================================================= */

function closeProjectModal() {

    if (!projectModal) {
        return;
    }

    projectModal.classList.remove(
        "is-open"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    body.classList.remove(
        "menu-open"
    );

}


/* =========================================================
   05 — PROJECT BUTTONS
========================================================= */

document
    .querySelectorAll("[data-project-open]")
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const projectId =
                    button.dataset.projectOpen;

                openProjectModal(
                    projectId
                );

            }
        );

    });


if (projectModalClose) {

    projectModalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


/* =========================================================
   06 — PROJECT BACKDROP CLOSE
========================================================= */

if (projectModal) {

    const backdrop =
        projectModal.querySelector(
            ".project-modal-backdrop"
        );

    if (backdrop) {

        backdrop.addEventListener(
            "click",
            closeProjectModal
        );

    }

}


/* =========================================================
   07 — PROJECT FILTERING
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card[data-project-status]"
    );

const projectFilterButtons =
    document.querySelectorAll(
        "[data-project-filter]"
    );


projectFilterButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const filter =
                    button.dataset.projectFilter;


                projectFilterButtons.forEach(
                    (item) => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                projectCards.forEach(
                    (card) => {

                        const status =
                            card.dataset.projectStatus;

                        const shouldShow =
                            filter === "all" ||
                            status === filter;

                        card.classList.toggle(
                            "is-hidden",
                            !shouldShow
                        );

                    }
                );

            }
        );

    }
);


/* =========================================================
   08 — ACHIEVEMENT DATA
========================================================= */

const achievementData = {

    "achievement-01": {
        title: "Achievement Title",
        category: "AWARD",
        year: "2026",
        status: "COMPLETED",
        description:
            "Add the details of this achievement here."
    },

    "achievement-02": {
        title: "Competition Achievement",
        category: "COMPETITION",
        year: "2026",
        status: "COMPLETED",
        description:
            "Add the competition name, result and details here."
    },

    "achievement-03": {
        title: "Competition / Hackathon",
        category: "COMPETITION",
        year: "2026",
        status: "COMPLETED",
        description:
            "Add your participation, project or result here."
    },

    "achievement-04": {
        title: "Earlier Achievement",
        category: "AWARD",
        year: "2025",
        status: "COMPLETED",
        description:
            "Add a previous award or recognition here."
    },

    "achievement-05": {
        title: "Certification",
        category: "CERTIFICATION",
        year: "2026",
        status: "COMPLETED",
        description:
            "Add your certification details here."
    },

    "achievement-06": {
        title: "Hackathon Milestone",
        category: "HACKATHON",
        year: "2026",
        status: "COMPLETED",
        description:
            "Add your hackathon experience and result here."
    }

};


/* =========================================================
   09 — ACHIEVEMENT MODAL ELEMENTS
========================================================= */

const achievementModal =
    document.getElementById(
        "achievement-modal"
    );

const achievementModalClose =
    document.getElementById(
        "achievement-modal-close"
    );

const achievementModalTitle =
    document.getElementById(
        "achievement-modal-title"
    );

const achievementModalDescription =
    document.getElementById(
        "achievement-modal-description"
    );

const achievementModalCategory =
    document.getElementById(
        "achievement-modal-category"
    );

const achievementModalYear =
    document.getElementById(
        "achievement-modal-year"
    );

const achievementModalType =
    document.getElementById(
        "achievement-modal-type"
    );

const achievementModalStatus =
    document.getElementById(
        "achievement-modal-status"
    );


/* =========================================================
   10 — OPEN ACHIEVEMENT MODAL
========================================================= */

function openAchievementModal(
    achievementId
) {

    const achievement =
        achievementData[achievementId];

    if (
        !achievement ||
        !achievementModal
    ) {
        return;
    }

    achievementModalTitle.textContent =
        achievement.title;

    achievementModalDescription.textContent =
        achievement.description;

    achievementModalCategory.textContent =
        achievement.category;

    achievementModalYear.textContent =
        achievement.year;

    achievementModalType.textContent =
        achievement.category;

    achievementModalStatus.textContent =
        achievement.status;

    achievementModal.classList.add(
        "is-open"
    );

    achievementModal.setAttribute(
        "aria-hidden",
        "false"
    );

    body.classList.add(
        "menu-open"
    );

}


/* =========================================================
   11 — CLOSE ACHIEVEMENT MODAL
========================================================= */

function closeAchievementModal() {

    if (!achievementModal) {
        return;
    }

    achievementModal.classList.remove(
        "is-open"
    );

    achievementModal.setAttribute(
        "aria-hidden",
        "true"
    );

    body.classList.remove(
        "menu-open"
    );

}


/* =========================================================
   12 — ACHIEVEMENT BUTTONS
========================================================= */

document
    .querySelectorAll(
        "[data-achievement-open]"
    )
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                openAchievementModal(
                    button.dataset.achievementOpen
                );

            }
        );

    });


if (achievementModalClose) {

    achievementModalClose.addEventListener(
        "click",
        closeAchievementModal
    );

}


/* =========================================================
   13 — ACHIEVEMENT BACKDROP
========================================================= */

if (achievementModal) {

    const backdrop =
        achievementModal.querySelector(
            ".achievement-modal-backdrop"
        );

    if (backdrop) {

        backdrop.addEventListener(
            "click",
            closeAchievementModal
        );

    }

}


/* =========================================================
   14 — ACHIEVEMENT FILTER
========================================================= */

const achievementEntries =
    document.querySelectorAll(
        ".achievement-entry[data-achievement-category]"
    );

const achievementFilterButtons =
    document.querySelectorAll(
        "[data-achievement-filter]"
    );


achievementFilterButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const filter =
                    button.dataset.achievementFilter;


                achievementFilterButtons.forEach(
                    (item) => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                achievementEntries.forEach(
                    (entry) => {

                        const category =
                            entry.dataset.achievementCategory;

                        const shouldShow =
                            filter === "all" ||
                            category === filter;

                        entry.classList.toggle(
                            "is-hidden",
                            !shouldShow
                        );

                    }
                );

            }
        );

    }
);


/* =========================================================
   15 — INTEREST DATA
========================================================= */

const interestData = {

    freelancing: {
        title: "Freelancing",
        category: "PROFESSIONAL",
        index: "01"
    },

    cybersecurity: {
        title: "Cybersecurity",
        category: "TECHNOLOGY",
        index: "02"
    },

    "ai-automation": {
        title: "AI Automation",
        category: "INTELLIGENT SYSTEMS",
        index: "03"
    },

    "content-creation": {
        title: "Content Creation",
        category: "CREATIVE",
        index: "04"
    },

    learning: {
        title: "Learning",
        category: "GROWTH",
        index: "05"
    },

    "web-development": {
        title: "Web Development",
        category: "DEVELOPMENT",
        index: "06"
    },

    hackathons: {
        title: "Hackathons",
        category: "COMPETITION",
        index: "07"
    },

    "business-planning": {
        title: "Business Planning",
        category: "ENTREPRENEURSHIP",
        index: "08"
    }

};


/* =========================================================
   16 — INTEREST NODES
========================================================= */

const interestNodes =
    document.querySelectorAll(
        "[data-interest-id]"
    );

const interestDetailEmpty =
    document.querySelector(
        ".interest-detail-empty"
    );

const interestDetailCards =
    document.querySelectorAll(
        "[data-interest-detail]"
    );


/* =========================================================
   17 — SHOW INTEREST
========================================================= */

function showInterest(
    interestId
) {

    const data =
        interestData[interestId];

    if (!data) {
        return;
    }


    interestNodes.forEach(
        (node) => {

            node.classList.toggle(
                "is-active",
                node.dataset.interestId === interestId
            );

        }
    );


    if (interestDetailEmpty) {

        interestDetailEmpty.hidden = true;

    }


    interestDetailCards.forEach(
        (card) => {

            card.hidden =
                card.dataset.interestDetail !== interestId;

        }
    );

}


/* =========================================================
   18 — INTEREST NODE EVENTS
========================================================= */

interestNodes.forEach(
    (node) => {

        node.addEventListener(
            "click",
            () => {

                showInterest(
                    node.dataset.interestId
                );

            }
        );


        node.addEventListener(
            "mouseenter",
            () => {

                if (
                    window.matchMedia(
                        "(hover: hover)"
                    ).matches
                ) {

                    showInterest(
                        node.dataset.interestId
                    );

                }

            }
        );

    }
);


/* =========================================================
   19 — KEYBOARD SUPPORT FOR MODALS
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key !== "Escape"
        ) {
            return;
        }

        closeProjectModal();

        closeAchievementModal();

    }
);


/* =========================================================
   20 — MODAL BODY STATE SAFETY
========================================================= */

document.addEventListener(
    "click",
    (event) => {

        const clickedInsideProject =
            event.target.closest(
                ".project-modal-panel"
            );

        const clickedInsideAchievement =
            event.target.closest(
                ".achievement-modal-panel"
            );

        if (
            projectModal &&
            projectModal.classList.contains(
                "is-open"
            ) &&
            !clickedInsideProject &&
            event.target.closest(
                ".project-modal"
            )
        ) {

            closeProjectModal();

        }


        if (
            achievementModal &&
            achievementModal.classList.contains(
                "is-open"
            ) &&
            !clickedInsideAchievement &&
            event.target.closest(
                ".achievement-modal"
            )
        ) {

            closeAchievementModal();

        }

    }
);


/* =========================================================
   21 — PROJECT COUNT
========================================================= */

const projectCountElement =
    document.querySelector(
        "[data-project-count]"
    );


if (projectCountElement) {

    const count =
        projectCards.length;

    projectCountElement.textContent =
        String(count).padStart(
            2,
            "0"
        );

}


/* =========================================================
   22 — ACHIEVEMENT COUNT
========================================================= */

const achievementCountElement =
    document.querySelector(
        "[data-achievement-count]"
    );


if (achievementCountElement) {

    const count =
        achievementEntries.length;

    achievementCountElement.textContent =
        String(count).padStart(
            2,
            "0"
        );

}


/* =========================================================
   23 — INTEREST COUNT
========================================================= */

const interestCountElement =
    document.querySelector(
        "[data-interest-count]"
    );


if (interestCountElement) {

    interestCountElement.textContent =
        String(
            Object.keys(interestData).length
        ).padStart(
            2,
            "0"
        );

}


/* =========================================================
   24 — INTERACTION LOG
========================================================= */

console.log(
    "Projects interaction system loaded."
);

console.log(
    "Achievements interaction system loaded."
);

console.log(
    "Interests interaction system loaded."
);
/* =========================================================
   SHORYA JAIN — MASTER PORTFOLIO
   JAVASCRIPT PART 3
   CURSOR + REVEALS + FORM VALIDATION
========================================================= */


/* =========================================================
   01 — CUSTOM CURSOR
========================================================= */

const cursor =
    document.querySelector(".custom-cursor");

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorOutline =
    document.querySelector(".cursor-outline");


if (
    cursor &&
    cursorDot &&
    cursorOutline &&
    window.matchMedia("(hover: hover)").matches
) {

    let mouseX = 0;
    let mouseY = 0;

    let outlineX = 0;
    let outlineY = 0;


    document.addEventListener(
        "mousemove",
        (event) => {

            mouseX = event.clientX;
            mouseY = event.clientY;

            cursorDot.style.transform =
                `translate3d(
                    ${mouseX}px,
                    ${mouseY}px,
                    0
                )`;

        }
    );


    function animateCursor() {

        outlineX +=
            (mouseX - outlineX) * 0.14;

        outlineY +=
            (mouseY - outlineY) * 0.14;

        cursorOutline.style.transform =
            `translate3d(
                ${outlineX}px,
                ${outlineY}px,
                0
            )`;

        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    document
        .querySelectorAll(
            "a, button, input, textarea"
        )
        .forEach(
            (element) => {

                element.addEventListener(
                    "mouseenter",
                    () => {

                        cursor.classList.add(
                            "cursor-hover"
                        );

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        cursor.classList.remove(
                            "cursor-hover"
                        );

                    }
                );

            }
        );

}


/* =========================================================
   02 — SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        `
        .section-eyebrow,
        .section-title,
        .bca-focus-card,
        .freelance-service-card,
        .freelance-project,
        .project-card,
        .achievement-entry,
        .achievement-mini-card,
        .interest-node,
        .interest-detail-panel,
        .contact-social-link,
        .contact-form-wrapper
        `
    );


revealElements.forEach(
    (element) => {

        element.classList.add(
            "reveal-element"
        );

    }
);


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "is-visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   03 — STAGGERED CARD REVEALS
========================================================= */

const staggerGroups = [
    ".bca-focus-card",
    ".freelance-service-card",
    ".freelance-project",
    ".project-card",
    ".achievement-entry",
    ".achievement-mini-card",
    ".interest-node",
    ".contact-social-link"
];


staggerGroups.forEach(
    (selector) => {

        document
            .querySelectorAll(selector)
            .forEach(
                (element, index) => {

                    element.style.setProperty(
                        "--reveal-delay",
                        `${index * 80}ms`
                    );

                }
            );

    }
);


/* =========================================================
   04 — MOUSE TILT ON CARDS
========================================================= */

const tiltCards =
    document.querySelectorAll(
        `
        .freelance-service-card,
        .project-card,
        .achievement-mini-card
        `
    );


if (
    window.matchMedia("(hover: hover)").matches
) {

    tiltCards.forEach(
        (card) => {

            card.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX - rect.left;

                    const y =
                        event.clientY - rect.top;

                    const centerX =
                        rect.width / 2;

                    const centerY =
                        rect.height / 2;

                    const rotateX =
                        (centerY - y) / 35;

                    const rotateY =
                        (x - centerX) / 35;


                    card.style.transform =
                        `
                        perspective(900px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-5px)
                        `;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        }
    );

}


/* =========================================================
   05 — CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById(
        "contact-form"
    );

const nameInput =
    document.getElementById(
        "contact-name"
    );

const emailInput =
    document.getElementById(
        "contact-email"
    );

const subjectInput =
    document.getElementById(
        "contact-subject"
    );

const messageInput =
    document.getElementById(
        "contact-message"
    );

const consentInput =
    document.getElementById(
        "contact-consent"
    );

const submitButton =
    document.getElementById(
        "contact-submit"
    );

const formStatus =
    document.getElementById(
        "contact-form-status"
    );

const characterCount =
    document.getElementById(
        "message-character-count"
    );


/* =========================================================
   06 — MESSAGE CHARACTER COUNTER
========================================================= */

if (
    messageInput &&
    characterCount
) {

    messageInput.addEventListener(
        "input",
        () => {

            const length =
                messageInput.value.length;

            characterCount.textContent =
                Math.min(
                    length,
                    1000
                );

            if (length > 1000) {

                messageInput.value =
                    messageInput.value.substring(
                        0,
                        1000
                    );

            }

        }
    );

}


/* =========================================================
   07 — FORM ERROR HELPERS
========================================================= */

function setFormError(
    input,
    errorId,
    message
) {

    if (input) {

        input.classList.add(
            "has-error"
        );

    }


    const errorElement =
        document.getElementById(
            errorId
        );


    if (errorElement) {

        errorElement.textContent =
            message;

    }

}


function clearFormError(
    input,
    errorId
) {

    if (input) {

        input.classList.remove(
            "has-error"
        );

    }


    const errorElement =
        document.getElementById(
            errorId
        );


    if (errorElement) {

        errorElement.textContent =
            "";

    }

}


/* =========================================================
   08 — EMAIL VALIDATION
========================================================= */

function isValidEmail(
    email
) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}


/* =========================================================
   09 — FORM VALIDATION
========================================================= */

function validateContactForm() {

    let isValid = true;


    clearFormError(
        nameInput,
        "contact-name-error"
    );

    clearFormError(
        emailInput,
        "contact-email-error"
    );

    clearFormError(
        subjectInput,
        "contact-subject-error"
    );

    clearFormError(
        messageInput,
        "contact-message-error"
    );

    clearFormError(
        consentInput,
        "contact-consent-error"
    );


    /* NAME */

    if (
        !nameInput ||
        nameInput.value.trim().length < 2
    ) {

        setFormError(
            nameInput,
            "contact-name-error",
            "Please enter your name."
        );

        isValid = false;

    }


    /* EMAIL */

    if (
        !emailInput ||
        !isValidEmail(
            emailInput.value.trim()
        )
    ) {

        setFormError(
            emailInput,
            "contact-email-error",
            "Please enter a valid email."
        );

        isValid = false;

    }


    /* MESSAGE */

    if (
        !messageInput ||
        messageInput.value.trim().length < 10
    ) {

        setFormError(
            messageInput,
            "contact-message-error",
            "Message must contain at least 10 characters."
        );

        isValid = false;

    }


    /* MESSAGE LIMIT */

    if (
        messageInput &&
        messageInput.value.length > 1000
    ) {

        setFormError(
            messageInput,
            "contact-message-error",
            "Message cannot exceed 1000 characters."
        );

        isValid = false;

    }


    /* CONSENT */

    if (
        !consentInput ||
        !consentInput.checked
    ) {

        setFormError(
            consentInput,
            "contact-consent-error",
            "Please confirm the information."
        );

        isValid = false;

    }


    return isValid;

}


/* =========================================================
   10 — CLEAR ERRORS WHILE TYPING
========================================================= */

if (nameInput) {

    nameInput.addEventListener(
        "input",
        () => {

            clearFormError(
                nameInput,
                "contact-name-error"
            );

        }
    );

}


if (emailInput) {

    emailInput.addEventListener(
        "input",
        () => {

            clearFormError(
                emailInput,
                "contact-email-error"
            );

        }
    );

}


if (messageInput) {

    messageInput.addEventListener(
        "input",
        () => {

            clearFormError(
                messageInput,
                "contact-message-error"
            );

        }
    );

}


if (consentInput) {

    consentInput.addEventListener(
        "change",
        () => {

            clearFormError(
                consentInput,
                "contact-consent-error"
            );

        }
    );

}


/* =========================================================
   11 — FORM SUBMISSION
========================================================= */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            const valid =
                validateContactForm();


            if (!valid) {

                if (formStatus) {

                    formStatus.textContent =
                        "Please check the highlighted fields.";

                }

                return;

            }


            /*

               EMAIL SERVICE WILL BE CONNECTED HERE.

               Current stage:
               Form validation only.

            */


            if (submitButton) {

                submitButton.classList.add(
                    "is-loading"
                );

                submitButton.disabled =
                    true;

            }


            if (formStatus) {

                formStatus.textContent =
                    "Your message is ready to be connected to the email service.";

            }


            /*
               Temporary demo state.
               This does NOT send an email yet.
            */

            setTimeout(
                () => {

                    if (submitButton) {

                        submitButton.classList.remove(
                            "is-loading"
                        );

                        submitButton.classList.add(
                            "is-success"
                        );

                    }


                    if (formStatus) {

                        formStatus.textContent =
                            "Form validated successfully.";

                    }


                    contactForm.reset();


                    if (characterCount) {

                        characterCount.textContent =
                            "0";

                    }


                    setTimeout(
                        () => {

                            if (submitButton) {

                                submitButton.classList.remove(
                                    "is-success"
                                );

                                submitButton.disabled =
                                    false;

                            }

                        },
                        2500
                    );

                },
                700
            );

        }
    );

}


/* =========================================================
   12 — IMAGE LOAD EFFECT
========================================================= */

const pageImages =
    document.querySelectorAll(
        "img"
    );


pageImages.forEach(
    (image) => {

        image.addEventListener(
            "load",
            () => {

                image.classList.add(
                    "image-loaded"
                );

            }
        );

    }
);


/* =========================================================
   13 — WINDOW RESIZE SAFETY
========================================================= */

let resizeTimer;


window.addEventListener(
    "resize",
    () => {

        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(
                () => {

                    if (
                        window.innerWidth > 1100
                    ) {

                        closeMobileMenu();

                    }

                },
                150
            );

    }
);


/* =========================================================
   14 — FINAL STATUS
========================================================= */

console.log(
    "%cINTERACTION SYSTEM READY",
    "color:#72249d;font-weight:bold;"
);

console.log(
    "Cursor: ready"
);

console.log(
    "Scroll reveals: ready"
);

console.log(
    "Card interactions: ready"
);

console.log(
    "Contact validation: ready"
);

console.log(
    "Email delivery: NOT CONNECTED YET"
);
/* =========================================================
   SHORYA JAIN — MASTER PORTFOLIO
   JAVASCRIPT PART 4
   ADVANCED MOTION + DYNAMIC EFFECTS
========================================================= */


/* =========================================================
   01 — HERO ENTRANCE
========================================================= */

window.addEventListener("load", () => {

    const heroElements = [
        document.querySelector(".hero-eyebrow"),
        document.querySelector(".hero-title"),
        document.querySelector(".hero-role-wrapper"),
        document.querySelector(".hero-description"),
        document.querySelector(".hero-actions"),
        document.querySelector(".hero-visual"),
        document.querySelector(".hero-section-selector")
    ];

    heroElements.forEach((element, index) => {

        if (!element) {
            return;
        }

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";

        setTimeout(() => {

            element.style.transition =
                "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)";

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }, 350 + index * 120);

    });

});


/* =========================================================
   02 — REVEAL CSS FALLBACK
========================================================= */

const revealStyle = document.createElement("style");

revealStyle.textContent = `

.reveal-element {

    opacity: 0;
    transform: translateY(35px);
    transition:
        opacity 0.8s cubic-bezier(0.22,1,0.36,1),
        transform 0.8s cubic-bezier(0.22,1,0.36,1);

    transition-delay:
        var(--reveal-delay, 0ms);
}

.reveal-element.is-visible {

    opacity: 1;
    transform: translateY(0);

}

.custom-cursor {

    position: fixed;
    inset: 0;
    z-index: 99999;
    pointer-events: none;

}

.cursor-dot {

    position: fixed;
    width: 7px;
    height: 7px;
    margin: -3.5px 0 0 -3.5px;
    border-radius: 50%;
    background: white;

}

.cursor-outline {

    position: fixed;
    width: 34px;
    height: 34px;
    margin: -17px 0 0 -17px;
    border: 1px solid rgba(114,36,157,.7);
    border-radius: 50%;

    transition:
        width .25s ease,
        height .25s ease,
        margin .25s ease,
        border-color .25s ease;

}

.custom-cursor.cursor-hover .cursor-outline {

    width: 52px;
    height: 52px;
    margin: -26px 0 0 -26px;
    border-color: rgba(114,36,157,1);

}

@media (max-width: 1100px) {

    .custom-cursor {
        display: none;
    }

}

`;

document.head.appendChild(revealStyle);


/* =========================================================
   03 — HEADER APPEARANCE ON SCROLL
========================================================= */

const headerElement =
    document.getElementById("global-header");


window.addEventListener(
    "scroll",
    () => {

        if (!headerElement) {
            return;
        }

        const amount =
            Math.min(
                window.scrollY / 300,
                1
            );

        headerElement.style.setProperty(
            "--scroll-progress",
            amount
        );

    },
    {
        passive: true
    }
);


/* =========================================================
   04 — PARALLAX BACKGROUND
========================================================= */

const backgroundGlowOne =
    document.querySelector(
        ".background-glow-one"
    );

const backgroundGlowTwo =
    document.querySelector(
        ".background-glow-two"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {
            return;
        }

        const scroll =
            window.scrollY;


        if (backgroundGlowOne) {

            backgroundGlowOne.style.transform =
                `translateY(${scroll * 0.08}px)`;

        }


        if (backgroundGlowTwo) {

            backgroundGlowTwo.style.transform =
                `translateY(${scroll * -0.05}px)`;

        }

    },
    {
        passive: true
    }
);


/* =========================================================
   05 — SECTION PROGRESS
========================================================= */

const sectionProgressBar =
    document.createElement("div");


sectionProgressBar.className =
    "section-progress-bar";


sectionProgressBar.innerHTML =
    "<span></span>";


document.body.appendChild(
    sectionProgressBar
);


const sectionProgressStyle =
    document.createElement("style");


sectionProgressStyle.textContent = `

.section-progress-bar {

    position: fixed;
    left: 0;
    top: 0;
    z-index: 9998;
    width: 100%;
    height: 2px;
    pointer-events: none;
    background: rgba(255,255,255,.04);

}

.section-progress-bar span {

    display: block;
    width: 0%;
    height: 100%;
    background: #72249d;
    transition: width .08s linear;

}

`;

document.head.appendChild(
    sectionProgressStyle
);


const progressFill =
    sectionProgressBar.querySelector(
        "span"
    );


window.addEventListener(
    "scroll",
    () => {

        if (!progressFill) {
            return;
        }

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;

        progressFill.style.width =
            `${progress}%`;

    },
    {
        passive: true
    }
);


/* =========================================================
   06 — ACTIVE MOBILE NAVIGATION
========================================================= */

const mobileNavLinks =
    document.querySelectorAll(
        ".mobile-nav-link"
    );


function updateMobileNavigation(
    currentSection
) {

    mobileNavLinks.forEach(
        (link) => {

            link.classList.toggle(
                "active",
                link.dataset.target === currentSection
            );

        }
    );

}


const mobileSectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        updateMobileNavigation(
                            entry.target.id
                        );

                    }

                }
            );

        },
        {
            threshold: 0.55
        }
    );


sections.forEach(
    (section) => {

        mobileSectionObserver.observe(
            section
        );

    }
);


/* =========================================================
   07 — INTEREST NODE FLOATING MOTION
========================================================= */

const interestUniverse =
    document.querySelector(
        ".interest-universe"
    );


const universeNodes =
    document.querySelectorAll(
        ".interest-node"
    );


if (
    interestUniverse &&
    universeNodes.length &&
    window.matchMedia("(hover: hover)").matches
) {

    interestUniverse.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                interestUniverse.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            universeNodes.forEach(
                (node, index) => {

                    const strength =
                        (index % 3 + 1) * 0.7;

                    const moveX =
                        (x - centerX) /
                        100 *
                        strength;

                    const moveY =
                        (y - centerY) /
                        100 *
                        strength;

                    node.style.setProperty(
                        "--mouse-x",
                        `${moveX}px`
                    );

                    node.style.setProperty(
                        "--mouse-y",
                        `${moveY}px`
                    );

                    node.style.transform =
                        `translate(
                            var(--mouse-x),
                            var(--mouse-y)
                        )`;

                }
            );

        }
    );


    interestUniverse.addEventListener(
        "mouseleave",
        () => {

            universeNodes.forEach(
                (node) => {

                    node.style.transform =
                        "";

                }
            );

        }
    );

}


/* =========================================================
   08 — MAGNETIC BUTTONS
========================================================= */

const magneticButtons =
    document.querySelectorAll(
        `
        .hero-primary-button,
        .hero-secondary-button,
        .freelance-contact-button,
        .back-home-button,
        .footer-top-button
        `
    );


if (
    window.matchMedia("(hover: hover)").matches
) {

    magneticButtons.forEach(
        (button) => {

            button.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        button.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;

                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    button.style.transform =
                        `translate(
                            ${x * 0.08}px,
                            ${y * 0.08}px
                        )`;

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform =
                        "";

                }
            );

        }
    );

}


/* =========================================================
   09 — IMAGE LAZY LOADING
========================================================= */

document
    .querySelectorAll("img")
    .forEach(
        (image) => {

            image.loading =
                "lazy";

            image.decoding =
                "async";

        }
    );


/* =========================================================
   10 — VIDEO PERFORMANCE
========================================================= */

document
    .querySelectorAll("video")
    .forEach(
        (video) => {

            video.preload =
                "metadata";

            video.playsInline =
                true;

        }
    );


/* =========================================================
   11 — DYNAMIC YEAR
========================================================= */

const currentYear =
    new Date().getFullYear();


document
    .querySelectorAll(
        ".footer-copy, .footer-bottom-left"
    )
    .forEach(
        (element) => {

            element.innerHTML =
                element.innerHTML.replace(
                    /©\s*2026/,
                    `© ${currentYear}`
                );

        }
    );


/* =========================================================
   12 — DOUBLE CLICK PROTECTION
========================================================= */

let lastClickTime = 0;


document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                "button"
            );

        if (!button) {
            return;
        }

        const now =
            Date.now();

        if (
            now - lastClickTime < 150
        ) {

            event.stopPropagation();

        }

        lastClickTime =
            now;

    },
    true
);


/* =========================================================
   13 — PAGE VISIBILITY
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden
        ) {

            document
                .querySelectorAll("video")
                .forEach(
                    (video) => {

                        if (
                            !video.paused
                        ) {

                            video.dataset.wasPlaying =
                                "true";

                            video.pause();

                        }

                    }
                );

        } else {

            document
                .querySelectorAll(
                    'video[data-was-playing="true"]'
                )
                .forEach(
                    (video) => {

                        video
                            .play()
                            .catch(
                                () => {}
                            );

                        delete video.dataset.wasPlaying;

                    }
                );

        }

    }
);


/* =========================================================
   14 — CONNECTION CHECK
========================================================= */

const requiredSections = [
    "hero",
    "bca",
    "freelancing",
    "projects",
    "achievements",
    "interests",
    "contact"
];


requiredSections.forEach(
    (sectionId) => {

        const section =
            document.getElementById(
                sectionId
            );

        if (!section) {

            console.warn(
                `Missing section: ${sectionId}`
            );

        }

    }
);


/* =========================================================
   15 — FINAL JAVASCRIPT STATUS
========================================================= */

console.log(
    "%cMASTER INTERACTION LAYER ACTIVE",
    "color:#72249d;font-size:16px;font-weight:bold;"
);

console.log(
    `Sections detected: ${sections.length}`
);

console.log(
    `Projects detected: ${projectCards.length}`
);

console.log(
    `Achievements detected: ${achievementEntries.length}`
);

console.log(
    `Interests detected: ${interestNodes.length}`
);
/* =========================================================
   SHORYA JAIN — MASTER PORTFOLIO
   JAVASCRIPT PART 5
   MEDIA VIEWER + VIDEO CONTROLS + FINAL POLISH
========================================================= */


/* =========================================================
   01 — MEDIA VIEWER CREATION
========================================================= */

const mediaViewer =
    document.createElement("div");

mediaViewer.className =
    "media-viewer";

mediaViewer.innerHTML = `
    <div class="media-viewer-backdrop"></div>

    <div class="media-viewer-panel">

        <button
            type="button"
            class="media-viewer-close"
            aria-label="Close media viewer"
        >
            CLOSE ×
        </button>

        <div class="media-viewer-content"></div>

    </div>
`;

document.body.appendChild(
    mediaViewer
);


const mediaViewerContent =
    mediaViewer.querySelector(
        ".media-viewer-content"
    );

const mediaViewerClose =
    mediaViewer.querySelector(
        ".media-viewer-close"
    );

const mediaViewerBackdrop =
    mediaViewer.querySelector(
        ".media-viewer-backdrop"
    );


/* =========================================================
   02 — MEDIA VIEWER STYLES
========================================================= */

const mediaViewerStyle =
    document.createElement("style");


mediaViewerStyle.textContent = `

.media-viewer {

    position: fixed;
    inset: 0;
    z-index: 3000;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 25px;

    visibility: hidden;
    opacity: 0;
    pointer-events: none;

    transition:
        opacity .4s ease,
        visibility .4s ease;

}

.media-viewer.is-open {

    visibility: visible;
    opacity: 1;
    pointer-events: auto;

}

.media-viewer-backdrop {

    position: absolute;
    inset: 0;

    background: rgba(0,0,0,.9);

    backdrop-filter: blur(18px);

}

.media-viewer-panel {

    position: relative;
    z-index: 2;

    width: min(1200px, 100%);
    max-height: 90vh;

    display: flex;
    align-items: center;
    justify-content: center;

}

.media-viewer-content {

    max-width: 100%;
    max-height: 85vh;

    display: flex;
    align-items: center;
    justify-content: center;

}

.media-viewer-content img,
.media-viewer-content video {

    display: block;

    max-width: 100%;
    max-height: 85vh;

    object-fit: contain;

    border: 1px solid rgba(114,36,157,.45);

    box-shadow:
        0 30px 120px rgba(0,0,0,.6);

}

.media-viewer-close {

    position: absolute;

    top: -45px;
    right: 0;

    z-index: 5;

    font-family: "DM Mono", monospace;
    font-size: 9px;
    letter-spacing: .12em;

    color: white;

}

.media-viewer-close:hover {

    color: #72249d;

}

`;


document.head.appendChild(
    mediaViewerStyle
);


/* =========================================================
   03 — OPEN MEDIA
========================================================= */

function openMedia(
    source,
    type,
    alt = "Portfolio media"
) {

    if (!mediaViewerContent) {
        return;
    }

    mediaViewerContent.innerHTML = "";


    if (type === "video") {

        const video =
            document.createElement("video");

        video.src =
            source;

        video.controls =
            true;

        video.autoplay =
            true;

        video.playsInline =
            true;

        video.preload =
            "metadata";

        mediaViewerContent.appendChild(
            video
        );

    } else {

        const image =
            document.createElement("img");

        image.src =
            source;

        image.alt =
            alt;

        mediaViewerContent.appendChild(
            image
        );

    }


    mediaViewer.classList.add(
        "is-open"
    );

    body.classList.add(
        "menu-open"
    );

}


/* =========================================================
   04 — CLOSE MEDIA
========================================================= */

function closeMediaViewer() {

    mediaViewer.classList.remove(
        "is-open"
    );

    body.classList.remove(
        "menu-open"
    );

    if (mediaViewerContent) {

        mediaViewerContent.innerHTML =
            "";

    }

}


/* =========================================================
   05 — CLOSE CONTROLS
========================================================= */

if (mediaViewerClose) {

    mediaViewerClose.addEventListener(
        "click",
        closeMediaViewer
    );

}


if (mediaViewerBackdrop) {

    mediaViewerBackdrop.addEventListener(
        "click",
        closeMediaViewer
    );

}


/* =========================================================
   06 — ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeMediaViewer();

        }

    }
);


/* =========================================================
   07 — IMAGE CLICK HANDLER
========================================================= */

document.addEventListener(
    "click",
    (event) => {

        const image =
            event.target.closest(
                "[data-view-image]"
            );

        if (!image) {
            return;
        }

        event.preventDefault();

        openMedia(
            image.dataset.viewImage,
            "image",
            image.alt
        );

    }
);


/* =========================================================
   08 — VIDEO CLICK HANDLER
========================================================= */

document.addEventListener(
    "click",
    (event) => {

        const video =
            event.target.closest(
                "[data-view-video]"
            );

        if (!video) {
            return;
        }

        event.preventDefault();

        openMedia(
            video.dataset.viewVideo,
            "video"
        );

    }
);


/* =========================================================
   09 — AUTO PREPARE IMAGES
========================================================= */

document
    .querySelectorAll(
        "img"
    )
    .forEach(
        (image) => {

            image.addEventListener(
                "error",
                () => {

                    image.classList.add(
                        "media-error"
                    );

                    console.warn(
                        "Image could not be loaded:",
                        image.src
                    );

                }
            );

        }
    );


/* =========================================================
   10 — AUTO PREPARE VIDEOS
========================================================= */

document
    .querySelectorAll(
        "video"
    )
    .forEach(
        (video) => {

            video.addEventListener(
                "error",
                () => {

                    console.warn(
                        "Video could not be loaded:",
                        video.src
                    );

                }
            );

        }
    );


/* =========================================================
   11 — VIDEO AUTOPAUSE WHEN OUT OF VIEW
========================================================= */

const videoObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    const video =
                        entry.target;

                    if (
                        !entry.isIntersecting &&
                        !video.paused
                    ) {

                        video.pause();

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


document
    .querySelectorAll(
        "video"
    )
    .forEach(
        (video) => {

            videoObserver.observe(
                video
            );

        }
    );


/* =========================================================
   12 — SCROLL SNAP-LIKE SECTION ASSIST
========================================================= */

let scrollingByNavigation =
    false;


document
    .querySelectorAll(
        "[data-target]"
    )
    .forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    scrollingByNavigation =
                        true;

                    setTimeout(
                        () => {

                            scrollingByNavigation =
                                false;

                        },
                        1000
                    );

                }
            );

        }
    );


/* =========================================================
   13 — DYNAMIC SECTION NUMBER
========================================================= */

sections.forEach(
    (section, index) => {

        section.dataset.order =
            String(
                index + 1
            ).padStart(
                2,
                "0"
            );

    }
);


/* =========================================================
   14 — CARD HOVER GLOW
========================================================= */

const glowCards =
    document.querySelectorAll(
        `
        .project-card,
        .freelance-service-card,
        .achievement-mini-card,
        .bca-focus-card
        `
    );


if (
    window.matchMedia(
        "(hover: hover)"
    ).matches
) {

    glowCards.forEach(
        (card) => {

            card.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;


                    card.style.setProperty(
                        "--glow-x",
                        `${x}px`
                    );

                    card.style.setProperty(
                        "--glow-y",
                        `${y}px`
                    );

                }
            );

        }
    );

}


/* =========================================================
   15 — INJECT CARD GLOW
========================================================= */

const glowStyle =
    document.createElement("style");


glowStyle.textContent = `

.project-card,
.freelance-service-card,
.achievement-mini-card,
.bca-focus-card {

    --glow-x: 50%;
    --glow-y: 50%;

}

.project-card::before,
.freelance-service-card::before,
.achievement-mini-card::before,
.bca-focus-card::before {

    content: "";

    position: absolute;
    inset: 0;

    pointer-events: none;

    background:
        radial-gradient(
            circle 160px at var(--glow-x) var(--glow-y),
            rgba(114,36,157,.10),
            transparent 70%
        );

    opacity: 0;

    transition: opacity .35s ease;

}

.project-card:hover::before,
.freelance-service-card:hover::before,
.achievement-mini-card:hover::before,
.bca-focus-card:hover::before {

    opacity: 1;

}

`;


document.head.appendChild(
    glowStyle
);


/* =========================================================
   16 — MEMORY CLEANUP FOR PAGE EXIT
========================================================= */

window.addEventListener(
    "beforeunload",
    () => {

        document
            .querySelectorAll("video")
            .forEach(
                (video) => {

                    video.pause();

                    video.removeAttribute(
                        "src"
                    );

                    video.load();

                }
            );

    }
);


/* =========================================================
   17 — FINAL SYSTEM REPORT
========================================================= */

console.log(
    "%cMEDIA SYSTEM READY",
    "color:#72249d;font-size:15px;font-weight:bold;"
);

console.log(
    "Image viewer: ready"
);

console.log(
    "Video viewer: ready"
);

console.log(
    "Video visibility control: ready"
);

console.log(
    "Dynamic section system: ready"
);

console.log(
    "Portfolio polish: ready"
);
/* =========================================================
   SHORYA JAIN — MASTER PORTFOLIO
   JAVASCRIPT PART 6
   ADVANCED TEXT + COUNTERS + NAVIGATION POLISH
========================================================= */


/* =========================================================
   01 — HERO ROLE ROTATOR
========================================================= */

const heroRole =
    document.querySelector(".hero-role");


const heroRoles = [
    "BCA STUDENT",
    "FREELANCER",
    "CREATOR",
    "DESIGNER",
    "DEVELOPER"
];


if (heroRole) {

    let roleIndex = 0;

    let roleChanging = false;


    async function changeHeroRole() {

        if (roleChanging) {
            return;
        }

        roleChanging = true;


        heroRole.style.transition =
            "opacity .25s ease, transform .25s ease";

        heroRole.style.opacity =
            "0";

        heroRole.style.transform =
            "translateY(8px)";


        await new Promise(
            (resolve) => {

                setTimeout(
                    resolve,
                    250
                );

            }
        );


        roleIndex =
            (roleIndex + 1) %
            heroRoles.length;


        heroRole.textContent =
            heroRoles[roleIndex];


        heroRole.style.opacity =
            "1";

        heroRole.style.transform =
            "translateY(0)";


        await new Promise(
            (resolve) => {

                setTimeout(
                    resolve,
                    250
                );

            }
        );


        roleChanging = false;

    }


    setInterval(
        changeHeroRole,
        3000
    );

}


/* =========================================================
   02 — COUNT-UP OBSERVER
========================================================= */

const animatedCounters =
    document.querySelectorAll(
        "[data-count-target]"
    );


function animateCounter(
    element
) {

    const target =
        Number(
            element.dataset.countTarget
        );


    if (
        Number.isNaN(target)
    ) {
        return;
    }


    const duration =
        1200;

    const startTime =
        performance.now();


    function updateCounter(
        currentTime
    ) {

        const elapsed =
            currentTime -
            startTime;

        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        element.textContent =
            String(
                Math.floor(
                    target * eased
                )
            ).padStart(
                2,
                "0"
            );


        if (
            progress < 1
        ) {

            requestAnimationFrame(
                updateCounter
            );

        }

    }


    requestAnimationFrame(
        updateCounter
    );

}


const counterObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    animateCounter(
                        entry.target
                    );


                    counterObserver.unobserve(
                        entry.target
                    );

                }
            );

        },
        {
            threshold: 0.6
        }
    );


animatedCounters.forEach(
    (counter) => {

        counterObserver.observe(
            counter
        );

    }
);


/* =========================================================
   03 — SECTION ENTRY CLASS
========================================================= */

const sectionEntryObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    entry.target.classList.toggle(
                        "section-in-view",
                        entry.isIntersecting
                    );

                }
            );

        },
        {
            threshold: 0.2
        }
    );


sections.forEach(
    (section) => {

        sectionEntryObserver.observe(
            section
        );

    }
);


/* =========================================================
   04 — CURRENT SECTION INDICATOR
========================================================= */

const currentSectionDisplay =
    document.createElement(
        "div"
    );


currentSectionDisplay.className =
    "current-section-display";


currentSectionDisplay.innerHTML = `
    <span class="current-section-line"></span>
    <span class="current-section-text">
        HOME
    </span>
`;


document.body.appendChild(
    currentSectionDisplay
);


const currentSectionStyle =
    document.createElement(
        "style"
    );


currentSectionStyle.textContent = `

.current-section-display {

    position: fixed;

    left: 20px;
    bottom: 25px;

    z-index: 999;

    display: flex;
    align-items: center;

    gap: 10px;

    pointer-events: none;

    font-family: "DM Mono", monospace;
    font-size: 7px;
    letter-spacing: .14em;

    color: rgba(255,255,255,.35);

    transform:
        rotate(-90deg)
        translateX(-100%);

    transform-origin:
        left bottom;

}

.current-section-line {

    display: block;

    width: 30px;
    height: 1px;

    background: #72249d;

}

@media (max-width: 600px) {

    .current-section-display {
        display: none;
    }

}

`;


document.head.appendChild(
    currentSectionStyle
);


const currentSectionText =
    currentSectionDisplay.querySelector(
        ".current-section-text"
    );


const currentSectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    const title =
                        entry.target.dataset.section ||
                        entry.target.id;


                    if (currentSectionText) {

                        currentSectionText.textContent =
                            title
                                .replace(
                                    /-/g,
                                    " "
                                )
                                .toUpperCase();

                    }

                }
            );

        },
        {
            threshold: 0.55
        }
    );


sections.forEach(
    (section) => {

        currentSectionObserver.observe(
            section
        );

    }
);


/* =========================================================
   05 — KEYBOARD SECTION NAVIGATION
========================================================= */

let currentSectionIndex =
    0;


const keyboardSectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        currentSectionIndex =
                            Array.from(
                                sections
                            ).indexOf(
                                entry.target
                            );

                    }

                }
            );

        },
        {
            threshold: 0.6
        }
    );


sections.forEach(
    (section) => {

        keyboardSectionObserver.observe(
            section
        );

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        const activeElement =
            document.activeElement;


        const typingIntoField =
            activeElement &&
            (
                activeElement.tagName ===
                    "INPUT" ||
                activeElement.tagName ===
                    "TEXTAREA"
            );


        if (
            typingIntoField
        ) {
            return;
        }


        if (
            event.key ===
            "ArrowDown"
        ) {

            event.preventDefault();


            const nextIndex =
                Math.min(
                    currentSectionIndex + 1,
                    sections.length - 1
                );


            sections[nextIndex].scrollIntoView({
                behavior: "smooth"
            });

        }


        if (
            event.key ===
            "ArrowUp"
        ) {

            event.preventDefault();


            const previousIndex =
                Math.max(
                    currentSectionIndex - 1,
                    0
                );


            sections[previousIndex].scrollIntoView({
                behavior: "smooth"
            });

        }

    }
);


/* =========================================================
   06 — NAVIGATION HOVER PREVIEW
========================================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


navLinks.forEach(
    (link) => {

        link.addEventListener(
            "mouseenter",
            () => {

                const target =
                    document.getElementById(
                        link.dataset.target
                    );


                if (!target) {
                    return;
                }


                target.classList.add(
                    "nav-preview"
                );

            }
        );


        link.addEventListener(
            "mouseleave",
            () => {

                document
                    .querySelectorAll(
                        ".nav-preview"
                    )
                    .forEach(
                        (section) => {

                            section.classList.remove(
                                "nav-preview"
                            );

                        }
                    );

            }
        );

    }
);


/* =========================================================
   07 — SECTION BACKGROUND PARALLAX
========================================================= */

const parallaxSections =
    document.querySelectorAll(
        ".page-section"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {

            return;

        }


        const viewportCenter =
            window.innerHeight / 2;


        parallaxSections.forEach(
            (section) => {

                const rect =
                    section.getBoundingClientRect();


                if (
                    rect.bottom < 0 ||
                    rect.top > window.innerHeight
                ) {

                    return;

                }


                const sectionCenter =
                    rect.top +
                    rect.height / 2;


                const distance =
                    sectionCenter -
                    viewportCenter;


                const amount =
                    distance *
                    -0.015;


                section.style.setProperty(
                    "--section-parallax",
                    `${amount}px`
                );

            }
        );

    },
    {
        passive: true
    }
);


/* =========================================================
   08 — DYNAMIC DATE
========================================================= */

const dateElements =
    document.querySelectorAll(
        "[data-current-date]"
    );


dateElements.forEach(
    (element) => {

        element.textContent =
            new Intl.DateTimeFormat(
                "en-IN",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                }
            ).format(
                new Date()
            );

    }
);


/* =========================================================
   09 — COPY EMAIL BUTTON SUPPORT
========================================================= */

const copyEmailButtons =
    document.querySelectorAll(
        "[data-copy-email]"
    );


copyEmailButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            async () => {

                const email =
                    button.dataset.copyEmail;


                if (!email) {
                    return;
                }


                try {

                    await navigator
                        .clipboard
                        .writeText(email);


                    const originalText =
                        button.textContent;


                    button.textContent =
                        "COPIED ✓";


                    setTimeout(
                        () => {

                            button.textContent =
                                originalText;

                        },
                        1600
                    );

                } catch (error) {

                    console.warn(
                        "Clipboard unavailable.",
                        error
                    );

                }

            }
        );

    }
);


/* =========================================================
   10 — OUTBOUND LINK TRACKING
========================================================= */

document
    .querySelectorAll(
        'a[target="_blank"]'
    )
    .forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    console.log(
                        "Opening external link:",
                        link.href
                    );

                }
            );

        }
    );


/* =========================================================
   11 — ONLINE / OFFLINE STATUS
========================================================= */

function updateConnectionStatus() {

    const online =
        navigator.onLine;


    document.body.classList.toggle(
        "is-offline",
        !online
    );


    console.log(
        online
            ? "Internet connection available."
            : "Internet connection unavailable."
    );

}


window.addEventListener(
    "online",
    updateConnectionStatus
);


window.addEventListener(
    "offline",
    updateConnectionStatus
);


updateConnectionStatus();


/* =========================================================
   12 — FINAL SYSTEM REPORT
========================================================= */

console.log(
    "%cADVANCED EXPERIENCE LAYER ACTIVE",
    "color:#72249d;font-size:16px;font-weight:bold;"
);

console.log(
    "Hero role rotation: ready"
);

console.log(
    "Section tracking: ready"
);

console.log(
    "Keyboard navigation: ready"
);

console.log(
    "Counters: ready"
);

console.log(
    "Parallax: ready"
);
/* =========================================================
   SHORYA JAIN — MASTER PORTFOLIO
   JAVASCRIPT PART 7
   FINAL INTERACTION LAYER
========================================================= */


/* =========================================================
   01 — SECTION NUMBER ANIMATION
========================================================= */

const animatedSectionNumbers =
    document.querySelectorAll(
        ".section-number"
    );


function animateNumber(
    element,
    finalValue
) {

    const numericValue =
        parseInt(
            finalValue,
            10
        );


    if (
        Number.isNaN(numericValue)
    ) {

        return;

    }


    let startTime =
        null;


    function frame(
        timestamp
    ) {

        if (!startTime) {

            startTime =
                timestamp;

        }


        const elapsed =
            timestamp -
            startTime;


        const progress =
            Math.min(
                elapsed / 700,
                1
            );


        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        const current =
            Math.floor(
                numericValue *
                eased
            );


        element.textContent =
            String(
                current
            ).padStart(
                2,
                "0"
            );


        if (
            progress < 1
        ) {

            requestAnimationFrame(
                frame
            );

        }

    }


    requestAnimationFrame(
        frame
    );

}


const numberObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        !entry.isIntersecting
                    ) {

                        return;

                    }


                    const target =
                        entry.target.dataset.originalNumber ||
                        entry.target.textContent;


                    entry.target.dataset.originalNumber =
                        target;


                    animateNumber(
                        entry.target,
                        target
                    );


                    numberObserver.unobserve(
                        entry.target
                    );

                }
            );

        },
        {
            threshold: 0.7
        }
    );


animatedSectionNumbers.forEach(
    (element) => {

        numberObserver.observe(
            element
        );

    }
);


/* =========================================================
   02 — TEXT SCRAMBLE EFFECT
========================================================= */

class TextScrambler {

    constructor(
        element
    ) {

        this.element =
            element;

        this.originalText =
            element.textContent;

        this.characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    }


    scramble() {

        const finalText =
            this.originalText;

        let frame =
            0;

        const totalFrames =
            finalText.length * 3;


        const interval =
            setInterval(
                () => {

                    let output =
                        "";


                    for (
                        let i = 0;
                        i < finalText.length;
                        i++
                    ) {

                        const character =
                            finalText[i];


                        if (
                            character === " "
                        ) {

                            output +=
                                " ";

                            continue;

                        }


                        const threshold =
                            i * 3;


                        if (
                            frame >
                            threshold + 5
                        ) {

                            output +=
                                character;

                        } else {

                            output +=
                                this.characters[
                                    Math.floor(
                                        Math.random() *
                                        this.characters.length
                                    )
                                ];

                        }

                    }


                    this.element.textContent =
                        output;


                    frame++;


                    if (
                        frame > totalFrames
                    ) {

                        clearInterval(
                            interval
                        );

                        this.element.textContent =
                            finalText;

                    }

                },
                35
            );

    }

}


/* =========================================================
   03 — SCRAMBLE SELECTED HEADINGS
========================================================= */

const scrambleTargets =
    document.querySelectorAll(
        `
        .hero-role,
        .section-category,
        .section-status
        `
    );


const scrambleObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        !entry.isIntersecting
                    ) {

                        return;

                    }


                    if (
                        entry.target.dataset.scrambled
                    ) {

                        return;

                    }


                    entry.target.dataset.scrambled =
                        "true";


                    const scrambler =
                        new TextScrambler(
                            entry.target
                        );


                    scrambler.scramble();


                    scrambleObserver.unobserve(
                        entry.target
                    );

                }
            );

        },
        {
            threshold: 0.7
        }
    );


scrambleTargets.forEach(
    (element) => {

        scrambleObserver.observe(
            element
        );

    }
);


/* =========================================================
   04 — CURSOR SPOTLIGHT
========================================================= */

const spotlight =
    document.createElement(
        "div"
    );


spotlight.className =
    "cursor-spotlight";


document.body.appendChild(
    spotlight
);


const spotlightStyle =
    document.createElement(
        "style"
    );


spotlightStyle.textContent = `

.cursor-spotlight {

    position: fixed;

    width: 280px;
    height: 280px;

    left: 0;
    top: 0;

    transform:
        translate(-50%, -50%);

    pointer-events: none;

    z-index: 1;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(114,36,157,.08),
            transparent 68%
        );

    opacity: 0;

    transition:
        opacity .3s ease;

}

@media (hover: hover) {

    body:hover .cursor-spotlight {

        opacity: 1;

    }

}

@media (max-width: 1100px) {

    .cursor-spotlight {

        display: none;

    }

}

`;


document.head.appendChild(
    spotlightStyle
);


if (
    window.matchMedia(
        "(hover: hover)"
    ).matches
) {

    document.addEventListener(
        "mousemove",
        (event) => {

            spotlight.style.left =
                `${event.clientX}px`;

            spotlight.style.top =
                `${event.clientY}px`;

        }
    );

}


/* =========================================================
   05 — SCROLL VELOCITY
========================================================= */

let previousScrollY =
    window.scrollY;

let scrollVelocity =
    0;


window.addEventListener(
    "scroll",
    () => {

        const currentScrollY =
            window.scrollY;


        scrollVelocity =
            currentScrollY -
            previousScrollY;


        previousScrollY =
            currentScrollY;


        document.documentElement.style.setProperty(
            "--scroll-velocity",
            Math.abs(
                scrollVelocity
            )
        );

    },
    {
        passive: true
    }
);


/* =========================================================
   06 — VELOCITY-BASED MARQUEE
========================================================= */

const toolsTrack =
    document.querySelector(
        ".tools-track"
    );


let marqueeBoost =
    0;


function animateMarquee() {

    if (!toolsTrack) {

        return;

    }


    const velocity =
        Math.min(
            Math.abs(
                scrollVelocity
            ),
            25
        );


    marqueeBoost =
        marqueeBoost * 0.92 +
        velocity * 0.08;


    toolsTrack.style.setProperty(
        "--marquee-boost",
        marqueeBoost.toFixed(2)
    );

}


function marqueeAnimationLoop() {

    animateMarquee();

    requestAnimationFrame(
        marqueeAnimationLoop
    );

}


marqueeAnimationLoop();


/* =========================================================
   07 — HOVER LETTER SPACING
========================================================= */

const hoverTextElements =
    document.querySelectorAll(
        `
        .selector-title,
        .project-card-content h3,
        .freelance-service-card h3,
        .achievement-entry-content h3
        `
    );


if (
    window.matchMedia(
        "(hover: hover)"
    ).matches
) {

    hoverTextElements.forEach(
        (element) => {

            element.addEventListener(
                "mouseenter",
                () => {

                    element.style.transition =
                        "letter-spacing .35s ease";

                    element.style.letterSpacing =
                        "-0.015em";

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    element.style.letterSpacing =
                        "";

                }
            );

        }
    );

}


/* =========================================================
   08 — TOUCH DEVICE CLEANUP
========================================================= */

const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0;


if (isTouchDevice) {

    document.body.classList.add(
        "touch-device"
    );


    document
        .querySelectorAll(
            ".custom-cursor, .cursor-spotlight"
        )
        .forEach(
            (element) => {

                element.style.display =
                    "none";

            }
        );

}


/* =========================================================
   09 — ONLINE STATUS ATTRIBUTE
========================================================= */

function updateBodyNetworkState() {

    document.body.dataset.network =
        navigator.onLine
            ? "online"
            : "offline";

}


window.addEventListener(
    "online",
    updateBodyNetworkState
);

window.addEventListener(
    "offline",
    updateBodyNetworkState
);


updateBodyNetworkState();


/* =========================================================
   10 — PREVENT DOUBLE FORM SUBMISSION
========================================================= */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        () => {

            if (
                submitButton &&
                submitButton.disabled
            ) {

                return;

            }

        }
    );

}


/* =========================================================
   11 — FOCUS VISIBILITY
========================================================= */

document
    .querySelectorAll(
        "a, button, input, textarea"
    )
    .forEach(
        (element) => {

            element.addEventListener(
                "focus",
                () => {

                    element.classList.add(
                        "keyboard-focus"
                    );

                }
            );


            element.addEventListener(
                "blur",
                () => {

                    element.classList.remove(
                        "keyboard-focus"
                    );

                }
            );

        }
    );


/* =========================================================
   12 — FINAL EXPERIENCE MARK
========================================================= */

document.documentElement.dataset.experience =
    "shorya-master-portfolio";


console.log(
    "%cFINAL INTERACTION LAYER LOADED",
    "color:#72249d;font-size:17px;font-weight:bold;"
);

console.log(
    "Text scramble: active"
);

console.log(
    "Cursor spotlight: active"
);

console.log(
    "Scroll velocity: active"
);

console.log(
    "Touch optimization: active"
);

console.log(
    "Accessibility focus states: active"
);
/* =========================================================
   SHORYA JAIN — MASTER PORTFOLIO
   JAVASCRIPT PART 8
   PREMIUM MICRO-INTERACTION + PERFORMANCE LAYER
========================================================= */

(() => {

    "use strict";

    /* =====================================================
       01 — EXPERIENCE SETTINGS
    ===================================================== */

    const root = document.documentElement;
    const body = document.body;

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const hoverCapable = window.matchMedia(
        "(hover: hover)"
    ).matches;

    const pointerFine = window.matchMedia(
        "(pointer: fine)"
    ).matches;

    const isTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;

    const hardwareCores =
        navigator.hardwareConcurrency || 8;

    const lowPowerDevice =
        hardwareCores <= 4;

    /*
       Heavy effects are disabled automatically when:
       - reduced motion is enabled
       - device is touch-only
       - device appears low powered
    */

    const premiumEffects =
        !reducedMotion &&
        hoverCapable &&
        pointerFine &&
        !isTouch &&
        !lowPowerDevice;


    /* =====================================================
       02 — GLOBAL EXPERIENCE STATE
    ===================================================== */

    const state = {

        pointerX: window.innerWidth / 2,
        pointerY: window.innerHeight / 2,

        currentInteractive: null,

        lastSection: null,

        scrollDirection: "none",

        lastScrollY: window.scrollY,

        pointerInsidePage: false,

        rippleCooldown: false

    };


    /* =====================================================
       03 — INTERNAL STYLE LAYER
    ===================================================== */

    const style = document.createElement("style");

    style.dataset.sjPart = "8";

    style.textContent = `

        /* -------------------------------------------------
           POINTER VARIABLES
        ------------------------------------------------- */

        [data-sj-interactive] {

            --sj-pointer-x: 50%;
            --sj-pointer-y: 50%;

        }


        /* -------------------------------------------------
           PREMIUM CARD LIGHT
        ------------------------------------------------- */

        .project-card[data-sj-interactive],
        .freelance-service-card[data-sj-interactive],
        .achievement-mini-card[data-sj-interactive],
        .bca-focus-card[data-sj-interactive],
        .interest-node[data-sj-interactive],
        .contact-social-link[data-sj-interactive] {

            position: relative;

            isolation: isolate;

        }


        .project-card[data-sj-interactive]::before,
        .freelance-service-card[data-sj-interactive]::before,
        .achievement-mini-card[data-sj-interactive]::before,
        .bca-focus-card[data-sj-interactive]::before {

            content: "";

            position: absolute;

            width: 220px;
            height: 220px;

            left: var(--sj-pointer-x);
            top: var(--sj-pointer-y);

            transform:
                translate(-50%, -50%);

            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    rgba(114, 36, 157, .13),
                    rgba(114, 36, 157, 0) 70%
                );

            opacity: 0;

            pointer-events: none;

            transition:
                opacity .35s ease;

            z-index: -1;

        }


        .project-card[data-sj-interactive]:hover::before,
        .freelance-service-card[data-sj-interactive]:hover::before,
        .achievement-mini-card[data-sj-interactive]:hover::before,
        .bca-focus-card[data-sj-interactive]:hover::before {

            opacity: 1;

        }


        /* -------------------------------------------------
           INTERACTIVE LIFT
        ------------------------------------------------- */

        [data-sj-interactive] {

            transition:
                box-shadow .35s ease,
                filter .35s ease;

        }


        [data-sj-interactive].sj-focus {

            filter:
                brightness(1.06);

        }


        /* -------------------------------------------------
           PREMIUM RIPPLE
        ------------------------------------------------- */

        .sj-ripple {

            position: absolute;

            width: 12px;
            height: 12px;

            border-radius: 50%;

            pointer-events: none;

            background:
                rgba(255,255,255,.28);

            transform:
                translate(-50%, -50%)
                scale(0);

            animation:
                sjRipple .65s ease-out forwards;

            z-index: 50;

        }


        @keyframes sjRipple {

            0% {

                opacity: .65;

                transform:
                    translate(-50%, -50%)
                    scale(0);

            }

            100% {

                opacity: 0;

                transform:
                    translate(-50%, -50%)
                    scale(22);

            }

        }


        /* -------------------------------------------------
           BUTTON PRESS
        ------------------------------------------------- */

        [data-sj-pressable] {

            -webkit-tap-highlight-color:
                transparent;

        }


        [data-sj-pressable].sj-pressed {

            filter:
                brightness(.92);

        }


        /* -------------------------------------------------
           SCROLL STATE
        ------------------------------------------------- */

        html[data-sj-scroll-direction="down"]
        .global-header {

            --sj-header-motion: 1;

        }


        html[data-sj-scroll-direction="up"]
        .global-header {

            --sj-header-motion: 0;

        }


        /* -------------------------------------------------
           SECTION FLASH
        ------------------------------------------------- */

        .sj-section-flash {

            position: fixed;

            inset: 0;

            pointer-events: none;

            z-index: 99990;

            background:
                radial-gradient(
                    circle at 50% 50%,
                    rgba(114,36,157,.08),
                    transparent 55%
                );

            opacity: 0;

        }


        .sj-section-flash.active {

            animation:
                sjSectionFlash .5s ease-out;

        }


        @keyframes sjSectionFlash {

            0% {
                opacity: 0;
            }

            18% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }

        }


        /* -------------------------------------------------
           IMAGE MICRO ZOOM
        ------------------------------------------------- */

        .sj-media-hover {

            overflow: hidden;

        }


        .sj-media-hover img {

            transition:
                transform .7s
                cubic-bezier(.22,1,.36,1),
                filter .5s ease;

        }


        .sj-media-hover:hover img {

            transform:
                scale(1.025);

            filter:
                brightness(1.04);

        }


        /* -------------------------------------------------
           PERFORMANCE MODE
        ------------------------------------------------- */

        html[data-sj-performance="low"]
        .sj-section-flash {

            display: none;

        }


        html[data-sj-performance="low"]
        .project-card[data-sj-interactive]::before,
        html[data-sj-performance="low"]
        .freelance-service-card[data-sj-interactive]::before,
        html[data-sj-performance="low"]
        .achievement-mini-card[data-sj-interactive]::before,
        html[data-sj-performance="low"]
        .bca-focus-card[data-sj-interactive]::before {

            display: none;

        }


        /* -------------------------------------------------
           ACCESSIBLE FOCUS
        ------------------------------------------------- */

        [data-sj-interactive].sj-keyboard-focus {

            outline:
                1px solid
                rgba(114,36,157,.9);

            outline-offset:
                4px;

        }


        /* -------------------------------------------------
           REDUCED MOTION
        ------------------------------------------------- */

        @media (prefers-reduced-motion: reduce) {

            .sj-ripple,
            .sj-section-flash {

                display: none !important;

            }

        }

    `;

    document.head.appendChild(style);


    /* =====================================================
       04 — PERFORMANCE MODE
    ===================================================== */

    if (
        !premiumEffects ||
        lowPowerDevice
    ) {

        root.dataset.sjPerformance = "low";

    } else {

        root.dataset.sjPerformance = "high";

    }


    root.dataset.sjPart8 = "active";


    /* =====================================================
       05 — REGISTER INTERACTIVE ELEMENTS
    ===================================================== */

    const interactiveSelector = `

        a,
        button,
        input,
        textarea,
        select,

        .project-card,
        .freelance-service-card,
        .achievement-mini-card,
        .bca-focus-card,
        .interest-node,
        .contact-social-link,
        .freelance-project

    `;


    document
        .querySelectorAll(interactiveSelector)
        .forEach((element) => {

            element.dataset.sjInteractive = "";

        });


    /* =====================================================
       06 — REGISTER MEDIA HOVER
    ===================================================== */

    document
        .querySelectorAll(`

            .project-card,
            .freelance-project,
            .freelance-service-card,
            .bca-focus-card

        `)
        .forEach((element) => {

            if (
                element.querySelector("img")
            ) {

                element.classList.add(
                    "sj-media-hover"
                );

            }

        });


    /* =====================================================
       07 — SINGLE POINTER ENGINE
    ===================================================== */

    let pointerFrame = null;

    function updatePointerFrame() {

        pointerFrame = null;

        root.style.setProperty(
            "--sj-pointer-x",
            `${state.pointerX}px`
        );

        root.style.setProperty(
            "--sj-pointer-y",
            `${state.pointerY}px`
        );

        if (
            !state.currentInteractive
        ) {

            return;

        }

        const element =
            state.currentInteractive;

        const rect =
            element.getBoundingClientRect();

        if (
            rect.width <= 0 ||
            rect.height <= 0
        ) {

            return;

        }

        const x =
            state.pointerX -
            rect.left;

        const y =
            state.pointerY -
            rect.top;

        element.style.setProperty(
            "--sj-pointer-x",
            `${x}px`
        );

        element.style.setProperty(
            "--sj-pointer-y",
            `${y}px`
        );

    }


    function schedulePointerFrame() {

        if (
            pointerFrame
        ) {

            return;

        }

        pointerFrame =
            requestAnimationFrame(
                updatePointerFrame
            );

    }


    if (premiumEffects) {

        document.addEventListener(
            "pointermove",
            (event) => {

                if (
                    event.pointerType ===
                    "touch"
                ) {

                    return;

                }

                state.pointerX =
                    event.clientX;

                state.pointerY =
                    event.clientY;

                schedulePointerFrame();

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       08 — SMART HOVER DETECTION
    ===================================================== */

    document.addEventListener(
        "pointerover",
        (event) => {

            const interactive =
                event.target.closest(
                    "[data-sj-interactive]"
                );

            if (
                !interactive
            ) {

                return;

            }

            state.currentInteractive =
                interactive;

            interactive.classList.add(
                "sj-focus"
            );

        },
        {
            passive: true
        }
    );


    document.addEventListener(
        "pointerout",
        (event) => {

            const interactive =
                event.target.closest(
                    "[data-sj-interactive]"
                );

            if (
                !interactive
            ) {

                return;

            }

            const related =
                event.relatedTarget;

            if (
                related &&
                interactive.contains(related)
            ) {

                return;

            }

            interactive.classList.remove(
                "sj-focus"
            );

            if (
                state.currentInteractive ===
                interactive
            ) {

                state.currentInteractive =
                    null;

            }

        },
        {
            passive: true
        }
    );


    /* =====================================================
       09 — PREMIUM RIPPLE SYSTEM
    ===================================================== */

    const rippleSelector = `

        .hero-primary-button,
        .hero-secondary-button,
        .freelance-contact-button,
        .back-home-button,
        .footer-top-button,
        .project-open-button,
        .achievement-open-button,
        .menu-trigger,
        .mobile-nav-link

    `;


    document.addEventListener(
        "pointerdown",
        (event) => {

            if (
                event.pointerType ===
                "touch"
            ) {

                return;

            }

            const button =
                event.target.closest(
                    rippleSelector
                );

            if (
                !button ||
                button.disabled
            ) {

                return;

            }

            /*
               Stop ripple spam from
               double clicks.
            */

            if (
                state.rippleCooldown
            ) {

                return;

            }

            state.rippleCooldown = true;

            setTimeout(
                () => {

                    state.rippleCooldown =
                        false;

                },
                60
            );


            /*
               Position relative to button.
            */

            const rect =
                button.getBoundingClientRect();

            const ripple =
                document.createElement(
                    "span"
                );

            ripple.className =
                "sj-ripple";

            ripple.style.left =
                `${event.clientX - rect.left}px`;

            ripple.style.top =
                `${event.clientY - rect.top}px`;


            /*
               Button needs a
               positioning context.
            */

            const computed =
                window.getComputedStyle(button);

            if (
                computed.position ===
                    "static"
            ) {

                button.style.position =
                    "relative";

            }

            button.appendChild(
                ripple
            );


            ripple.addEventListener(
                "animationend",
                () => {

                    ripple.remove();

                },
                {
                    once: true
                }
            );

        },
        {
            passive: true
        }
    );


    /* =====================================================
       10 — BUTTON PRESS FEEDBACK
    ===================================================== */

    document.addEventListener(
        "pointerdown",
        (event) => {

            const button =
                event.target.closest(
                    "button, a"
                );

            if (
                !button
            ) {

                return;

            }

            button.dataset.sjPressable = "";

            button.classList.add(
                "sj-pressed"
            );

        },
        {
            passive: true
        }
    );


    function releasePress() {

        document
            .querySelectorAll(
                ".sj-pressed"
            )
            .forEach(
                (element) => {

                    element.classList.remove(
                        "sj-pressed"
                    );

                }
            );

    }


    document.addEventListener(
        "pointerup",
        releasePress,
        {
            passive: true
        }
    );

    document.addEventListener(
        "pointercancel",
        releasePress,
        {
            passive: true
        }
    );


    /* =====================================================
       11 — SCROLL DIRECTION ENGINE
    ===================================================== */

    let scrollFrame = null;

    function updateScrollState() {

        scrollFrame = null;

        const currentY =
            window.scrollY;

        const difference =
            currentY -
            state.lastScrollY;

        if (
            Math.abs(difference) >= 2
        ) {

            state.scrollDirection =
                difference > 0
                    ? "down"
                    : "up";

            root.dataset.sjScrollDirection =
                state.scrollDirection;

        }

        state.lastScrollY =
            currentY;

    }


    window.addEventListener(
        "scroll",
        () => {

            if (
                scrollFrame
            ) {

                return;

            }

            scrollFrame =
                requestAnimationFrame(
                    updateScrollState
                );

        },
        {
            passive: true
        }
    );


    /* =====================================================
       12 — SECTION TRANSITION FEEDBACK
    ===================================================== */

    const sections =
        document.querySelectorAll(
            ".page-section"
        );


    const sectionFlash =
        document.createElement(
            "div"
        );

    sectionFlash.className =
        "sj-section-flash";

    body.appendChild(
        sectionFlash
    );


    let sectionFlashTimeout =
        null;


    function triggerSectionFlash(
        sectionId
    ) {

        if (
            reducedMotion ||
            !premiumEffects
        ) {

            return;

        }

        if (
            state.lastSection ===
            sectionId
        ) {

            return;

        }

        state.lastSection =
            sectionId;

        sectionFlash.classList.remove(
            "active"
        );

        /*
           Force reflow so animation
           can restart cleanly.
        */

        void sectionFlash.offsetWidth;

        sectionFlash.classList.add(
            "active"
        );


        clearTimeout(
            sectionFlashTimeout
        );

        sectionFlashTimeout =
            setTimeout(
                () => {

                    sectionFlash.classList.remove(
                        "active"
                    );

                },
                550
            );

    }


    /* =====================================================
       13 — SECTION TRACKING
    ===================================================== */

    if (
        sections.length
    ) {

        const sectionVisibilityObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                !entry.isIntersecting
                            ) {

                                return;

                            }

                            triggerSectionFlash(
                                entry.target.id
                            );

                        }
                    );

                },
                {
                    threshold: 0.55
                }
            );


        sections.forEach(
            (section) => {

                sectionVisibilityObserver.observe(
                    section
                );

            }
        );

    }


    /* =====================================================
       14 — HORIZONTAL POINTER DRIFT
    ===================================================== */

    let driftFrame = null;

    let driftTargetX = 0;
    let driftTargetY = 0;

    let driftCurrentX = 0;
    let driftCurrentY = 0;


    function updateDrift() {

        driftFrame = null;

        driftCurrentX +=
            (driftTargetX -
                driftCurrentX) *
            0.055;

        driftCurrentY +=
            (driftTargetY -
                driftCurrentY) *
            0.055;


        root.style.setProperty(
            "--sj-drift-x",
            `${driftCurrentX.toFixed(2)}px`
        );

        root.style.setProperty(
            "--sj-drift-y",
            `${driftCurrentY.toFixed(2)}px`
        );

    }


    if (
        premiumEffects
    ) {

        document.addEventListener(
            "pointermove",
            (event) => {

                driftTargetX =
                    (
                        event.clientX -
                        window.innerWidth / 2
                    ) * 0.008;

                driftTargetY =
                    (
                        event.clientY -
                        window.innerHeight / 2
                    ) * 0.008;


                if (
                    driftFrame
                ) {

                    return;

                }

                driftFrame =
                    requestAnimationFrame(
                        updateDrift
                    );

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       15 — KEYBOARD INTERACTION POLISH
    ===================================================== */

    document.addEventListener(
        "focusin",
        (event) => {

            const target =
                event.target.closest(
                    "a, button, input, textarea, select"
                );

            if (
                !target
            ) {

                return;

            }

            target.classList.add(
                "sj-keyboard-focus"
            );

        }
    );


    document.addEventListener(
        "focusout",
        (event) => {

            const target =
                event.target.closest(
                    "a, button, input, textarea, select"
                );

            if (
                !target
            ) {

                return;

            }

            target.classList.remove(
                "sj-keyboard-focus"
            );

        }
    );


    /* =====================================================
       16 — REMOVE FOCUS CLASS AFTER MOUSE USE
    ===================================================== */

    document.addEventListener(
        "pointerdown",
        () => {

            document
                .querySelectorAll(
                    ".sj-keyboard-focus"
                )
                .forEach(
                    (element) => {

                        element.classList.remove(
                            "sj-keyboard-focus"
                        );

                    }
                );

        },
        {
            passive: true
        }
    );


    /* =====================================================
       17 — SMART IMAGE LOADING
    ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(
            (image) => {

                /*
                   Keep hero images eager.
                   Everything else can be lazy.
                */

                const isHeroImage =
                    image.closest(
                        "#hero"
                    );

                if (
                    !isHeroImage &&
                    !image.hasAttribute(
                        "loading"
                    )
                ) {

                    image.loading =
                        "lazy";

                }


                if (
                    !image.hasAttribute(
                        "decoding"
                    )
                ) {

                    image.decoding =
                        "async";

                }

            }
        );


    /* =====================================================
       18 — VIDEO SMART PAUSE
    ===================================================== */

    const videos =
        document.querySelectorAll(
            "video"
        );


    if (
        videos.length
    ) {

        const videoObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            const video =
                                entry.target;

                            if (
                                !entry.isIntersecting
                            ) {

                                if (
                                    !video.paused
                                ) {

                                    video.dataset.sjAutoPaused =
                                        "true";

                                    video.pause();

                                }

                                return;

                            }


                            if (
                                video.dataset.sjAutoPaused ===
                                "true"
                            ) {

                                video
                                    .play()
                                    .catch(
                                        () => {}
                                    );

                                delete video.dataset.sjAutoPaused;

                            }

                        }
                    );

                },
                {
                    threshold: 0.1
                }
            );


        videos.forEach(
            (video) => {

                video.preload =
                    video.preload ||
                    "metadata";

                video.playsInline =
                    true;

                videoObserver.observe(
                    video
                );

            }
        );

    }


    /* =====================================================
       19 — PAGE VISIBILITY SAFETY
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                !document.hidden
            ) {

                return;

            }

            document
                .querySelectorAll(
                    "video"
                )
                .forEach(
                    (video) => {

                        if (
                            !video.paused
                        ) {

                            video.dataset.sjPagePaused =
                                "true";

                            video.pause();

                        }

                    }
                );

        }
    );


    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden
            ) {

                return;

            }

            document
                .querySelectorAll(
                    'video[data-sj-page-paused="true"]'
                )
                .forEach(
                    (video) => {

                        video
                            .play()
                            .catch(
                                () => {}
                            );

                        delete video.dataset.sjPagePaused;

                    }
                );

        }
    );


    /* =====================================================
       20 — ESCAPE SAFETY
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key !==
                "Escape"
            ) {

                return;

            }

            /*
               Don't interfere with
               existing Part 1–7 modal
               handlers.

               We only reset Part 8
               interaction states.
            */

            releasePress();

            state.currentInteractive =
                null;

            document
                .querySelectorAll(
                    ".sj-focus"
                )
                .forEach(
                    (element) => {

                        element.classList.remove(
                            "sj-focus"
                        );

                    }
                );

        }
    );


    /* =====================================================
       21 — RESIZE SAFE RESET
    ===================================================== */

    let resizeTimeout =
        null;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimeout
            );

            resizeTimeout =
                setTimeout(
                    () => {

                        state.pointerX =
                            Math.min(
                                state.pointerX,
                                window.innerWidth
                            );

                        state.pointerY =
                            Math.min(
                                state.pointerY,
                                window.innerHeight
                            );

                        state.currentInteractive =
                            null;

                    },
                    180
                );

        },
        {
            passive: true
        }
    );


    /* =====================================================
       22 — NETWORK STATE
    ===================================================== */

    function updateNetworkState() {

        body.dataset.network =
            navigator.onLine
                ? "online"
                : "offline";

    }


    window.addEventListener(
        "online",
        updateNetworkState
    );

    window.addEventListener(
        "offline",
        updateNetworkState
    );

    updateNetworkState();


    /* =====================================================
       23 — EXPERIENCE METADATA
    ===================================================== */

    root.dataset.sjExperience =
        "premium";

    root.dataset.sjMotion =
        reducedMotion
            ? "reduced"
            : "full";


    /* =====================================================
       24 — FINAL PART 8 REPORT
    ===================================================== */

    console.log(
        "%cPART 8 — PREMIUM EXPERIENCE ACTIVE",
        "color:#72249d;font-size:17px;font-weight:bold;"
    );

    console.log(
        "Micro-interactions: ready"
    );

    console.log(
        "Pointer engine: ready"
    );

    console.log(
        "Premium card lighting: ready"
    );

    console.log(
        "Ripple feedback: ready"
    );

    console.log(
        "Section transition feedback: ready"
    );

    console.log(
        "Smart media performance: ready"
    );

    console.log(
        `Performance mode: ${
            root.dataset.sjPerformance
        }`
    );

})();