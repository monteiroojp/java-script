const names = ['João Pedro', 'Daniel', 'Pedro', 'Lucas', 'Bruno', 'Francisco']


const shortNames = names.filter((element) => {
    return element.length <=5
})
console.log(shortNames)
const longNames = names.filter((element) =>{
    return element.length > 5
})
console.log(longNames)