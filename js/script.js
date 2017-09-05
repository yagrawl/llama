function confirm(){
	let appointment = document.getElementById('appointment');
	let login = document.getElementById('login');

	appointment.removeChild(login);

	var div = document.createElement('div');
    div.className = "thanks-container";
    div.id = "thanks";
    
    var p = document.createElement('p');
    p.className = "thanks";
    p.textContent = "Our Llama specialists will reach out to for confirmation. We look forward to meeting your Llama!";

    div.appendChild(p);
    appointment.appendChild(div);
}