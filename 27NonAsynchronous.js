const token = ~~[Math.random() * 12345678]

const pictures = ['1.jpg', '2.jpg', '3.jpg']

function login(username){
    return{token, username}
}

function getUser(token){
    return {apiKey: "key123"}
}

function getPictures(apiKey){
    if(apiKey) return pictures
}

const user = login('FauzanZF')
console.log(user.token)

const {apiKey} = getUser(user.token)
console.log(apiKey)

const getUserPicture = getPictures(apiKey)
console.log(getUserPicture)