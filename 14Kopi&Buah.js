//Cara yang salah ketika membuat backUp array
const arraySaya = ['🥕','🍇','🍉','🍒','🍓']//original
const newArraySaya = arraySaya//kw

newArraySaya[0] = '😎'

console.log({arraySaya})
console.log({newArraySaya})

//-------------------------------------------------------------------
//Cara yang benar ketika membuat backUp array

const arrayKamu = ['🍏','🍌','🍒','🍉','🍓']//original
const newArrayKamu = [...arrayKamu] //dapat menggunakan [...arrayKamu] atau arrayKamu.slice()  atau Array.from(arrayKamu) atau JSON.parse(JSON.stringify(arrayKamu))

newArrayKamu[0] = '😎'

console.log(arrayKamu)
console.log(newArrayKamu)