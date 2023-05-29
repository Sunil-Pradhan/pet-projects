const messageInput = document.getElementById('message-input');

messageInput.addEventListener('keydown', function (event) {
	// If the user presses the "Enter" key on the keyboard
	if (event.key == 'Enter')
		getMessage();
})


let getMessage = () => {
	document.getElementById('message-output').innerHTML = messageInput.value;
	messageInput.value = '';
}
