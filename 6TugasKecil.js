//  tugas 
// 1.promp untuk mengetahui saldo akhir apa yang diinputkan User
// 2.menentukan hari dari tanggal sekarang 

let hari = new Date().getDay()
namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']

let saldoAwal = Number(prompt('masukkan saldo awal anda'))
let saldoTambahan = Number(prompt('masukkan saldo tambahan anda'))
saldoAkhir = saldoAwal + saldoTambahan
alert(`hari ini hari ${namaHari[hari]} dan saldo akhir anda adalah ${saldoAkhir}`)