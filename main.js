import './style.css'
import './style.css'
const img = document.getElementById("tu");
const loading = document.getElementById('loading');
const loadingMsg = document.getElementById('loading-msg');
img.onload = function () {
  loading.style.display = 'none';
  loadingMsg.style.display = 'none';
  img.style.display = 'block';
}
window.onload = function () {
  getURL();
  document.getElementById("changeBtn").onclick = getURL;
}

async function getURL() {
  loading.style.display = 'block';
  loadingMsg.style.display = 'block';
  img.style.display = 'none';
  fetch(import.meta.env.VITE_API)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(res => {
      img.src = res;
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}