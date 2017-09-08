// Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('.landing-text');
sr.reveal('.appointment-button', { duration: 2000, origin: 'bottom',  distance: '20px' });
sr.reveal('.scrollchair', { duration: 2000, origin: 'right',  distance: '80px' });
sr.reveal('.haircutLeft', { duration: 1000, origin: 'bottom',  distance: '40px' });
sr.reveal('.haircutRight', { duration: 1000, origin: 'bottom',  distance: '40px' });
sr.reveal('.myimg', { duration: 1000, origin: 'bottom',  distance: '80px' });

// Form submission actions
function confirm(){
	let appointment = document.getElementById('appointment');
	let book = document.getElementById('book');

	appointment.removeChild(book);

	var div = document.createElement('div');
    div.className = "thanks-container";
    div.id = "thanks";
    
    var p = document.createElement('p');
    p.className = "thanks";
    p.innerHTML = "Our Llama specialists will reach out to for confirmation.</br> We look forward to meeting your Llama!";

    div.appendChild(p);
    appointment.appendChild(div);
}