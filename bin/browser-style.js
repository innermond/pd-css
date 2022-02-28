void async function() {
resp = await fetch('http://localhost:3000?s=style');
txt = await resp.text();
document.getElementById('basestyle').textContent = txt;
}()
