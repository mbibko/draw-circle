const wrapper = document.body;

const MAX_STEP = 400;

let num = 0;

const tick = (el, step) => {
    el.style.width = step * 1 + "px";
    el.style.height = step * 1 + "px";
    el.style.opacity = 1 - step / MAX_STEP;
};

const draw = (x, y, num) => {
    let step = 0;
    const el = document.createElement("div");
    el.classList.add("el");
    el.textContent = num;
    el.style.left = x + "px";
    el.style.top = y + "px";

    tick(el, step);

    const interval = setInterval(() => {
        if (step > MAX_STEP) {
            clearInterval(interval);
            el.remove();
        }
        tick(el, step);
        step++;
    }, 10);
    wrapper.appendChild(el);
};

wrapper.addEventListener("click", (e) => {
    const [x, y] = [e.pageX, e.pageY];
    draw(x, y, num++);
});
