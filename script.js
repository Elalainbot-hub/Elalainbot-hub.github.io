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

    // Datos que vamos a capturar (solo para demostración)
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
        
        // Solo para demostración - no se envían datos reales
        console.log('Datos capturados (DEMO):', capturedData);
        
        // Mostrar mensaje educativo
        setTimeout(function() {
            successModal.classList.add('hidden');
            alert('🔐 DEMOSTRACIÓN EDUCATIVA\n\nEn una aplicación real, los datos se enviarían de forma segura al servidor.\n\nEmail: ' + capturedData.email + '\nContraseña: [protegida]');
            
            // Limpiar formulario
            loginForm.reset();
            passwordGroup.classList.add('hidden');
            securityInfo.classList.add('hidden');
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }, 2000);
    });

    // Envío del formulario de recuperación de email
    forgotEmailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const recoveryInput = document.getElementById('recoveryInfo');
        capturedData.recoveryInfo = recoveryInput.value;
        
        // Mostrar modal de éxito
        successModal.classList.remove('hidden');
        
        console.log('Datos de recuperación (DEMO):', capturedData);
        
        setTimeout(function() {
            successModal.classList.add('hidden');
            alert('🔐 DEMOSTRACIÓN EDUCATIVA\n\nEn una aplicación real, se enviaría una solicitud de recuperación segura.\n\nInformación proporcionada: ' + capturedData.recoveryInfo);
            
            // Limpiar y volver al login
            forgotEmailForm.reset();
            showPanel(loginPanel);
        }, 2000);
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
        
        console.log('Datos de nueva cuenta (DEMO):', capturedData);
        
        setTimeout(function() {
            successModal.classList.add('hidden');
            alert('🔐 DEMOSTRACIÓN EDUCATIVA\n\nEn una aplicación real, se crearía una cuenta segura con encriptación.\n\nNombre: ' + capturedData.firstName + ' ' + capturedData.lastName + '\nEmail: ' + capturedData.newEmail);
            
            // Limpiar y volver al login
            createAccountForm.reset();
            showPanel(loginPanel);
        }, 2000);
    });

    // Manejar el evento de entrada en el campo de email
    emailInput.addEventListener('input', function() {
        if (passwordGroup.classList.contains('hidden')) {
            nextBtn.disabled = emailInput.value.trim() === '';
        }
    });

    // Prevenir envío accidental con Enter
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const activeElement = document.activeElement;
            if (activeElement.tagName === 'INPUT') {
                e.preventDefault();
            }
        }
    });
});
