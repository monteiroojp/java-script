
//Method 1

let a = 4;
let c = 5;

[a,c] = [c,a]

//console.log(a)
//console.log(c)

//Method 2

let names = ['João Pedro', 'Lucas', 'Daniel', 'Bruno'];

[names[0], names[3]] = [names[3], names[0]]

//console.log(names)

//Method 3

let datas = ['Joao Pedro', 'Monteiro', 19, false];

//const [name, fullname, age, working, degree] = datas
//console.log(name)
//console.log(fullname)
//console.log(age)
//console.log(working)
//console.log(degree)

//Method 4

const user = {
    firstName: 'Joao Pedro',
    age: 19,
    lastName: 'Monteiro',
    working: false
};

//const {firstName, age, lastName, working, job} = user;

//console.log(firstName)
//console.log(age)
//console.log(lastName)
//console.log(working)
//console.log(job)

//Method 5

const displayDatas = ({firstName, age, lastName, working, salary='no-refer'}) =>{
    console.log(firstName)
    console.log(age)
    console.log(lastName)
    console.log(working)
    console.log(salary)
}




const user2 = {
    firstName: 'Daniel',
    age: 19,
    lastName: 'Soares',
    working: true,
}

displayDatas(user2)