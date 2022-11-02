const wrapper = document.querySelector(".wrapper");

const MAX_STEP = 200;
const SPEED = 5;

let num = 0;
const els = [];

const animate = (el, step) => {
    el.style.width = step * 1 + "px";
    el.style.height = step * 1 + "px";
    el.style.opacity = 1 - step / MAX_STEP;
};

const draw = (x, y, num) => {
    const el = document.createElement("div");
    el.classList.add("el");
    el.textContent = num;
    el.style.left = x + "px";
    el.style.top = y + "px";

    els.push([el, performance.now()]);
    console.log(els[0]);
    wrapper.appendChild(el);
};

wrapper.addEventListener("click", (e) => {
    const [x, y] = [e.offsetX, e.offsetY];
    draw(x, y, num++);
});

const tick = (timestamp) => {
    els.map((item, index) => {
        const [el, createdTime] = item;
        const elapsed = timestamp - createdTime;
        const count = Math.min(0.1 * elapsed * SPEED, MAX_STEP);
        if (count === MAX_STEP) {
            el.remove();
            els.splice(index, 1);
        }
        animate(el, count);
    });
};

const loop = () => {
    window.requestAnimationFrame((timestamp) => {
        tick(timestamp);
        loop();
    });
};
loop();
