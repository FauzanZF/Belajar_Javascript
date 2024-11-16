//tugas
//buat button 2 ketika di klik muncul di body
//saat cursor keluar btn 2 text berubah warna

const body = document.body


function clickButton2(){
    btn2.style.background = 'reds'
    const newText = document.createElement('p')
    newText.textContent = 'Halo Bung'
    body.append(newText)
}

function warnaOri(){
    btn2.textContent = 'AWOKWOKWOKWOKW'
    
    body.style.color = 'red'
}

function balikanWarna(){
    btn2.textContent = 'klik saya 2'

    body.style.color='black'
}