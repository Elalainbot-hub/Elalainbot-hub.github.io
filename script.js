document.addEventListener('DOMContentLoaded', function() {
    // Elementos del panel de login
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordGroup = document.getElementById('passwordGroup');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const securityInfo = document.getElementById('securityInfo');
    
    // Elementos de navegación entre paneles
    const loginPanel = document.getElementById('loginPanel');
    const forgotEmailPanel = document.getElementById('forgotEmailPanel');
    const createAccountPanel = document.getElementById('createAccountPanel');
    const forgotEmailLink = document.getElementById('forgotEmailLink');
    const createAccountLink = document.getElementById('createAccountLink');
    const backToLoginFromForgot = document.getElementById('backToLoginFromForgot');
    const backToLoginFromCreate = document.getElementById('backToLoginFromCreate');

    // Función para cambiar entre paneles
    function showPanel(panelToShow) {
        // Ocultar todos los paneles
        loginPanel.classList.add('hidden');
        forgotEmailPanel.classList.add('hidden');
        createAccountPanel.classList.add('hidden');
        
        // Mostrar el panel solicitado
        panelToShow.classList.remove('hidden');
    }

    // Evento para el botón "Siguiente" en el login
    nextBtn.addEventListener('click', function() {
        if (emailInput.value.trim() !== '') {
            // Mostrar campo de contraseña
            passwordGroup.classList.remove('hidden');
            securityInfo.classList.remove('hidden');
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
            
            // Enfocar el campo de contraseña
            passwordInput.focus();
        }
    });

    // Evento para el enlace "¿Has olvidado tu correo electrónico?"
    forgotEmailLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPanel(forgotEmailPanel);
    });

    // Evento para el enlace "Crear cuenta"
    createAccountLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPanel(createAccountPanel);
    });

    // Evento para volver al login desde "Olvidé email"
    backToLoginFromForgot.addEventListener('click', function() {
        showPanel(loginPanel);
    });

    // Evento para volver al login desde "Crear cuenta"
    backToLoginFromCreate.addEventListener('click', function() {
        showPanel(loginPanel);
    });

    // Manejar el evento de entrada en el campo de email
    emailInput.addEventListener('input', function() {
        if (passwordGroup.classList.contains('hidden')) {
            nextBtn.disabled = emailInput.value.trim() === '';
        }
    });

    // Prevenir envío de formularios
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    });
});

// Funciones de redirección directa
function redirectToGoogleLogin() {
    window.location.href = 'https://accounts.google.com';
}

function redirectToGoogleRecovery() {
    window.location.href = 'https://accounts.google.com/signin/recovery';
}

function redirectToGoogleSignup() {
    window.location.href = 'https://accounts.google.com/signup';
}
