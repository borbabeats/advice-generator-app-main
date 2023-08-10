async function getAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        const advice = data.slip.advice;
        return advice;
    } catch (error) {
        console.error('Error:', error);
    }
}

getAdvice().then(advice => {
    const myAdvice = advice;
    let quote = document.getElementById('quote')
    quote.innerHTML = '"' +  myAdvice + '"'
});

async function getId() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        const id = data.slip.id;
        return id;
    } catch (error) {
        console.error('Error:', error);
    }
}

getId().then(id => {
    const myId = id;
    let number = document.getElementById('number')
    number.innerHTML = myId 
});



