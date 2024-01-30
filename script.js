function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
  
    // Validate input (you can add more validation)
    if (name === "" || email === "" || course === "") {
      alert("Please fill in all fields");
      return;
    }
  
    // Send data to PHP for processing
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "process.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert(xhr.responseText);
        // Optionally, you can reset the form
        document.getElementById("registrationForm").reset();
      }
    };
  
    // Send the data as URL-encoded parameters
    const data = `name=${name}&email=${email}&course=${course}`;
    xhr.send(data);
  }
  