

const fish = {

    name: 'king Hilsha',
    addres: 'chandpur',
    color: 'silver',
    phone: '01754836031',
    price: 4000,
}

// const phone = fish.phone
// const color = fish.color
// const price = fish.price 



const { age, name } = { name: 'Almas', age: 56, profession: "khawa dawa" }
console.log(age);


const { addres } = fish
console.log(addres);


//  Array destructuring  
const [frist, second] = [43, 44, 55]

const nayoks = ['sakib', 'bappi', 'riyaj']
const [king, lost, notun] = nayoks
console.log(notun);

function getName() {
    return ['alim', 'halim']
}
const [baba, chacha] = getName()
console.log(chacha, baba);