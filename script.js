document.getElementById('generate').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const includeSpecials = document.getElementById('specials').checked;
    const password = generatePassword(length, includeSpecials);
    document.getElementById('password').value = password;
});

function generatePassword(length, includeSpecials) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specials = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let characters = letters + numbers;
    if (includeSpecials) {
        characters += specials;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}
