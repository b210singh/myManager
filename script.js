const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

let yesScale = 1;
let noTexts = [
  "Are you sure? 😅",
  "Think again... 🤨",
  "Be honest 👀",
  "Last chance 😄",
  "This button seems broken 🤔"
];

let index = 0;

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  noBtn.innerText = noTexts[index % noTexts.length];
  index++;

  yesScale += 0.1;
  yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="success">
      Knew it 😎👏 <br>
      You are the BEST.
    </div>
  `;
});
