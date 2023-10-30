<?php

$string = file_get_contents('todo-list.json');

$list = json_decode($string);

echo json_encode($list);