export async  function callNumber() {
    try {
        const response = await fetch('http://localhost:3020/random-number',{
            method: "post",
        });
        const number = await response.json();
        return number

    } catch (error){
        console.error('Error on recive number', error)
    }
}