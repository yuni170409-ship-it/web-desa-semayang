// === KONFIGURASI DATABASE GOOGLE SHEETS ===
const API_URL = "https://script.google.com/macros/s/AKfycbwYdSfOlIXd8gCdxybL-wsaFR4y3lQqyom2xJFtGZWJgzMEZ7jsqBE8mp8d403UyYr5/exec";

// === AMBIL DATA PROFIL DESA ===
async function ambilDataProfil() {
  try {
    const res = await fetch(`${API_URL}?sheet=profil`);
    const data = await res.json();
    tampilkanProfil(data);
  } catch (error) {
    console.error("Gagal ambil data profil:", error);
  }
}

function tampilkanProfil(data) {
  const container = document.getElementById("profil-desa");
  if (!container) return;
  
  container.innerHTML = "";
  data.forEach(item => {
    container.innerHTML += `
      <div class="profil-item">
        <strong>${item.judul}:</strong> ${item.isi}
      </div>
    `;
  });
}

// === AMBIL DATA GALERI ===
async function ambilDataGaleri() {
  try {
    const res = await fetch(`${API_URL}?sheet=galeri`);
    const data = await res.json();
    tampilkanGaleri(data);
  } catch (error) {
    console.error("Gagal ambil data galeri:", error);
  }
}

function tampilkanGaleri(data) {
  const container = document.getElementById("galeri-foto");
  if (!container) return;
  
  container.innerHTML = "";
  data.forEach(item => {
    container.innerHTML += `
      <div class="foto-item">
        <img src="${item.nama_file_foto}" alt="${item.judul}" loading="lazy">
        <p>${item.judul}</p>
      </div>
    `;
  });
}

// === AMBIL DATA POTENSI ===
async function ambilDataPotensi() {
  try {
    const res = await fetch(`${API_URL}?sheet=potensi`);
    const data = await res.json();
    tampilkanPotensi(data);
  } catch (error) {
    console.error("Gagal ambil data potensi:", error);
  }
}

function tampilkanPotensi(data) {
  const container = document.getElementById("potensi-list");
  if (!container) return;
  
  container.innerHTML = "";
  data.forEach(item => {
    container.innerHTML += `
      <div class="potensi-item">
        <h4>${item.judul}</h4>
        <p>${item.keterangan}</p>
      </div>
    `;
  });
}

// === AMBIL DATA BUDAYA ===
async function ambilDataBudaya() {
  try {
    const res = await fetch(`${API_URL}?sheet=budaya`);
    const data = await res.json();
    tampilkanBudaya(data);
  } catch (error) {
    console.error("Gagal ambil data budaya:", error);
  }
}

function tampilkanBudaya(data) {
  const container = document.getElementById("budaya-list");
  if (!container) return;
  
  container.innerHTML = "";
  data.forEach(item => {
    container.innerHTML += `
      <div class="budaya-item">
        <h4>${item.judul}</h4>
        <p>${item.keterangan}</p>
      </div>
    `;
  });
}

// === JALANKAN SEMUA SAAT HALAMAN DIBUKA ===
document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById("profil-desa")) ambilDataProfil();
  if (document.getElementById("galeri-foto")) ambilDataGaleri();
  if (document.getElementById("potensi-list")) ambilDataPotensi();
  if (document.getElementById("budaya-list")) ambilDataBudaya();
});