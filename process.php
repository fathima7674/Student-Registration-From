<?php
$conn = new mysqli("localhost", "root", "", "student_registration");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from POST request
$name = $_POST['name'];
$email = $_POST['email'];
$course = $_POST['course'];

// Insert data into the 'students' table
$sql = "INSERT INTO students (name, email, course) VALUES ('$name', '$email', '$course')";

if ($conn->query($sql) === TRUE) {
  echo "Registration successful!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
