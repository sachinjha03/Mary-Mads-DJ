let box = document.querySelector(".landing-section")
let aboutBox = document.querySelector(".about-section")
let colors = ["#7ED957","#FF66C4","#5CE1E6","322514","#d9a5b3","#c6d7eb","#8a307f"];
function mouseTrail(e){
    let size = Math.random()*20+"px"
    let x = e.clientX
    let y = e.clientY
    let star = document.createElement("div");
    star.className = "star"
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    star.style.background = randomColor;
    console.log(`x = ${x} and y = ${y}`);
    star.style.top = y+"px";
    star.style.left = x+"px";
    star.style.width = size;
    star.style.height = size;
    setTimeout(() => {
        star.remove()
    }, 200);
    box.appendChild(star)
}
box.addEventListener("mousemove", mouseTrail )
aboutBox.addEventListener("mousemove", (e) => {
    let size = Math.random()*20+"px"
    let x = e.clientX
    let y = e.clientY
    let star = document.createElement("div");
    star.className = "star"
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    star.style.background = randomColor;
    console.log(`x = ${x} and y = ${y}`);
    star.style.top = y+"px";
    star.style.left = x+"px";
    star.style.width = size;
    star.style.height = size;
    setTimeout(() => {
        star.remove()
    }, 200);
    aboutBox.appendChild(star)
})