let index = 0;
let changeColors = () => {
	let colors = ['red', 'blue', 'orange', 'yellow', 'green', 'purple'];

	document.getElementsByTagName('body')[0].style.background = colors[index++];
	if (index > colors.length - 1) {
		index = 0;
	}

}
