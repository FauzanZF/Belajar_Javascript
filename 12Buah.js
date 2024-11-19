const arraySaya = ['🍏','🍐','🍑','🍒','🍓']
const apple = arraySaya.includes('🍏') //true
console.log(apple)
const posisiApple = arraySaya.indexOf('🍏') //0
console.log(posisiApple)

const banana = arraySaya.includes('🍌') //false
console.log(banana)

if (apple){
    console.log(`buah apple ada di index ke - ${posisiApple}`)
    const indexBefore = posisiApple -1
    const indexAfter = posisiApple +1
    const before = arraySaya[indexBefore]
    const after = arraySaya[indexAfter]
    console.log(`posisi buah sebelum apple adalah ${before} dan buah setelah apple adalah ${after}`)

    const buahAwal = arraySaya[0]
    console.log(`buah yang awal adalah ${buahAwal}`)
    const buahAkhir = arraySaya[arraySaya.length -1]
    console.log(`buah yang akhir adalalah ${buahAkhir}`)

}else{
    console.log('buah apple tidak ada')
} 