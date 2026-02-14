// Ambil tombol submit
const submitBtn = document.querySelector("button[type='submit']");

// Event ketika tombol ditekan
submitBtn.addEventListener("click", function (event) {
    event.preventDefault(); // cegah reload halaman

    // Ambil nilai input
    const nama = document.getElementById("inputNama").value;
    const tanggal = document.getElementById("tanngalLahir").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value;
    const pesan = document.getElementById("pesan").value;

    // Ambil waktu saat ini
    const waktuSekarang = new Date().toString(); // format panjang seperti di contoh

    // Masukkan ke kolom Data Terkirim
    document.getElementById("currentTime").textContent = "Current time: " + waktuSekarang;
    document.getElementById("outputNama").textContent = "Nama: " + nama;
    document.getElementById("outputTanggal").textContent = "Tanggal Lahir: " + tanggal;
    document.getElementById("outputGender").textContent = "Jenis Kelamin: " + (gender || "Belum dipilih");
    document.getElementById("outputPesan").textContent = "Pesan: " + pesan;

    // Pastikan current time muncul paling atas
    const dataBox = document.querySelector(".border.bg-white");
    if (dataBox) {
        dataBox.prepend(document.getElementById("currentTime"));
    }
});