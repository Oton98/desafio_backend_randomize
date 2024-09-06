async function callNumber(){
    const number = await fetch('http://localhost:3000/random-number');
    return parseInt(number)
}