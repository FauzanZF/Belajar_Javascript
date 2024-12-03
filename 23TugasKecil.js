const x = [3, 5, 12];
//loop data
//total nilai 20
//menggunakan for, while , do while

let totalFor = 0;
for (let i =0; i < x.length; i++){
    console.log('data ke -', x[i]);
    totalFor += x[i];
}
console.log('Total nilai dengan for:', totalFor);


console.log('----------------------------------------------')
//------------------------------------------------------------


let totalWhile = 0;
j = 0;
while (j < x.length){
    console.log('data ke -', x[j]);
    totalWhile += x[j];
    j++;
}
console.log('Total nilai dengan while:', totalWhile);


console.log('----------------------------------------------')
//------------------------------------------------------------


let totalDoWhile = 0;
let k = 0;
do{
    console.log('data ke-', x[k]);
    totalDoWhile += x[k];
    k++;
}while(k < x.length);
console.log('Total nilai dengan do while:', totalDoWhile);