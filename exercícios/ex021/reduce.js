const setenceArray = ['JP ', 'foi', 'para', 'academia']

const setenceFormer = (accumulator, nextElement) =>{
    return accumulator + nextElement + " "
}

const setence = setenceArray.reduce(setenceFormer)
console.log(setence)

const numbers = [11, 22, 110, 5, 69, 49]

const maxNumberCalculator = (accumulator, element) =>{
    return Math.max(accumulator, element)
}

const maxNum = numbers.reduce(maxNumberCalculator)
console.log(maxNum)