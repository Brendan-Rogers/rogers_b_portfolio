<?php 

// connection PDO
include 'connect.php';

// PDO query
//$stmt = $pdo->query('SELECT * FROM tbl_items');

// Lets try a prepared statement!
// first we replace the query arrow function with the prepare arrow function
// we're replacing actual variables with a question mark.
// NOTE TO SELF: no quotes are ever required with prepared statements!
$stmt = $pdo->prepare('SELECT * FROM tbl_items WHERE items_pic = ? ORDER BY id ASC');
// we need a variable to pass into the prepared statement
// in most cases this would come from user interactions, like $_GET or $_POST
// for now, we'll make our own variable
$pic = 'celtic.png';
// now, we execute that statement. this puts the variable into the statement

// !!!!!!!!!!!!
// IT IS THIS EXTRA LEVEL OF ABSTRACTION (REDUNDANCY) THAT PROTECTS US FROM SQL INJECTION
// !!!!!!!!!!!!
$stmt->execute([$pic]);
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