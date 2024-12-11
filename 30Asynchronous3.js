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
    return new Promise((success, failed) => {
        if(!apiKey) failed("sorry wrong apiKey")
            setTimeout(() => {
                success ({pic: pictures})
            }, 1500)
    })
    
}

// const user = login('FauzanZF')
// console.log(user)
//tidak bisa langsung di console.log karena menggunakan promise

async function UserDisplay(){
    try{
        
    const {token} = await login('FauzanZF')
    const {apiKey} = await getUser(token)
    const {pic} = await getPictures(apiKey)

    console.log(`
        token anda adalah: ${token}
        apikey anda adalah: ${apiKey}
        picture anda adalah: ${pic}`
    )
    }catch(err){
        console.log(err)
    }
    
}

UserDisplay()