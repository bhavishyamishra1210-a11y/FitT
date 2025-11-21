[001] const scrollRevealOption = { distance: "50px", origin: "bottom", duration: 1000 };
[002]
[003] ScrollReveal().reveal(".header__img img", { ...scrollRevealOption, origin: "left" });
[004] ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 500 });
[005] ScrollReveal().reveal(".header__content .section__description", { ...scrollRevealOption, delay: 1000 });
[006] ScrollReveal().reveal(".header__links", { ...scrollRevealOption, delay: 1500 });
[007]
[008] const workout = document.querySelector(".workout__images");
[009] if (workout) {
[010]   const workoutContent = Array.from(workout.children);
[011]   workoutContent.forEach((item) => {
[012]     const duplicateNode = item.cloneNode(true);
[013]     duplicateNode.setAttribute("aria-hidden", true);
[014]     workout.appendChild(duplicateNode);
[015]   });
[016] }
[017]
[018] ScrollReveal().reveal(".workout__content .section__header", { ...scrollRevealOption });
[019] ScrollReveal().reveal(".workout__content .section__description", { ...scrollRevealOption, delay: 500 });
[020]
[021] ScrollReveal().reveal(".story__image img", { ...scrollRevealOption, origin: "left" });
[022] ScrollReveal().reveal(".story__content .section__header", { ...scrollRevealOption, delay: 500 });
[023] ScrollReveal().reveal(".story__content .section__description", { ...scrollRevealOption, delay: 1000, interval: 500 });
[024] ScrollReveal().reveal(".story__link", { ...scrollRevealOption, delay: 2000 });
[025]
[026] ScrollReveal().reveal(".feature__grid li", { ...scrollRevealOption, interval: 500 });
[027] ScrollReveal().reveal(".download__image img", { ...scrollRevealOption });
[028] ScrollReveal().reveal(".membership__content .section__header", { ...scrollRevealOption });
[029] ScrollReveal().reveal(".membership__content .section__description", { ...scrollRevealOption, delay: 500 });
[030] ScrollReveal().reveal(".membership__btn", { ...scrollRevealOption, delay: 1000 });

