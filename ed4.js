const express = require("express");
const app = express();

app.use(express.json()); // Untuk memproses JSON dari request body

// Endpoint untuk menghitung BMI
app.post("/hitung-bmi", (req, res) => {
    const { berat, tinggi } = req.body;

    // Menghitung BMI
    const bmi = berat / (tinggi * tinggi);

    // Menentukan kategori berdasarkan nilai BMI
    let kategori;
    if (bmi < 18.5) {
        kategori = "Berat badan kurang";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        kategori = "Berat badan normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        kategori = "Berat badan berlebih (Overweight)";
    } else {
        kategori = "Obesitas";
    }

    // Mengembalikan hasil dalam format JSON
    res.json({
        bmi: bmi.toFixed(2),
        kategori: kategori
    });
});

// Menjalankan server di port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});