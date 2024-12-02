for(let z = 0; z < 5; z++){
    console.log('data ke -', z)
}

// data ke - 1 -----------z = 2
// data ke - 2 -----------z = 3
// data ke - 3 -----------z = 4
// data ke - 4 -----------z = 5
// data ke - 5 -----------
// z=6 karena z sudah lebih dari sama dengan 5
// end of loop tidak akan masuk

console.log('----------------------------------------------')
//------------------------------------------------------------
//for

for(let i = 1; i <= 10; i++){
    if (i % 2 !== 0) console.log('data ke -', i)
}


console.log('----------------------------------------------')
//------------------------------------------------------------
//while

let x = 1
while(x <= 10){
    if (x % 2 !== 0){
    console.log('data ke -', x)
    }
    x++
}


console.log('----------------------------------------------')
//------------------------------------------------------------
//do while

let y = 1
do{
    if (y % 2 !== 0){
        console.log('data y ke -', y)
    }
    y++
}while (y <= 10)