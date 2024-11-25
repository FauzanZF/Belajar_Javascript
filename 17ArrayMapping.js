const datas = [
    {
        name : 'fauzan',
        stack : 'web',
        age : 19,
    },
    {
        name : 'Malik',
        stack : 'app',
        age : 20,
    },
    {
        name : 'kharawita',
        stack : 'app',
        age : 23,
    },
    {
        name : 'khalid',
        stack : 'web',
        age : 18,
    },
    {
        name : 'kashmiri',
        stack : 'web',
        age : 24,
    }
]

datas.map((values, index) => {
    console.log(values.name ,values.age)
})

datas.sort((a,b) => b.age - a.age).map(values => console.log(values))

console.log('=====================')

datas.filter((x) => x.age > 20).map(values => console.log(values))

console.log('=====================')

datas
    .sort((a,b) => a.age - b.age)
    .filter((x) => x.age >= 20)
    .map(values => console.log(values))