// SEAF (Self Executing Anonymous Function)
(function(){ console.log("JS Initialized");

// VARIABLE STACK
let portPiece = false,
	item = 0,
	itemLength = 0;

let itemTags = [];


// number of items in my portfolio


// make the Vue object
const vm = new Vue({
// link the main app element
el : "#app",

// Vue.js variable
data : {
	portTitle : "",
	portDescription : ""
},

created : function() {

	this.collectTags();

},
// Vue.js methods
methods : {

	collectTags() {
		// this URL returns an object of only tags
		const url = "includes/admin/scripts/tags.php";

		fetch(url) // goes to the url
		.then(res => res.json()) // takes that JSON file, turns it into a vanilla JS object
		.then(data => { // data variable is the different rows from the PHP query that happens at the URL we fetch from	
			// get length of object
			itemLength = Object.keys(data);
			console.log(`The Tags are collected. There are ${itemLength.length} of them.`);

			// for the number of itemLength(the amount of tags we have), put a tag into the array
			var i = 0;
			while(i < itemLength.length) {
				itemTags[i] = data[i].items_tag;
				i++;
				// nice! itemTags now has i variables, with the appropriate tags in it
			}

		})
		.catch(function(error) {
			console.log(error);
		});

	},

	itemClick : function (event) {
		// console.log(`Item number ${item} has been clicked.`);
		portPiece = true;
		showItem();
	}

}



});
// END OF VUE APP

// FUNCTIONS
function showItem() {
	// console.log('The showItem function has been called!');

	// itemQuery is item + 1, because Primary Key starts at 1 instead of 0
	let itemQuery = item + 1;
	// get the info for the piece that has been clicked
	let url = `includes/admin/scripts/items.php?item=${itemQuery}`;

	fetch(url) // goes to the url
	.then(res => res.json()) // takes that JSON file, turns it into a vanilla JS object
	.then(data => { // data variable is the different rows from the PHP query that happens at the URL we fetch from
		
		// destucturing assignment, to convert our object's keys into variables, retaining their values
		const { items_title , items_info , items_pic } = data[0];
		
		document.querySelector('.portfolio-info').innerHTML = items_info;
		document.querySelector('.portfolio-title').innerHTML = items_title;
		document.querySelector('.portfolio-image').src = `images/${items_pic}`;

		// confirm
		console.log('Info updated and displayed');

	})
	.catch(function(error) {
		console.log(error);
	});

	// hide the Mainline Container
	document.querySelector('.mainline-container').classList.add('hidden');
	// show the Portfolio Container
	document.querySelector('.portfolio-container').classList.remove('hidden');



}

function hideItem() {

	// hide the Portfolio Container
	document.querySelector('.portfolio-container').classList.add('hidden');

	// show the Mainline Container
	document.querySelector('.mainline-container').classList.remove('hidden');

	// confirm
	console.log('Info hidden, mainline shown.');
}



// EVENT HANDLERS
// checks for keypresses
document.addEventListener('keypress', (event) => {

	const keyName = event.key;

	// logic structure to iterate my portfolio interchange
	if (keyName == 'ArrowDown') {
		// console.log('INTERCHANGE down');
		document.getElementById('interchange').classList.add('animated','fadeOutDown');

		// DECREMENT item number
		if (item == 0) {
			item = itemLength.length - 1;
		} else {
			item -= 1;
		}

		// if we're currently viewing a portfolio piece, refresh the view with new info
		if(portPiece) {
			showItem();
		}


	} else if (keyName == 'ArrowUp') {
		// console.log('INTERCHANGE up');

		// INCREMENT item number
		if (item == itemLength.length - 1) {
			item = 0;
		} else {
			item += 1;
		}

		// if we're currently viewing a portfolio piece, refresh the view with new info
		if(portPiece) {
			showItem();
		}


	} else if (keyName == 'Escape' && portPiece) {
		// console.log('CLOSE portfolio');
		portPiece = false;

		hideItem();

	} else if (keyName == 'Enter' && !portPiece) {
		// console.log('OPEN portfolio');
		portPiece = true;

		showItem();
	}

	// write what item number we've navigated to
	console.log(`Item: ${item}`);
	// set the interchange element to our selected tag, using the itemTags array recovered from our showItem fetch.api
	document.querySelector('#interchange').innerHTML = itemTags[item];
	// console.log(`You are on tag: ${itemTags[item]}. It is item number: ${item}`);

});







}) ();





