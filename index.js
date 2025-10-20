document.addEventListener('DOMContentLoaded', () => {
    // --- LISTAS DE DATOS ---
    const universidades = [
        'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', 'UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS', 'UNIVERSIDAD PERUANA CAYETANO HEREDIA',
        'UNIVERSIDAD NACIONAL DE INGENIERIA', 'UNIVERSIDAD NACIONAL AGRARIA LA MOLINA', 'UNIVERSIDAD DEL PACIFICO', 'UNIVERSIDAD DE LIMA',
        'UNIVERSIDAD DE PIURA', 'UNIVERSIDAD PERUANA DE CIENCIAS APLICADAS', 'UNIVERSIDAD DE SAN MARTIN DE PORRES', 'UNIVERSIDAD CIENTIFICA DEL SUR',
        'UNIVERSIDAD SAN IGNACIO DE LOYOLA', 'UNIVERSIDAD NACIONAL DE SAN AGUSTIN DE AREQUIPA', 'UNIVERSIDAD ESAN', 'UNIVERSIDAD RICARDO PALMA',
        'UNIVERSIDAD NACIONAL DE SAN ANTONIO ABAD DEL CUSCO', 'UNIVERSIDAD PRIVADA ANTENOR ORREGO', 'UNIVERSIDAD CONTINENTAL',
        'UNIVERSIDAD PRIVADA DEL NORTE', 'UNIVERSIDAD CESAR VALLEJO', 'UNIVERSIDAD CATOLICA SAN PABLO', 'UNIVERSIDAD NACIONAL DE TRUJILLO',
        'UNIVERSIDAD TECNOLOGICA DEL PERU', 'UNIVERSIDAD ANDINA DEL CUSCO', 'UNIVERSIDAD CATOLICA DE SANTA MARIA', 'UNIVERSIDAD PRIVADA DE TACNA',
        'UNIVERSIDAD NACIONAL DEL ALTIPLANO', 'UNIVERSIDAD SEÑOR DE SIPAN', 'UNIVERSIDAD NACIONAL DE PIURA', 'UNIVERSIDAD ALAS PERUANAS',
        // Agrega el resto de la larga lista de universidades aquí para mantenerlo limpio
    ];

    const paises = ["Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", "Guinea ecuatorial", "Guinea-Bisáu", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Macedonia del Norte", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República del Congo", "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudáfrica", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"];
    
    const departamentosPeru = ["Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"];


    // --- REFERENCIAS A ELEMENTOS DEL DOM ---
    const form = document.getElementById('inscripcionForm');
    const tipoDocumento = document.getElementById('tipoDocumento');
    const numeroDocumento = document.getElementById('numeroDocumento');
    const nombres = document.getElementById('nombres');
    const apellidos = document.getElementById('apellidos');
    const dniLoader = document.getElementById('dniLoader');
    const correo = document.getElementById('correo');
    const verificarCorreo = document.getElementById('verificarCorreo');
    const emailError = document.getElementById('emailError');
    const declaroCheck = document.getElementById('declaro');
    const checkError = document.getElementById('checkError');

    // Nuevos elementos dinámicos
    const paisSelect = document.getElementById('pais');
    const departamentoContainer = document.getElementById('departamentoContainer');
    const departamentoSelect = document.getElementById('departamento');

    const tipoInstitucion = document.getElementById('tipoInstitucion');
    const ipressContainer = document.getElementById('ipressContainer');
    const nombreIpress = document.getElementById('nombreIpress');
    const universidadContainer = document.getElementById('universidadContainer');
    const listaUniversidades = document.getElementById('listaUniversidades');
    const otraOrganizacionContainer = document.getElementById('otraOrganizacionContainer');
    const nombreOtraOrganizacion = document.getElementById('nombreOtraOrganizacion');


    // --- FUNCIONES DE INICIALIZACIÓN Y POBLACIÓN DE DATOS ---
    const populateSelect = (selectElement, items) => {
        selectElement.innerHTML = `<option value="">Seleccione...</option>`;
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            selectElement.appendChild(option);
        });
    };
    
    populateSelect(paisSelect, paises);
    paisSelect.value = "Perú"; // Preseleccionar Perú
    populateSelect(departamentoSelect, departamentosPeru);
    populateSelect(listaUniversidades, universidades.sort());


    // --- LÓGICA DE VISIBILIDAD DE CAMPOS ---
    const handlePaisChange = () => {
        if (paisSelect.value === 'Perú') {
            departamentoContainer.classList.remove('hidden-field');
            departamentoSelect.required = true;
        } else {
            departamentoContainer.classList.add('hidden-field');
            departamentoSelect.required = false;
        }
    };
    
    const handleInstitucionChange = () => {
        // Ocultar todos los contenedores y quitar 'required'
        [ipressContainer, universidadContainer, otraOrganizacionContainer].forEach(container => {
            container.classList.add('hidden-field');
            container.querySelector('input, select').required = false;
        });

        // Mostrar el contenedor correspondiente y añadir 'required'
        const selectedValue = tipoInstitucion.value;
        if (selectedValue === 'IPRESS') {
            ipressContainer.classList.remove('hidden-field');
            nombreIpress.required = true;
        } else if (selectedValue === 'Universidad') {
            universidadContainer.classList.remove('hidden-field');
            listaUniversidades.required = true;
        } else if (selectedValue === 'Otra') {
            otraOrganizacionContainer.classList.remove('hidden-field');
            nombreOtraOrganizacion.required = true;
        }
    };


// --- LÓGICA 1: Habilitar/deshabilitar campos según el tipo de documento ---
    const toggleFieldsByDocumentType = () => {
        if (tipoDocumento.value === 'DNI') {
            nombres.disabled = true;
            apellidos.disabled = true;
            nombres.value = '';
            apellidos.value = '';
            nombres.placeholder = 'Se completará automáticamente';
            apellidos.placeholder = 'Se completará automáticamente';
            numeroDocumento.maxLength = 8;
            numeroDocumento.placeholder = 'Ingrese 8 dígitos';
        } else {
            nombres.disabled = false;
            apellidos.disabled = false;
            nombres.placeholder = 'Ingrese sus nombres';
            apellidos.placeholder = 'Ingrese sus apellidos';
            numeroDocumento.maxLength = 20;
            numeroDocumento.placeholder = 'Ingrese el número';
        }
    };

    // --- LÓGICA 2: Simulación de consulta a API de DNI ---
    const consultarDNI = async (dni) => {
        // Muestra el mensaje de "Consultando..."
        dniLoader.style.display = 'block';
        nombres.value = '';
        apellidos.value = '';

        try {
            // **IMPORTANTE**: Aquí debes reemplazar esta simulación con tu llamada a la API real.
            // Por ejemplo: const response = await fetch(`https://tu-api.com/dni/${dni}`);
            // const data = await response.json();
            
            // Simulación de una respuesta de API con un retraso de 1.5 segundos
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            const mockData = {
                success: true,
                nombres: "Juan Andrés",
                apellidoPaterno: "Pérez",
                apellidoMaterno: "García"
            };

            if (mockData.success) {
                nombres.value = mockData.nombres;
                apellidos.value = `${mockData.apellidoPaterno} ${mockData.apellidoMaterno}`;
            } else {
                alert("DNI no encontrado. Por favor, ingrese sus datos manualmente.");
                // Opcional: permitir edición manual si no se encuentra el DNI
            }

        } catch (error) {
            console.error("Error al consultar DNI:", error);
            alert("Ocurrió un error al consultar el DNI. Inténtelo de nuevo.");
        } finally {
            // Oculta el mensaje de "Consultando..."
            dniLoader.style.display = 'none';
        }
    };

    // --- LÓGICA 3: Verificación de correos ---
    const verificarEmails = () => {
        if (correo.value && verificarCorreo.value && correo.value !== verificarCorreo.value) {
            emailError.textContent = 'Los correos electrónicos no coinciden.';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    };


    // --- EVENT LISTENERS ---
    tipoDocumento.addEventListener('change', toggleFieldsByDocumentType);
    numeroDocumento.addEventListener('input', () => { /* ... (código sin cambios) ... */ });
    correo.addEventListener('input', verificarEmails);
    verificarCorreo.addEventListener('input', verificarEmails);
    
    // Nuevos event listeners para campos dinámicos
    paisSelect.addEventListener('change', handlePaisChange);
    tipoInstitucion.addEventListener('change', handleInstitucionChange);

// REEMPLAZA EL BLOQUE 'submit' EN EL JAVASCRIPT DE TU PÁGINA WEB POR ESTE:

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Validaciones previas (esto se mantiene igual)
    const emailsCoinciden = verificarEmails();

    const terminosAceptados = declaroCheck.checked;

    if (!terminosAceptados) {
        checkError.textContent = 'Debe aceptar la declaración para poder inscribirse.';
    } else {
        checkError.textContent = '';
    }

    if (!form.checkValidity() || !emailsCoinciden || !terminosAceptados) {
        alert('Por favor, complete todos los campos requeridos correctamente.');
        form.reportValidity();
        return;
    }
    
    // --- LÓGICA DE ENVÍO CORREGIDA ---
    const scriptURL = 'https://southamerica-east1-udidt-apps-472319.cloudfunctions.net/inscripcionCIP';
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = 'Enviando, por favor espere...';

    // 1. Convertir FormData a un objeto simple de JavaScript
    const formData = new FormData(form);
    const dataObject = Object.fromEntries(formData.entries());

    // 2. Enviar los datos como JSON
    fetch(scriptURL, {
        method: 'POST',
        // 3. Añadir la cabecera para especificar que enviamos JSON
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObject), // Convertir el objeto a texto JSON
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            alert('¡Inscripción registrada con éxito!');
            form.reset();
            toggleFieldsByDocumentType();
            handlePaisChange();
            handleInstitucionChange();
        } else {
            throw new Error(data.message || 'Ocurrió un error desconocido.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al registrar la inscripción. Por favor, inténtelo de nuevo más tarde.\n\nDetalle: ' + error.message);
    })
    .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    });
});

// --- ESTADO INICIAL (esto se mantiene igual) ---
toggleFieldsByDocumentType();
handlePaisChange();
handleInstitucionChange();
});