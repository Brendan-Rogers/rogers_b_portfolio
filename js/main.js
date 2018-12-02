// SEAF (Self Executing Anonymous Function)
(function(){ console.log("JS Initialized");

// VARIABLE STACK
let portPiece = true,
	item = 0;
// number of items in my portfolio
const itemLength = 6;


// make the Vue object
const vm = new Vue({
// link the main app element
el : "#app",

// Vue.js variable
data : {
	itemTitle : "",
	itemDescription : ""
},

created : function() {

	this.onLoad();

},
// Vue.js methods
methods : {

	onLoad() {
		const url = "includes/admin/scripts/test.php";

		fetch(url) // goes to the url
		.then(res => res.json()) // takes that JSON file, turns it into a vanilla JS object
		.then(data => { // data variable is the different rows from the PHP query that happens at the URL we fetch from
			// do something with the data[]
			
		})
		.catch(function(error) {
			console.log(error);
		});

	}

}



});
// END OF VUE APP

// EVENT HANDLERS

// checks for keypresses
document.addEventListener('keypress', (event) => {
	const keyName = event.key;
	console.log(keyName);

	// logic structure to iterate my portfolio interchange
	if (keyName == 'ArrowDown') {
		console.log('INTERCHANGE down');
		document.getElementById('interchange').classList.add('animated','fadeOutDown');

		// DECREMENT item number
		if (item == 0) {
			item = itemLength;
		} else {
			item -= 1;
		}
		console.log(item);


	} else if (keyName == 'ArrowUp') {
		console.log('INTERCHANGE up');

		// INCREMENT item number
		if (item == itemLength) {
			item = 0;
		} else {
			item += 1;
		}
		console.log(item);


	} else if (keyName == 'Escape' && portPiece) {
		console.log('CLOSE lightbox');
		portPiece = false;
	}

});







}) ();





