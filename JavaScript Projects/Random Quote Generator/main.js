function generate() {
	var quotes = {
		"- Carol Burnett": '"When you have a dream, you have got to grab it and never let go."',
		"- Audrey Hepburn": '"Nothing is impossible. The word itself says I am possible!"',
		"- Alexander the Great": '"There is nothing impossible to they who will try."',
		"- Michael Altshuler": '"The bad news is time flies. The good news is you are the pilot."',
		"- Nicole Kidman": '"Life has got all those twists and turns. You have got to hold on tight and off you go."',
		"- Walt Whitman": '"Keep your face always toward the sunshine, and shadows will fall behind you."',
		"- Amal Clooney": '"Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell."',
		"- Duchess Meghan": '"You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box."'
	}

	var authors = Object.keys(quotes);
	//Object.keys() method returns an Array Iterator object with the keys of an object.
	//console.log(authors);
	//Output - (8) ['Carol Burnett', 'Audrey Hepburn', 'Alexander the Great', 'Michael Altshuler', 'Nicole Kidman', 'Walt Whitman', 'Amal Clooney', 'Duchess Meghan']
	var author = authors[Math.floor(Math.random() * authors.length)]; //Generate random author names
	//console.log(author);

	var quote = quotes[author];
	document.getElementById('quote').innerHTML = quote;
	document.getElementById('author').innerHTML = author;

	//innerHTML is an HTML element property that has two uses for web developers:
	//1) You can use it to get the internal HTML content of any HTML element as an HTML string.
	//2) You can also use it to set or change elements' innerHTML content.
}
