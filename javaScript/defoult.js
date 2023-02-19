
/* function add(first, second) {


    second = second || 0
    console.log(first, second);

    if (second === undefined) {
        second = 0
    }

    const total = first + second

    return total
} */


function add(first = 2, second = 0) {
    const totoal = first + second
    return totoal
}





const result = add()
// console.log(result); 


function fullName(first, last) {
    const name = first + ' ' + "rakib"
    return name
}

const name = fullName("ariyan")
console.log(name);
