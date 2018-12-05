<?php 

// connection PDO
include 'connect.php';

// comments are for teaching my peers 'how to PDO'. also probably for teaching myself when I innevidably forget what some stuff does

// if we're asking for a specific item
if (isset($_GET['item'])) {
	// Lets try a prepared statement!
	// first we replace the query arrow function with the prepare arrow function
	// we're replacing actual variables with a question mark.
	// NOTE TO SELF: no quotes are ever required with prepared statements!
	$stmt = $pdo->prepare('SELECT items_title, items_info, items_pic FROM tbl_items WHERE id = ? ORDER BY id ASC');
	// we need a variable to pass into the prepared statement
	// in most cases this would come from user interactions, like $_GET or $_POST
	// for now, we'll make our own variable
	$item = $_GET['item'];
	// now, we execute that statement. this puts the variable into the statement

	// !!!!!!!!!!!!
	// IT IS THIS EXTRA LEVEL OF ABSTRACTION (REDUNDANCY) THAT PROTECTS US FROM SQL INJECTION
	// !!!!!!!!!!!!

	$stmt->execute([$item]);
	// this line will slot the $item variable into the first slot. It's an array, so we could add variables for consecutive slots, seperated by commas
	
} else {
// if we want everything
	$stmt = $pdo->query('SELECT * FROM tbl_items');
}

// PDO query
// 


// the best part is, $stmt fetches just the same as a non-prepared statement

// array to contain fetch() results
$rows = array();
// while loop for fetch arrow function (part of PDO)
while ($row = $stmt->fetch())
{
	// put the results of that 
    $rows[] = $row;
}

// encode that to JSON
header('Content-Type: application/json; charset=UTF-8');
echo json_encode($rows);

?>