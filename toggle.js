document.addEventListener('DOMContentLoaded', () => {
  const up = document.getElementById('luxian-up');
  const down = document.getElementById('luxian-down');

  up.addEventListener('click', () => {
    up.style.display = 'none';
    down.style.display = 'block';
  })
  down.addEventListener('click', () => {
    down.style.display = 'none';
    up.style.display = 'block';
  })
})
