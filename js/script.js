const tanah = document.querySelectorAll('.tanah');
const cacing = document.querySelectorAll('.cacing');
const papanScore = document.querySelector('.papan-score');
const pop = document.querySelector('#pop');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanCacing() {
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(400, 1000);
  tRandom.classList.add('muncul');

  setTimeout(() => {
    tRandom.classList.remove('muncul');
    if (!selesai) {
        munculkanCacing();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanScore.textContent = 0;
  munculkanCacing();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function ambil() {
  skor++;
  this.parentNode.classList.remove('muncul');
  pop.play();
  papanScore.textContent = skor;
}

cacing.forEach(t => {
  t.addEventListener('click', ambil);
});