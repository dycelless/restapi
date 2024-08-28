const express = require("express");
const app = express();

app.use(express.json()); // Untuk memproses JSON dari request body

// Endpoint untuk Kubus
app.post('/kubus', (req, res) => {
    const sisi = req.body.sisi;
    const volume = Math.pow(sisi, 3);
    const luasPermukaan = 6 * Math.pow(sisi, 2);

    res.json({
        volume: volume,
        luas_permukaan: luasPermukaan
    });
});

// Endpoint untuk Balok
app.post('/balok', (req, res) => {
    const { panjang, lebar, tinggi } = req.body;
    const volume = panjang * lebar * tinggi;
    const luasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);

    res.json({
        volume: volume,
        luas_permukaan: luasPermukaan
    });
});

// Endpoint untuk Silinder
app.post('/silinder', (req, res) => {
    const { jari_jari, tinggi } = req.body;
    const volume = Math.PI * Math.pow(jari_jari, 2) * tinggi;
    const luasPermukaan = 2 * Math.PI * jari_jari * (jari_jari + tinggi);

    res.json({
        volume: volume,
        luas_permukaan: luasPermukaan
    });
});

// Endpoint untuk Bola
app.post('/bola', (req, res) => {
    const jari_jari = req.body.jari_jari;
    const volume = (4 / 3) * Math.PI * Math.pow(jari_jari, 3);
    const luasPermukaan = 4 * Math.PI * Math.pow(jari_jari, 2);

    res.json({
        volume: volume,
        luas_permukaan: luasPermukaan
    });
});

// Menjalankan server di port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});