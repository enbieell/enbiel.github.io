// ====== SAPAAN BERDASARKAN WAKTU ======
const jam = new Date().getHours();
let sapaan = "Selamat belajar coding!";

if (jam < 12) sapaan = "Selamat pagi, semangat coding! 🌅";
else if (jam < 18) sapaan = "Selamat siang, terus eksplor! ☀️";
else sapaan = "Selamat malam, jangan lupa istirahat! 🌙";

console.log(sapaan);

// Tambahkan ke halaman
const header = document.querySelector("header");
const pesanSapaan = document.createElement("p");
pesanSapaan.textContent = sapaan;
pesanSapaan.style.color = "#8e8e93";
pesanSapaan.style.fontStyle = "italic";
header.appendChild(pesanSapaan);

// ====== GUEST BOOK SEDERHANA ======
let messages = [];

// Ambil data dari Local Storage saat halaman dimuat
if (localStorage.getItem("guestbook")) {
    messages = JSON.parse(localStorage.getItem("guestbook"));
} else {
    // Data default jika belum ada
    messages = [
        { nama: "Admin", pesan: "Selamat datang di website saya! 🚀" }
    ];
    localStorage.setItem("guestbook", JSON.stringify(messages));
}

// Fungsi untuk menampilkan pesan
function tampilkanPesan() {
    const container = document.getElementById("daftar-pesan");
    if (!container) return;

    container.innerHTML = "";

    if (messages.length === 0) {
        container.innerHTML = "<p style='color: #8e8e93;'>Belum ada pesan. Jadilah yang pertama!</p>";
        return;
    }

    // Tampilkan pesan dari yang terbaru (reverse)
    const pesanTerbaru = [...messages].reverse();

    pesanTerbaru.forEach((item) => {
        const div = document.createElement("div");
        div.style.cssText = `
            background: #f5f5f7;
            padding: 12px 15px;
            margin-bottom: 10px;
            border-radius: 8px;
            border-left: 4px solid #636366;
        `;

        div.innerHTML = `
            <strong style="color: #1c1c1e;">${item.nama}</strong>
            <span style="color: #8e8e93; font-size: 0.8em; margin-left: 10px;">
                ${new Date().toLocaleDateString('id-ID')}
            </span>
            <p style="margin: 5px 0 0 0; color: #3a3a3c;">${item.pesan}</p>
        `;
        container.appendChild(div);
    });
}

// Fungsi untuk menambah pesan baru
function tambahPesan(event) {
    event.preventDefault(); // Mencegah reload halaman

    const nama = document.getElementById("nama-tamu").value.trim();
    const pesan = document.getElementById("pesan-tamu").value.trim();

    if (!nama || !pesan) {
        alert("Mohon isi nama dan pesan!");
        return;
    }

    // Tambahkan ke array
    messages.push({ nama, pesan });

    // Simpan ke Local Storage
    localStorage.setItem("guestbook", JSON.stringify(messages));

    // Kosongkan form
    document.getElementById("nama-tamu").value = "";
    document.getElementById("pesan-tamu").value = "";

    // Tampilkan ulang pesan
    tampilkanPesan();

    // Feedback
    alert("Terima kasih sudah meninggalkan pesan! 🙏");
}

// Jalankan saat halaman siap
document.addEventListener("DOMContentLoaded", function() {
    tampilkanPesan();

    // Hubungkan form dengan fungsi tambahPesan
    const form = document.getElementById("form-tamu");
    if (form) {
        form.addEventListener("submit", tambahPesan);
    }
});