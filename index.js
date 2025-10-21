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

const paises = [
  "AFGANISTAN", "ALBANIA", "ALEMANIA", "ANDORRA", "ANGOLA", "ANTIGUA Y BARBUDA", "ARABIA SAUDITA", "ARGELIA", "ARGENTINA", "ARMENIA",
  "AUSTRALIA", "AUSTRIA", "AZERBAIYAN", "BAHAMAS", "BANGLADES", "BARBADOS", "BAREIN", "BELGICA", "BELICE", "BENIN",
  "BIELORRUSIA", "BIRMANIA", "BOLIVIA", "BOSNIA Y HERZEGOVINA", "BOTSUANA", "BRASIL", "BRUNEI", "BULGARIA", "BURKINA FASO", "BURUNDI",
  "BUTAN", "CABO VERDE", "CAMBOYA", "CAMERUN", "CANADA", "CATAR", "CHAD", "CHILE", "CHINA", "CHIPRE",
  "CIUDAD DEL VATICANO", "COLOMBIA", "COMORAS", "COREA DEL NORTE", "COREA DEL SUR", "COSTA DE MARFIL", "COSTA RICA", "CROACIA", "CUBA", "DINAMARCA",
  "DOMINICA", "ECUADOR", "EGIPTO", "EL SALVADOR", "EMIRATOS ARABES UNIDOS", "ERITREA", "ESLOVAQUIA", "ESLOVENIA", "ESPANA", "ESTADOS UNIDOS",
  "ESTONIA", "ETIOPIA", "FILIPINAS", "FINLANDIA", "FIYI", "FRANCIA", "GABON", "GAMBIA", "GEORGIA", "GHANA",
  "GRANADA", "GRECIA", "GUATEMALA", "GUYANA", "GUINEA", "GUINEA ECUATORIAL", "GUINEA-BISAU", "HAITI", "HONDURAS", "HUNGRIA",
  "INDIA", "INDONESIA", "IRAK", "IRAN", "IRLANDA", "ISLANDIA", "ISLAS MARSHALL", "ISLAS SALOMON", "ISRAEL", "ITALIA",
  "JAMAICA", "JAPON", "JORDANIA", "KAZAJISTAN", "KENIA", "KIRGUISTAN", "KIRIBATI", "KUWAIT", "LAOS", "LESOTO",
  "LETONIA", "LIBANO", "LIBERIA", "LIBIA", "LIECHTENSTEIN", "LITUANIA", "LUXEMBURGO", "MACEDONIA DEL NORTE", "MADAGASCAR", "MALASIA",
  "MALAWI", "MALDIVAS", "MALI", "MALTA", "MARRUECOS", "MAURICIO", "MAURITANIA", "MEXICO", "MICRONESIA", "MOLDAVIA",
  "MONACO", "MONGOLIA", "MONTENEGRO", "MOZAMBIQUE", "NAMIBIA", "NAURU", "NEPAL", "NICARAGUA", "NIGER", "NIGERIA",
  "NORUEGA", "NUEVA ZELANDA", "OMAN", "PAISES BAJOS", "PAKISTAN", "PALAOS", "PANAMA", "PAPUA NUEVA GUINEA", "PARAGUAY", "PERU",
  "POLONIA", "PORTUGAL", "REINO UNIDO", "REPUBLICA CENTROAFRICANA", "REPUBLICA CHECA", "REPUBLICA DEL CONGO", "REPUBLICA DEMOCRATICA DEL CONGO", "REPUBLICA DOMINICANA",
  "RUANDA", "RUMANIA", "RUSIA", "SAMOA", "SAN CRISTOBAL Y NIEVES", "SAN MARINO", "SAN VICENTE Y LAS GRANADINAS", "SANTA LUCIA",
  "SANTO TOME Y PRINCIPE", "SENEGAL", "SERBIA", "SEYCHELLES", "SIERRA LEONA", "SINGAPUR", "SIRIA", "SOMALIA", "SRI LANKA",
  "SUAZILANDIA", "SUDAFRICA", "SUDAN", "SUDAN DEL SUR", "SUECIA", "SUIZA", "SURINAM", "TAILANDIA", "TANZANIA", "TAYIKISTAN",
  "TIMOR ORIENTAL", "TOGO", "TONGA", "TRINIDAD Y TOBAGO", "TUNEZ", "TURKMENISTAN", "TURQUIA", "TUVALU", "UCRANIA", "UGANDA",
  "URUGUAY", "UZBEKISTAN", "VANUATU", "VENEZUELA", "VIETNAM", "YEMEN", "YIBUTI", "ZAMBIA", "ZIMBABUE"
];

