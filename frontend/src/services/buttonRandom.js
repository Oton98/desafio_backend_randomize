export async  function callNumber() {
    try {
        const response = await fetch('http://localhost:3020/random-number',{
            method: "post",
        });

        const body = await response.json();
        return body.value;

    } catch (error){
        console.error('Error on receive number', error)
    }
}