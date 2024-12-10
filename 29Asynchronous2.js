const token = ~~[Math.random() * 12345678]

const pictures = ['1.jpg', '2.jpg', '3.jpg']

function login(username){
    console.log('sedang memvalidasi data')
    return new Promise((success, failed) => {
        setTimeout(() => {
            if(username != "FauzanZF") failed("sorry wrong data")
                success({token})
        }, 200)
    })
}

function getUser(token){
    console.log('processing apiKey now')
    return new Promise((success, failed) => {
        if(!token) failed("sorry wrong token")
        if(token)
            setTimeout(() => {
                success({apiKey: "key123"})
            }, 500)
    })
}

function getPictures(apiKey){
    console.log('processing pictures now')
    if(apiKey) 
    setTimeout(() => {
        return ({pic: pictures})
    }, 1500)
}

// const user = login('FauzanZF')
// console.log(user)
//tidak bisa langsung di console.log karena menggunakan promise

const user = login('FauzanZF') //hanya mengakses FauzanZF
user.then(function(response){
    const {token} = response
    getUser(token).then(function(response){
        console.log({response})
        const {apiKey} = response
        console.log(apiKey)
    }).catch(err => console.log(err))
}).catch(err => console.log(err))


