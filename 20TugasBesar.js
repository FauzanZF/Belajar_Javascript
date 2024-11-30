// 1.membuat perhitungan rumus
// -luas lingkaran
// -luas segitiga
// -luas persegi panjang

// 2.menghitung total gaji kaaryawan
// -nama kaaryawan
// -gaji perhari
// -jumlah hari masuk kerja


function luasLingkaran(r){
    return Math.PI * r * r
}

function luasSegitiga(a, t){
    return a * t / 2
}

function luasPersegiPanjang(p, l){
    return p * l
}

function totalGaji(nama, gaji, hariKerja){
    return ('gaji untuk', nama, gaji * hariKerja)
}

//---------------------------------------------

console.log(luasLingkaran(7))
console.log(luasSegitiga(5, 10))
console.log(luasPersegiPanjang(5, 10))
console.log(totalGaji('Fauzan', 100000, 30))
console.log(totalGaji('Malik', 200000, 30))