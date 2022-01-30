void async function() {
resp = await fetch('http://localhost:3000');
txt = await resp.text();
document.getElementById('basestyle').textContent = txt;
//console.log(txt);
}()