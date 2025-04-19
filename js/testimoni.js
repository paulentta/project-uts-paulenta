
//Overlay
function toggleMenu() {
  if (window.innerWidth < 800) {
    const menu = document.getElementById('navbar');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }
}

//Form Testimoni
const form = document.getElementById("formTestimoni");
const daftar = document.getElementById("daftarTestimoni");

// Dummy testimoni
const dummy = [
  { nama: "Andi", tanggal: "2025-01-05", pesan: "Liburan ke Danau Toba sangat berkesan, pemandangannya luar biasa!" },
  { nama: "Sinta", tanggal: "2025-01-10", pesan: "Pengalaman naik yacht keliling danau sangat menyenangkan!" },
  { nama: "Budi", tanggal: "2025-01-12", pesan: "Wisata dan kuliner khas Batak bikin nagih!" },
  { nama: "Dewi", tanggal: "2025-02-03", pesan: "Pelayanan ramah dan tempatnya bersih, suka banget!" },
  { nama: "Rina", tanggal: "2025-02-14", pesan: "Keren banget untuk healing dan foto-foto!" },
  { nama: "Rizal", tanggal: "2025-03-01", pesan: "Saya suka dengan jadwal tur yang teratur dan tepat waktu." },
  { nama: "Tari", tanggal: "2025-03-15", pesan: "Akhirnya bisa liat Danau Toba langsung, luar biasa indah!" },
  { nama: "Galih", tanggal: "2025-03-25", pesan: "Sangat direkomendasikan buat keluarga, lengkap dan seru!" }
];

function cekIsiAwal() {
  if (!localStorage.getItem("testimoni")) {
    localStorage.setItem("testimoni", JSON.stringify(dummy));
  }
}


function ambilTestimoni() {
  return JSON.parse(localStorage.getItem("testimoni")) || [];
}


function simpanTestimoni(data) {
  const sekarang = ambilTestimoni();
  sekarang.push(data);
  localStorage.setItem("testimoni", JSON.stringify(sekarang));
}

function tampilkanTestimoni() {
  const data = ambilTestimoni();
  daftar.innerHTML = "";
  data.slice().reverse().forEach(t => {
    const card = document.createElement("div");
    card.classList.add("testimoni-card");
    card.innerHTML = `
      <h5>${t.nama}</h5>
      <small class="text-muted">Tanggal Kunjungan: ${t.tanggal || '-'}</small>
      <p>${t.pesan}</p>
    `;
    daftar.appendChild(card);
  });
}


form.addEventListener("submit", function(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const pesan = document.getElementById("pesan").value;

  simpanTestimoni({ nama, tanggal, pesan });
  form.reset();
  tampilkanTestimoni();
});


cekIsiAwal();
tampilkanTestimoni();
