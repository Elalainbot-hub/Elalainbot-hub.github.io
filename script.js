document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordGroup = document.getElementById('passwordGroup');
    const nextBtn = document.getElementById('nextBtn');
    const demoLoginBtn = document.getElementById('demoLoginBtn');
    const loginPanel = document.getElementById('loginPanel');
    const educationalPanel = document.getElementById('educationalPanel');

    // Evento para el botón "Continuar Demo"
    nextBtn.addEventListener('click', function() {
        if (emailInput.value.trim() !== '') {
            passwordGroup.classList.remove('hidden');
            nextBtn.classList.add('hidden');
            demoLoginBtn.classList.remove('hidden');
            passwordInput.focus();
        } else {
            emailInput.focus();
        }
    });

    // Limpiar datos de demostración
    emailInput.addEventListener('input', function() {
        // Limitar a datos de prueba
        if (this.value.includes('@') && !this.value.includes('@example.')) {
            this.value = this.value.replace(/@[^@]+$/, '@example.com');
        }
    });
});

function showEducationalMessage() {
    document.getElementById('loginPanel').classList.add('hidden');
    document.getElementById('educationalPanel').classList.remove('hidden');
}

function resetDemo() {
    document.getElementById('educationalPanel').classList.add('hidden');
    document.getElementById('loginPanel').classList.remove('hidden');
    
    // Resetear formularios
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('passwordGroup').classList.add('hidden');
    document.getElementById('nextBtn').classList.remove('hidden');
    document.getElementById('demoLoginBtn').classList.add('hidden');
}

function redirectToOfficial(type) {
    const urls = {
        'google': 'https://accounts.google.com',
        'recovery': 'https://accounts.google.com/signin/recovery',
        'signup': 'https://accounts.google.com/signup'
    };
    
    window.open(urls[type], '_blank');
}
