document.getElementById('loginBtn').addEventListener('click', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'user@example.com' && password === 'password123') {
        alert('Login successful!');
    } else {
        alert('Invalid email or password');
    }
});
