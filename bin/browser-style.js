window.addEventListener(
  'focus',
async function() {
  console.log('raised');
resp = await fetch('http://localhost:3000?s=style');
txt = await resp.text();
document.getElementById('basestyle').textContent = txt;
}
 ) 