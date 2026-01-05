(function(){
  const timeEl = document.getElementById('time');
  const dateEl = document.getElementById('date');

  function pad(n){ return n.toString().padStart(2,'0'); }

  function render(now){
    const hour = now.getHours();
    const min  = now.getMinutes();
    const sec  = now.getSeconds();

    const html = `${pad(hour)}<span>:</span>${pad(min)}<span>:</span>${pad(sec)}`;
    timeEl.innerHTML = html;

    timeEl.setAttribute('datetime', now.toISOString());

    const localeDate = now.toLocaleDateString('ja-JP', {
      year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short'
    });
    dateEl.textContent = localeDate;
  }

  function tick(){
    const now = new Date();
    render(now);
    const delay = 1000 - now.getMilliseconds();
    setTimeout(tick, delay);
  }

  document.addEventListener('DOMContentLoaded', tick);
})();
