<?php 

// connection PDO
include 'connect.php';


// query for just the tags
$stmt = $pdo->query('SELECT items_tag FROM tbl_items');

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