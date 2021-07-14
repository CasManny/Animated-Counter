const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = parseInt(counter.getAttribute("data-target"));
        const count = parseInt(counter.textContent);

        const inc = target / speed;

        if(count < target) {
            counter.textContent = Math.floor(count + inc)
            setTimeout(updateCount,1)
        } else {
            counter.textContent = target;
        }


    }
    updateCount();
})

