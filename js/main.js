// SEAF (Self Executing Anonymous Function)
(function(){ console.log("JS Initialized");

// VARIABLE STACK
let portPiece = false,
	item = 0,
	itemLength = 0;

let itemTags = [];

var images = new Array();

var location = 'home';


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

	// gathers the item tags, for use in the INTERCHANGE
	this.collectTags();

	// EXPERIMENTAL
	// image preloader. uses the hosted images.
	this.preloadImages();

	// Check if we've been loaded by Contact
	this.contactCheck();
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

			console.log(data[0].items_tag);

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

	preloadImages : function () {

		function preload() {
			for (i = 0; i < preload.arguments.length; i++) {
				images[i] = new Image()
				images[i].src = preload.arguments[i]
			}
		}

		// i need to add to this list to make my images preload
		preload(
			"images/purevolume.png",
			"images/celtic.png",
			"images/deepdream.png",
			"images/code.png"
		)

		console.log(`the first image is ${images[0].src}`);

	},

	itemClick : function () {
		// console.log(`Item number ${item} has been clicked.`);
		portPiece = true;
		showItem();
	},

	goHome : function () {
		// they've clicked on something that returns them home. to do this, we'll close the item
		// this behaviour exists because we want home to default to the mainline
		hideItem();
		// then, we'll make sure we hidden Contact and About
		hideContact();
		hideAbout();
		// lastly, we'll make sure the home page is revealed
		showIndex();
		// these functions will hide anything thats NOT mainline-container
		location = 'home';
		console.log(`You are: ${location}`);

	},
	goAbout : function () {
		console.log('Hiding stuff now.');
		// hidden Contact and Index
		hideContact();
		hideIndex();
		// lastly, we'll make sure the home page is revealed
		showAbout();
		// these functions will hide anything thats NOT mainline-container
		location = 'about';
		console.log(`You are: ${location}`);

	},
	goContact : function () {
		// hidden Contact and About
		hideIndex();
		hideAbout();
		// lastly, we'll make sure the home page is revealed
		showContact();
		// these functions will hide anything thats NOT mainline-container
		location = 'contact';
		console.log(`You are: ${location}`);
	},

	buttonUp : function () {
		// they've clicked on something that returns them home. to do this, we'll close the item
		itemUp();
	},
	buttonDown : function () {
		// they've clicked on something that returns them home. to do this, we'll close the item
		itemDown();
	},

	contactCheck : function () {
		if (window.location.href.indexOf('fail') > 1) {
			console.log('Message Failure');
			showContact();
			hideIndex();

			// style button for Failed message
			document.querySelector('.btnMessage').innerHTML = 'Failed to send. Try again?';
			document.querySelector('.btnMessage').classList.add('btnRed');
			document.querySelector('.btnMessage').disabled = false;
			
		} else if (window.location.href.indexOf('success') > 1) {
			console.log('Message Success');
			showContact();
			hideIndex();

			// style button for Sent message
			document.querySelector('.btnMessage').innerHTML = 'Message has been sent!';
			document.querySelector('.btnMessage').classList.add('btnGreen');
			document.querySelector('.btnMessage').disabled = true;
		}
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
		// special preloaded images thing
		document.querySelector('.portfolio-image').src = images[item].src;
		document.querySelector('.hb-single').href = `images/${items_pic}`;
		// document.querySelector('.portfolio-image').src = `images/${items_pic}`;
		
		
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

	portPiece = true;
}

function hideItem() {

	// hide the Portfolio Container
	document.querySelector('.portfolio-container').classList.add('hidden');

	// show the Mainline Container
	document.querySelector('.mainline-container').classList.remove('hidden');

	// confirm
	console.log('Info hidden, mainline shown.');

	// remove information from portfolio-container
	// this fixes the jittery load when changing items from main menu after being in item view
	
	// might not actually work.. requires further testing
	document.querySelector('.portfolio-info').innerHTML = '';
	document.querySelector('.portfolio-title').innerHTML = '';
	document.querySelector('.portfolio-image').src = '';

	portPiece = false;
}	

function itemDown() {
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
	// write what item number we've navigated to
	console.log(`Item: ${item}`);
	// set the interchange element to our selected tag, using the itemTags array recovered from our showItem fetch.api
	document.querySelector('#interchange').innerHTML = itemTags[item];
	// console.log(`You are on tag: ${itemTags[item]}. It is item number: ${item}`);
}

function itemUp() {
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
	// write what item number we've navigated to
	console.log(`Item: ${item}`);
	// set the interchange element to our selected tag, using the itemTags array recovered from our showItem fetch.api
	document.querySelector('#interchange').innerHTML = itemTags[item];
	// console.log(`You are on tag: ${itemTags[item]}. It is item number: ${item}`);
}

// toggle contact functions
function hideContact() {
	document.querySelector('.contact-container').classList.add('hidden');
}
function showContact() {
	document.querySelector('.contact-container').classList.remove('hidden');	
}
// toggle about functions
function hideAbout() {
	document.querySelector('.about-container').classList.add('hidden');
}
function showAbout() {
	document.querySelector('.about-container').classList.remove('hidden');	
}
// toggle index functions
function hideIndex() {
	document.querySelector('.index-container').classList.add('hidden');
}
function showIndex() {
	document.querySelector('.index-container').classList.remove('hidden');	
}


// EVENT HANDLERS
// checks for keypresses
document.addEventListener('keyup', function (event) {

	// degrading, for browsers that dont support the weirdly supported .key property
	const key = event.key || event.keyCode;

	// logic structure to iterate my portfolio interchange
	if (key == 'ArrowDown') {
		// send that item DOWN
		itemDown();
	} else if (key == 'ArrowUp' || key === 38) {
		// send that item UP
		itemUp();

	} else if (key === 'Escape' || key === 'Esc' || key === 27 || key === 'Backspace' || key === 8 && portPiece) {
		// console.log('CLOSE portfolio');
		portPiece = false;
		hideItem();
	} else if (key == 'Enter' && !portPiece) {
		// console.log('OPEN portfolio');
		portPiece = true;
		showItem();
	}
});




// HAMMER.JS SWIPE IMPLEMENTATION
// EXPERIMENTAL
var mc = new Hammer(document.querySelector('.mainApp'));
mc.on('panup', function(ev) {
	itemUp();
});
mc.on('pandown', function(ev) {
	itemDown();
});

// ANIME.JS ANIMATION IMPLEMENTATION
// EXPERIMENTAL

var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});


// HALKABOX IMPLEMENTATION
halkaBox.run("hb-single");



}) ();





