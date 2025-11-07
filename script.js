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

    // Función para mostrar mensaje de demostración
    function showDemoMessage() {
        alert('⚠️ DEMOSTRACIÓN EDUCATIVA\n\nEsta es una página de demostración con fines educativos. En una aplicación real, los datos se enviarían de forma segura a un servidor.\n\nNo se han enviado datos reales a ningún servidor.');
    }

    // Función para validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Función para mostrar/ocultar loading
    function showLoading(show) {
        if (show) {
            successModal.classList.remove('hidden');
        } else {
            successModal.classList.add('hidden');
        }
    }

    // Evento para el botón "Siguiente" en el login
    nextBtn.addEventListener('click', function() {
        const email = emailInput.value.trim();
        
        if (email !== '') {
            if (!isValidEmail(email) && !/^\d+$/.test(email)) {
                alert('Por favor, introduce un correo electrónico o número de teléfono válido.');
                return;
            }
            
            capturedData.email = email;
            
            // Mostrar campo de contraseña
            passwordGroup.classList.remove('hidden');
            securityInfo.classList.remove('hidden');
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
            
            // Enfocar el campo de contraseña
            setTimeout(() => {
                passwordInput.focus();
            }, 100);
        } else {
            alert('Por favor, introduce tu correo electrónico o teléfono.');
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
        // Restablecer el formulario de login
        passwordGroup.classList.add('hidden');
        securityInfo.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
        passwordInput.value = '';
    });

    // Evento para volver al login desde "Crear cuenta"
    backToLoginFromCreate.addEventListener('click', function() {
        showPanel(loginPanel);
    });

    // Envío del formulario de login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (!email || !password) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        capturedData.password = password;
        
        // Mostrar loading
        showLoading(true);
        
        console.log('Datos de login capturados (DEMO):', {
            email: capturedData.email,
            password: '***' // No mostrar contraseña en console por seguridad
        });
        
        // Simular proceso de login (solo demostración)
        setTimeout(function() {
            showLoading(false);
            showDemoMessage();
            
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
        const recoveryValue = recoveryInput.value.trim();
        
        if (!recoveryValue) {
            alert('Por favor, introduce tu teléfono o correo electrónico de recuperación.');
            return;
        }
        
        capturedData.recoveryInfo = recoveryValue;
        
        // Mostrar loading
        showLoading(true);
        
        console.log('Datos de recuperación (DEMO):', capturedData.recoveryInfo);
        
        setTimeout(function() {
            showLoading(false);
            showDemoMessage();
            
            // Limpiar y volver al login
            forgotEmailForm.reset();
            showPanel(loginPanel);
        }, 2000);
    });

    // Envío del formulario de creación de cuenta
    createAccountForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const newEmail = document.getElementById('newEmail').value.trim();
        const newPassword = document.getElementById('newPassword').value.trim();
        
        // Validaciones básicas
        if (!firstName || !lastName || !newEmail || !newPassword) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        if (!isValidEmail(newEmail)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return;
        }
        
        if (newPassword.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            return;
        }
        
        capturedData.firstName = firstName;
        capturedData.lastName = lastName;
        capturedData.newEmail = newEmail;
        capturedData.newPassword = newPassword;
        
        // Mostrar loading
        showLoading(true);
        
        console.log('Datos de nueva cuenta (DEMO):', {
            firstName: capturedData.firstName,
            lastName: capturedData.lastName,
            email: capturedData.newEmail,
            password: '***'
        });
        
        setTimeout(function() {
            showLoading(false);
            showDemoMessage();
            
            // Limpiar formulario
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

    // Mejorar la experiencia de usuario en los inputs
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach(input => {
        // Efecto de label flotante mejorado
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Inicializar estado de labels
        if (input.value !== '') {
            input.parentElement.classList.add('focused');
        }
    });

    // Prevenir clic derecho e inspección (opcional, para mayor realismo)
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('keydown', function(e) {
        // Prevenir F12, Ctrl+Shift+I, Ctrl+Shift+C, etc.
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') || 
            (e.ctrlKey && e.shiftKey && e.key === 'C') ||
            (e.ctrlKey && e.key === 'u')) {
            e.preventDefault();
            return false;
        }
    });

    // Inicialización
    console.log('🔐 Página de demostración educativa cargada');
    console.log('⚠️ Esta es una simulación con fines educativos');
    console.log('📧 No se envían datos reales a servidores externos');
});
