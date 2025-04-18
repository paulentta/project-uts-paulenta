function toggleMenu() {
    if (window.innerWidth < 800) {
       const menu = document.getElementById('navbar');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }
}

function toggleLayanan() {
  const layananValue = document.getElementById("layanan").value;
  const layananBiasa = document.getElementById("layananBiasa");
  const layananPaket = document.getElementById("layananPaket");

  if (layananValue === "biasa") {
      layananBiasa.style.display = "block";
      layananPaket.style.display = "none";
  } else if (layananValue === "paket") {
      layananBiasa.style.display = "none";
      layananPaket.style.display = "block";
  } else {
      layananBiasa.style.display = "none";
      layananPaket.style.display = "none";
  }
}

function kirimPesanWA() {
  var nama = document.getElementById("nama").value;
  var hp = document.getElementById("hp").value;
  var email = document.getElementById("email").value;
  var layanan = document.getElementById("layanan").value;
  var layananBiasa = document.getElementById("layananBiasaSelect") ? document.getElementById("layananBiasaSelect").value : '';
  var paket = document.getElementById("paketSelect") ? document.getElementById("paketSelect").value : '';
  var jumlahPax = document.getElementById("jumlahPax") ? document.getElementById("jumlahPax").value : '';
  var tanggal = document.getElementById("tanggal").value;

  var pesan = "Hai kak! Mau bertanya/Pesan:\n";
  pesan += "Nama Lengkap: " + nama + "\n";
  pesan += "Nomor Handphone: " + hp + "\n";
  pesan += "Email: " + email + "\n";
  pesan += "Tipe Layanan: " + layanan + "\n";
  
  if (layanan === 'biasa') {
      pesan += "Layanan Biasa: " + layananBiasa + "\n";
  } else if (layanan === 'paket') {
      pesan += "Paket Wisata: " + paket + "\n";
      pesan += "Jumlah Orang: " + jumlahPax + "\n";
  }
  
  pesan += "Tanggal: " + tanggal + "\n";

  
  var nomorWA = "6282252736916"; 
  var url = "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan);


  window.open(url, "_blank");

  return false; 
}
