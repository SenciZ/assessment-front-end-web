console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form submitted!!');
}


let form = document.getElementById('contact');

form.addEventListener('submit', handleSubmit);

const duck = document.getElementById('duck');
duck.addEventListener("mouseover", ()=>{
	alert("You are the cat's meow!")})