
onload = () =>{
    document.body.classList.remove("container");
};
const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 4) + 's';
  heart.style.opacity = Math.random();

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 300);
setTimeout(() => {
  document.getElementById("popup").classList.add("show");
}, 7000);

function goNext() {
  window.location.href = "page2.html"; // second page
}
