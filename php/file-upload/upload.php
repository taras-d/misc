<?php

    $upload_to = __DIR__ . '/uploads';

    $file = $_FILES['file'];
    $file_name = $file['name'];
    $file_tmp_name = $file['tmp_name'];

    if ($file_tmp_name) {
        if (move_uploaded_file($file_tmp_name, "{$upload_to}/{$file_name}")) {
            echo 'File uploaded';
        } else {
            echo 'Error uploading file';
        }
    }

?>