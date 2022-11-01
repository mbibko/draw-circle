const el = document.querySelector(".el");
const body = document.body;

const MAX_STEP = 50;

const draw = (x, y) => {
    let step = 0;
    const interval = setInterval(() => {
        if (step > MAX_STEP) {
            clearInterval(interval);
        }
        el.style.left = x + "px";
        el.style.top = y + "px";
        el.style.width = step * 1 + "px";
        el.style.height = step * 1 + "px";
        el.style.opacity = 1 - step / MAX_STEP;
        step++;
    }, 5);
};

body.addEventListener("click", (e) => {
    const [x, y] = [e.pageX, e.pageY];
    draw(x, y);
});