const departamentosPeru = [
  "AMAZONAS", "ANCASH", "APURIMAC", "AREQUIPA", "AYACUCHO", "CAJAMARCA", "CALLAO", "CUSCO", "HUANCAVELICA", "HUANUCO",
  "ICA", "JUNIN", "LA LIBERTAD", "LAMBAYEQUE", "LIMA", "LORETO", "MADRE DE DIOS", "MOQUEGUA", "PASCO", "PIURA",
  "PUNO", "SAN MARTIN", "TACNA", "TUMBES", "UCAYALI"
];
// AÑADE ESTAS LISTAS DE DATOS AL INICIO DE TU SCRIPT
const profesiones = [
    "ADMINISTRACION DE EMPRESAS", "ADMINISTRACION EN TURISMO", "AGRONOMIA", "ANALISIS DE DATOS", "ANTROPOLOGIA", "ARQUITECTURA", "ARTE Y DISEÑO GRAFICO", "BIOLOGIA", "BIOTECNOLOGIA", "BIBLIOTECOLOGIA Y CIENCIAS DE LA INFORMACION", "CIENCIAS DE LA COMPUTACION", "CIENCIAS DE LA COMUNICACIÓN", "CIENCIAS DEL DEPORTE", "CIENCIAS POLITICAS", "CINE Y TELEVISION", "COMUNICACIÓN SOCIAL", "CONTABILIDAD", "DANZA", "DERECHO", "DISEÑO DE INTERIORES", "DISEÑO DE MODA", "DISEÑO DE PRODUCTOS", "ECONOMIA", "EDUCACION FISICA", "EDUCACION INICIAL", "EDUCACION PRIMARIA", "EDUCACION SECUNDARIA", "ENFERMERIA", "ESTADISTICA", "ESTADISTICA E INFORMATICA", "FARMACIA Y BIOQUIMICA", "FILOSOFIA", "FISICA", "FISIOTERAPIA", "GASTRONOMIA", "GESTION CULTURAL", "HISTORIA", "INGENIERIA AMBIENTAL", "INGENIERIA BIOMEDICA", "INGENIERIA CIVIL", "INGENIERIA DE ALIMENTOS", "INGENIERIA DE MINAS", "INGENIERIA DE SISTEMAS", "INGENIERIA DE SOFTWARE", "INGENIERIA DE TELECOMUNICACIONES", "INGENIERIA ELECTRONICA", "INGENIERIA ELECTRICA", "INGENIERIA GEOLOGICA", "INGENIERIA INDUSTRIAL", "INGENIERIA MECANICA", "INGENIERIA MECATRONICA", "INGENIERIA METALURGICA", "INGENIERIA QUIMICA", "INGENIERIA TEXTIL", "LABORATORIO CLINICO", "LITERATURA", "LINGÜÍSTICA", "MARKETING", "MATEMATICAS", "MATEMATICAS APLICADAS", "MEDICINA HUMANA", "MEDICINA VETERINARIA", "MUSICA", "NUTRICION Y DIETETICA", "OBSTETRICIA", "ODONTOLOGIA", "OPTOMETRIA", "PSICOLOGIA", "PUBLICIDAD", "QUIMICA", "RELACIONES INTERNACIONALES", "SOCIOLOGIA", "TEATRO", "TECNICO EN ADMINISTRACION", "TECNICO EN COMERCIO EXTERIOR", "TECNICO EN COMPUTACION E INFORMATICA", "TECNICO EN CONTABILIDAD", "TECNICO EN ELECTRICIDAD", "TECNICO EN ELECTRONICA INDUSTRIAL", "TECNICO EN ENFERMERIA", "TECNICO EN FARMACIA", "TECNICO EN FISIOTERAPIA", "TECNICO EN GASTRONOMIA", "TECNICO EN HOTELERIA Y TURISMO", "TECNICO EN INSTRUMENTACION QUIRURGICA", "TECNICO EN LABORATORIO CLINICO", "TECNICO EN LOGISTICA", "TECNICO EN MARKETING", "TECNICO EN MECANICA AUTOMOTRIZ", "TECNICO EN OPTOMETRIA", "TECNICO EN RADIOLOGIA", "TECNICO EN TELECOMUNICACIONES", "TERAPIA FISICA Y REHABILITACION", "TERAPIA OCUPACIONAL", "TRABAJO SOCIAL", "TRADUCCION E INTERPRETACION", "TURISMO Y HOTELERIA", "ZOOTECNIA", "NO PROFESIONAL/ ESTUDIANTE"
].sort();

