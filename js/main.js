// SEAF (Self Executing Anonymous Function)
(function(){ console.log("JS Initialized");
// VARIABLE STACK
let portPiece = true;



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

	this.loadTest();

},
// Vue.js methods
methods : {

	loadTest() {
		const url = "includes/admin/scripts/test.php";

		fetch(url) // goes to the url
		.then(res => res.json()) // takes that JSON file, turns it into a vanilla JS object
		.then(data => { // data variable is the different rows from the PHP query that happens at the URL we fetch from
			this.showItem1(data[0]);
			
		})
		.catch(function(error) {
			console.log(error);
		});

	},

	showItem1(data) {
		// implement when portfolio pieces are ready

		// this.itemTitle = data.items_title;
		// this.itemDescription = data.items_info;
		// document.getElementById("testPic").src = `images/${data[0].items_pic}`;
		
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
	} else if (keyName == 'ArrowUp') {
		console.log('INTERCHANGE up');
	} else if (keyName == 'Escape' && portPiece) {
		console.log('CLOSE lightbox');
		portPiece = false;
	}

});







}) ();





