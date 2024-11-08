import { SimpleGridTable } from './tabelLibrary.js';

const data = [
    { Nama: "Budi", Umur: 20, Kota: "Jakarta" },
    { Nama: "Siti", Umur: 22, Kota: "Bandung" },
    { Nama: "Andi", Umur: 25, Kota: "Surabaya" },
    { Nama: "Dewi", Umur: 19, Kota: "Medan" },
    { Nama: "Rizky", Umur: 24, Kota: "Yogyakarta" }
];

const columns = ["Nama", "Umur", "Kota"];

const table = new SimpleGridTable({
    columns: columns,
    data: data,
    containerId: "tabel-container"
});

table.render();
