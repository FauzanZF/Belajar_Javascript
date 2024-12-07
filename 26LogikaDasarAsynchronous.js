function satu(){
    console.log('satu')
}
function dua(){
    console.log('dua mau di eksekusi')
    setTimeout(() => {
        console.log('dua');
    }, 3000)

}
function tiga(){
    console.log('tiga')
}

satu()
dua()
tiga()

