let poem = [];
const API_URL = 'https://<tu-backend-runway-url>/api/verses';

document.getElementById('verseForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const verse = document.getElementById('verseInput').value;
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: verse })
  });
  const data = await res.json();
  poem.unshift(data.text);
  document.getElementById('verseInput').value = '';
  renderPoem();
});

async function loadPoem() {
  const res = await fetch(API_URL);
  const data = await res.json();
  poem = data.map(v => v.text);
  renderPoem();
}

function renderPoem() {
  document.getElementById('poem').innerHTML = poem.map(v => `<p>${v}</p>`).join('');
}

window.setup = function () {
  const canvas = createCanvas(600, 200);
  canvas.parent('canvas-container');
  background(255);
  fill(50);
  textAlign(CENTER, CENTER);
  textSize(24);
  text('Bienvenid@ a Acróstico', width / 2, height / 2);
  loadPoem();
};
