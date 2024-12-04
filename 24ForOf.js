const buahBuahan= ['apel', 'mangga', 'jeruk'];

for(let buah of buahBuahan){
    console.log(buah);
}

for(let buah in buahBuahan){
    console.log(buah);
}

buahBuahan.forEach((buah, index) => {
    console.log(buah, index);
})

buahBuahan.map((buah, index) => {
    console.log(buah, index +1);
})
