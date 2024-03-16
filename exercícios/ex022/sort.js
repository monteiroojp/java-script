let numbers = [1,10,11,2,9,3,22,8,4,7,5,6]

numbers.sort((a,b) => b-a)
//console.log(numbers)


const peoples = [
    {name: 'Joao Pedro', age: 19, gpa: 3.0,},
    {name: 'Lucas', age: 37, gpa:1.5,},
    {name: 'Bruno', age:51, gpa:2.5,} 
]


const ages = peoples.sort((a,b) => a.age - b.age)

//console.log(ages)


const names = ['joao pedro', 'bruno', 'lucas']

const ordenedNames = names.sort((a,b) => b.localeCompare(a) )

console.log(ordenedNames)
