console.log(document.title)

document.title = "Fauzan ZF"

console.log(document.title)

//--------------------------------------------------------------------------------------------

const body = document.body
body.append("Hello World")

//--------------------------------------------------------------------------------------------

const h1 = document.createElement("h1")
h1.textContent = "ini H1 " //bisa pakai innerText dan innerHTML
body.append(h1)

//--------------------------------------------------------------------------------------------
// innerHTML adalah properti dalam JavaScript yang digunakan untuk mengatur atau mendapatkan konten HTML dalam suatu elemen. Dengan innerHTML, Anda dapat: Mengubah teks, Menambahkan atau menghapus elemen, Memanipulasi struktur HTML suatu elemen secara dinamis, Menambahkan konten baru ke konten elemen yang sudah ada.
const namaSaya = document.createElement("p")
namaSaya.innerHTML = "<marquee> Fauzan ZF </marquee>"
body.append(namaSaya)

//--------------------------------------------------------------------------------------------

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

btn1.style.border = "none"
btn1.style.padding = '1rem'
btn1.style.fontSize = '1em'
btn1.style.background = '#8A9A5B'

function clickButton1(){
    btn1.style.background = 'aqua'
    const newText = document.createElement('p')
    newText.textContent = 'Halo Bung'
    body.append(newText)
}

function ubahText(){
    btn1.textContent = 'AWOKWOKWOKWOKW'
}

function oriText(){
    btn1.textContent = 'klik saya 1'
}