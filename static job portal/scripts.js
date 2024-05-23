function handleLogin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const errorMessage = document.getElementById('error-message');

    // Placeholder: Handle login (e.g., validate credentials, authenticate user)
    console.log(`Login with Email: ${email}, Password: ${password}`);
    
     if (email === 'admin@gmail.com' && password === 'password123')  
     {
        alert('login successfull');
     window.location.href = 'register.html';
        
     } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
        
     }
    

}

function handleRegister(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Placeholder: Handle registration (e.g., save user data)
    console.log(`Register with Name: ${name}, Email: ${email}, Password: ${password}`);

    alert('Registration functionality not implemented yet.');
}
