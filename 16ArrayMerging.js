const arraySaya = ['🥕','🍇','🍉','🍒','🍓']
const arrayKamu = ['😎', '😶','🥰','😗','😙']

const arrayKita = arraySaya.concat(arrayKamu)
console.log(arrayKita)

for(list of arrayKita){
    console.log(list)
}

for(list in arrayKita){
    console.log(list)
}

arrayKita.map((value, index) => console.log(value, index))