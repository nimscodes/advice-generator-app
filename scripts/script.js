const dice = document.querySelector('.dice');
const quote = document.querySelector('#quote');
const number = document.querySelector('#number')
const url = `https://api.adviceslip.com/advice/`;


dice.addEventListener('click', async () => {
    try{
        let slip_id = Math.floor(Math.random() * 200) + 1;
        const response = await fetch(url + slip_id);
        const data = await response.json();
        const id = data.slip.id;
        const advice = data.slip.advice;
        number.innerHTML = id;
        quote.innerHTML = advice;
    }
    catch(error){
        console.log(error);
    }
})