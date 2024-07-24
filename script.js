document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const course = document.getElementById('course').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
   
    // Display the values in the result section
    document.getElementById('resultName').textContent = name;
    document.getElementById('resultRoll').textContent = roll;
    document.getElementById('resultCourse').textContent = course;
    document.getElementById('resultAge').textContent = age;
    document.getElementById('resultGender').textContent = gender;
    document.getElementById('resultCity').textContent = city;
    document.getElementById('resultEmail').textContent = email;
    document.getElementById('resultPhone').textContent = phone;
  
    // Show the result section
    document.getElementById('result').classList.remove('hidden');

    // Clear the form
    document.getElementById('userForm').reset();
});
