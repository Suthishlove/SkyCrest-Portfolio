
  const counters = document.querySelectorAll(".counter");
  let started = false;

  window.addEventListener("scroll", () => {
    const section = document.querySelector(".about"); // or stats section
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight && !started) {
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = target / 100;

        const updateCount = () => {
          if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 30);
          } else {
            counter.innerText = target + "+";
          }
        };
        updateCount();
      });
      started = true;
    }
  });
