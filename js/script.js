const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');

btn1.addEventListener('click', () => {
  document.getElementById('multi-photo').classList.remove('visually-hidden');
  document.getElementById('single-photo').classList.add('visually-hidden');
});
btn2.addEventListener('click', () => {
  document.getElementById('multi-photo').classList.remove('visually-hidden');
  document.getElementById('single-photo').classList.add('visually-hidden');
});
btn3.addEventListener('click', () => {
  document.getElementById('multi-photo').classList.add('visually-hidden');
  document.getElementById('single-photo').classList.remove('visually-hidden');
});
btn4.addEventListener('click', () => {
  document.getElementById('multi-photo').classList.add('visually-hidden');
  document.getElementById('single-photo').classList.remove('visually-hidden');
});