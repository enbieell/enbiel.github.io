// Contoh: sapa berdasarkan waktu
const jam = new Date().getHours();
let sapaan = "Selamat belajar coding!";

if (jam < 12) sapaan = "Selamat pagi, semangat coding!";
else if (jam < 18) sapaan = "Selamat siang, terus eksplor!";
else sapaan = "Selamat malam, jangan lupa istirahat.";

console.log(sapaan);

// Tambahkan ke halaman
const header = document.querySelector("header");
const pesan = document.createElement("p");
pesan.textContent = sapaan;
header.appendChild(pesan);