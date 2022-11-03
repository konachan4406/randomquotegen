const quote = document.querySelector('.quote')
const person = document.querySelector('.person')
const button = document.querySelector('.button-area button')
//console.log(person)
button.addEventListener('click',async function updateQuote(){
	const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    console.log(response.statusText)
    if (response.ok) {
    	quote.innerText = data.content;
    	person.innerText = data.author;

}
else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  })



//console.log(button)