const especialidadesMedicina = [
    "ADMINISTRACION EN SALUD", "ALERGOLOGIA", "ALGOLOGIA", "ANALISIS CLINICO", "ANATOMIA PATOLOGICA", "ANESTESIOLOGIA", "ANGIOLOGIA", "AUDITORIA MEDICA", "BIOQUIMICA CLINICA", "CARDIOLOGIA", "CIRUGIA CARDIACA", "CIRUGIA CRANEOFACIAL", "CIRUGIA GENERAL", "CIRUGIA ONCOLOGICA", "CIRUGIA ORAL Y MAXILOFACIAL", "CIRUGIA ORTOPEDICA", "CIRUGIA PEDIATRICA", "CIRUGIA PLASTICA", "CIRUGIA TORACICA", "CIRUGIA VASCULAR", "COLOPROCTOLOGIA", "DERMATOLOGIA", "EMBRIOLOGIA", "ENDOCRINOLOGIA", "EPIDEMIOLOGIA", "ESTOMATOLOGIA", "FARMACOLOGIA", "FARMACOLOGIA CLINICA", "FONIATRIA", "GASTROENTEROLOGIA", "GENETICA", "GENETICA MEDICA", "GERIATRIA", "GINECOLOGIA Y OBSTETRICIA O TOCOLOGIA", "HEMATOLOGIA", "HEPATOLOGIA", "INFECTOLOGIA", "INMUNOLOGIA", "MEDICINA AEROESPACIAL", "MEDICINA DE EMERGENCIA", "MEDICINA DEL DEPORTE", "MEDICINA DEL TRABAJO", "MEDICINA FAMILIAR Y COMUNITARIA", "MEDICINA FISICA Y REHABILITACION", "MEDICINA FORENSE", "MEDICINA INTENSIVA", "MEDICINA INTERNA", "MEDICINA NUCLEAR", "MEDICINA PALIATIVA", "MEDICINA PREVENTIVA Y SALUD PUBLICA", "MICROBIOLOGIA Y PARASITOLOGIA", "NEFROLOGIA", "NEUMOLOGIA", "NEUROCIRUGIA", "NEUROFISIOLOGIA CLINICA", "NEUROLOGIA", "NUTRIOLOGIA", "ODONTOLOGIA", "OFTALMOLOGIA", "ONCOLOGIA MEDICA", "ONCOLOGIA RADIOTERAPICA", "OTORRINOLARINGOLOGIA", "PEDIATRIA", "PSIQUIATRIA", "RADIOLOGIA", "REUMATOLOGIA", "SALUD PUBLICA", "TOXICOLOGIA", "TRAUMATOLOGIA Y ORTOPEDIA", "UROLOGIA"
].sort();

const especialidadesEnfermeria = [
    "ENFERMERIA NEONATAL", "ENFERMERIA PEDIATRICA", "ENFERMERIA OBSTETRICO-GINECOLOGICA", "ENFERMERIA GERIATRICA", "ENFERMERIA DE CUIDADOS PALIATIVOS", "ENFERMERIA INTENSIVA", "ENFERMERIA ONCOLOGICA", "ENFERMERIA DE URGENCIAS", "ENFERMERIA FAMILIAR Y COMUNITARIA", "ENFERMERIA ADMINISTRATIVA Y DE GESTION"
].sort();

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
    // AÑADE ESTAS LÍNEAS EN LA SECCIÓN DE "REFERENCIAS A ELEMENTOS DEL DOM"
    const profesionSelect = document.getElementById('profesion');
    const especialidadContainer = document.getElementById('especialidadContainer');
    const especialidadSelect = document.getElementById('especialidad');
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
    paisSelect.value = "PERU"; // Preseleccionar Perú
    populateSelect(departamentoSelect, departamentosPeru);
    populateSelect(listaUniversidades, universidades.sort());


    // --- LÓGICA DE VISIBILIDAD DE CAMPOS ---
    const handlePaisChange = () => {
        if (paisSelect.value === 'PERU') {
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
        } else if (selectedValue === 'UNIVERSIDAD') {
            universidadContainer.classList.remove('hidden-field');
            listaUniversidades.required = true;
        } else if (selectedValue === 'OTRA') {
            otraOrganizacionContainer.classList.remove('hidden-field');
            nombreOtraOrganizacion.required = true;
        }
    };

    // AÑADE ESTA NUEVA FUNCIÓN COMPLETA
    const handleProfesionChange = () => {
        const selectedProfesion = profesionSelect.value;
        
        // Vaciar y ocultar por defecto
        especialidadSelect.innerHTML = '';
        especialidadContainer.classList.add('hidden-field');
        especialidadSelect.required = false;

        if (selectedProfesion === 'MEDICINA HUMANA') {
            populateSelect(especialidadSelect, especialidadesMedicina);
            especialidadSelect.required = true;
            especialidadContainer.classList.remove('hidden-field');
        } else if (selectedProfesion === 'ENFERMERIA') {
            populateSelect(especialidadSelect, especialidadesEnfermeria);
            especialidadSelect.required = true;
            especialidadContainer.classList.remove('hidden-field');
        }
    };
// Y AHORA, LLENA EL MENÚ DE PROFESIONES
    populateSelect(profesionSelect, profesiones);
// Y AHORA, LLENA EL MENÚ DE PROFESIONES
populateSelect(profesionSelect, profesiones);
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
    // AÑADE ESTE EVENT LISTENER EN LA SECCIÓN "EVENT LISTENERS"
    profesionSelect.addEventListener('change', handleProfesionChange);
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
    // ===== ESTA ES LA LÍNEA CLAVE QUE AÑADIMOS =====
    // Aquí cambiamos el valor del check por el texto que queremos guardar.
    dataObject.declaro = terminosAceptados ? 'Acepto' : 'No Acepto';
    // ===============================================
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


// Y AÑADE LA LLAMADA A LA FUNCIÓN AL FINAL DEL ARCHIVO, EN LA SECCIÓN "ESTADO INICIAL"
handleProfesionChange();
});