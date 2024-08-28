const express = require("express");
const app = express();

app.use(express.json()); // Untuk memproses JSON dari request body

// Endpoint untuk mengonversi Decimal ke Biner
app.post("/decimal-ke-biner", (req, res) => {
    const decimal = parseInt(req.body.decimal);
    const biner = decimal.toString(2);

    res.json({
        decimal: decimal,
        biner: biner
    });
});

// Endpoint untuk mengonversi Biner ke Decimal
app.post("/biner-ke-decimal", (req, res) => {
    const biner = req.body.biner;
    const decimal = parseInt(biner, 2);

    res.json({
        biner: biner,
        decimal: decimal
    });
});

// Endpoint untuk mengonversi Decimal ke Octal
app.post("/decimal-ke-octal", (req, res) => {
    const decimal = parseInt(req.body.decimal);
    const octal = decimal.toString(8);

    res.json({
        decimal: decimal,
        octal: octal
    });
});

// Endpoint untuk mengonversi Hexadecimal ke Decimal
app.post("/hexadecimal-ke-decimal", (req, res) => {
    const hexadecimal = req.body.hexadecimal;
    const decimal = parseInt(hexadecimal, 16);

    res.json({
        hexadecimal: hexadecimal,
        decimal: decimal
    });
});

// Menjalankan server di port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});