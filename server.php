<?php

$string = file_get_contents('todo-list.json');

$list = json_decode($string);

if(isset($_POST['todo'])){

    $newItem = $_POST['todo'];
    $list[] = $newItem;

    file_put_contents('todo-list.json', json_encode($list));

};

header('Content-Type: application/json');

echo json_encode($list);

