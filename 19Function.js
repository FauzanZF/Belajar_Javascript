function addName(fullname){
    return fullname
}

alert(addName('FauzanZF'))

//---------------------------------------------

function addAge(age){
    console.log(age)
}

addAge(19)

//---------------------------------------------

function tambahNama(firstname, lastname){
    console.log('namadepan=' , firstname, 'nama belakang = ', lastname)
}

tambahNama('Fauzan', 'Zuzuzu')

//---------------------------------------------

function tambahNama2(){
    for (let i =0; i < arguments.length; i++){
        console.log('nama lengkap: ', arguments[i])
    }
}

tambahNama2('Fauzan', 'Zuzuzu Zazaza', 'Stardenburdenhardenbark', 'Terma incrid')

//---------------------------------------------

function randomize(){
    const randomNumber = ~~(Math.random() * 1000)
    if (randomNumber> 200){
        console.log('wow lebih dari 200', randomNumber)
    }else{
        console.log(randomNumber)
    }
}

randomize()