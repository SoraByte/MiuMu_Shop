const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const name = form.elements.name.value;
	const email = form.elements.email.value;
	const subject = form.elements.subject.value;
	const message = form.elements.message.value;

	if (!name || !email || !subject || !message) {
		alert('Por favor, preencha todos os campos.');
		return;
	}
	alert('Formulário enviado com sucesso!');
	form.reset();
});
