// Buat aplikasi penghitungan surat suara untuk pemilihan Presiden.
// Dengan ketentuan :
// Tentukan jumlah yang mengikuti surat suara
// Tentukan 3 Calon Presedin
// Masukan suara untuk ketiga CaPress
// Hitung dalam satuan presentase
// Jika hasil lebih dari 50% maka menang dalam satu putaran
// Jika kurang masuk tahap putaran ke dua



// Menentukan jumlah yang mengikuti surat suara
let suratSuara = 1000000;

// Menentukan ketiga Calon Presiden
let calonPresiden = [
  {
    nama: "Anies Baswedan",
    noCoblos: 1,
    namaWakil: "Muhaimin Iskandar",
    jmlSuara: null,
  },
  {
    nama: "Prabowo Subianto",
    noCoblos: 2,
    namaWakil: "Gibran Rakabuming Raka",
    jmlSuara: null,
  },
  {
    nama: "Ganjar Pranowo",
    noCoblos: 3,
    namaWakil: "Mahfud MD",
    jmlSuara: null,
  },
];


// Masukkan suara untuk ketiga Calon Presiden
// Suara Calon Presiden Pertama:
calonPresiden[0].jmlSuara = 350000;
// Suara Calon Presiden Kedua:
calonPresiden[1].jmlSuara = 550000;
// Suara Calon Presiden Ketiga:
calonPresiden[2].jmlSuara = 100000;


//Hitung Total Suara Sah
let totalSuaraSah = null
for (let i = 0; i < calonPresiden.length; i++) {
  totalSuaraSah += calonPresiden[i].jmlSuara;
}


// Hitung persentase suara untuk setiap calon presiden
for (let i = 0; i < calonPresiden.length; i++) {
  calonPresiden[i].persentaseSuara = (calonPresiden[i].jmlSuara / totalSuaraSah) * 100;
}


// Periksa pemenang dalam satu putaran
let pemenangSatuPutaran = null;

for (let i = 0; i < calonPresiden.length; i++) {
  if (calonPresiden[i].persentaseSuara > 50) {
    pemenangSatuPutaran = calonPresiden[i].nama;
    break;
  }
}

if (pemenangSatuPutaran) {
  console.log(pemenangSatuPutaran + " menang dalam satu putaran");
} else {
  console.log("Masuk tahap putaran kedua");
}
