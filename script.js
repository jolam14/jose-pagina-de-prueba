const venezuelaData = {
    "Amazonas": ["Alto Orinoco", "Atabapo", "Atures", "Autana", "Manapiare", "Maroa", "Río Negro"],
    "Anzoátegui": ["Anaco", "Aragua", "Bolívar", "Bruzual", "Cajigal", "Carvajal", "Diego Bautista Urbaneja", "Freites", "Guanta", "Guanipa", "Independencia", "Libertad", "McGregor", "Miranda", "Monagas", "Peñalver", "Píritu", "San Juan de Capistrano", "Santa Ana", "Simón Rodríguez", "Sotillo"],
    "Apure": ["Achaguas", "Biruaca", "Muñoz", "Páez", "Pedro Camejo", "Rómulo Gallegos", "San Fernando"],
    "Aragua": ["Bolívar", "Camatagua", "Francisco Linares Alcántara", "Girardot", "José Ángel Lamas", "José Félix Ribas", "José Rafael Revenga", "Libertador", "Mario Briceño Iragorry", "Ocumare de la Costa de Oro", "San Casimiro", "San Sebastián", "Santiago Mariño", "Sucre", "Tovar", "Urdaneta", "Zamora"],
    "Barinas": ["Alberto Arvelo Torrealba", "Andrés Eloy Blanco", "Antonio José de Sucre", "Arismendi", "Barinas", "Bolívar", "Cruz Paredes", "Ezequiel Zamora", "Obispos", "Pedraza", "Rojas", "Sosa"],
    "Bolívar": ["Angostura del Orinoco", "Bolivariano Angostura", "Caroní", "Cedeño", "El Callao", "Gran Sabana", "Padre Pedro Chien", "Piar", "Roscio", "Sifontes", "Sucre"],
    "Carabobo": ["Bejuma", "Carlos Arvelo", "Diego Ibarra", "Guacara", "Juan José Mora", "Libertador", "Los Guayos", "Miranda", "Montalbán", "Naguanagua", "Puerto Cabello", "San Diego", "San Joaquín", "Valencia"],
    "Cojedes": ["Anzoátegui", "El Pao de San Juan Bautista", "Falcón", "Girardot", "Lima Blanco", "Ricaurte", "Rómulo Gallegos", "San Carlos", "Tinaco"],
    "Delta Amacuro": ["Antonio Díaz", "Casacoima", "Pedernales", "Tucupita"],
    "Falcón": ["Acosta", "Bolívar", "Buchivacoa", "Cacique Manaure", "Carirubana", "Colina", "Dabajuro", "Democracia", "Falcón", "Federación", "Jacura", "Los Taques", "Mauroa", "Miranda", "Monseñor Iturriza", "Palmasola", "Petit", "Píritu", "San Francisco", "Silva", "Sucre", "Tocópero", "Unión", "Urumaco", "Zamora"],
    "Guárico": ["Camaguán", "Chaguaramas", "El Socorro", "Francisco de Miranda", "José Félix Ribas", "José Tadeo Monagas", "Juan Germán Roscio", "Julián Mellado", "Las Mercedes", "Leonardo Infante", "Ortiz", "Pedro Zaraza", "San Gerónimo de Guayabal", "San José de Guaribe", "Santa María de Ipire"],
    "La Guaira": ["Vargas"],
    "Lara": ["Andrés Eloy Blanco", "Crespo", "Iribarren", "Jiménez", "Morán", "Palavecino", "Simón Planas", "Torres", "Urdaneta"],
    "Mérida": ["Alberto Adriani", "Andrés Bello", "Antonio Pinto Salinas", "Aricagua", "Arzobispo Chacón", "Campo Elías", "Caracciolo Parra Olmedo", "Cardenal Quintero", "Guaraque", "Julio César Salas", "Justo Briceño", "Libertador", "Miranda", "Obispo Ramos de Lora", "Padre Noguera", "Pueblo Llano", "Rangel", "Rivas Dávila", "Santos Marquina", "Sucre", "Tovar", "Tulio Febres Cordero", "Zea"],
    "Miranda": ["Acevedo", "Andrés Bello", "Baruta", "Brión", "Buroz", "Carrizal", "Chacao", "Cristóbal Rojas", "El Hatillo", "Guaicaipuro", "Independencia", "Lander", "Los Salias", "Páez", "Paz Castillo", "Pedro Gual", "Plaza", "Simón Bolívar", "Sucre", "Urdaneta", "Zamora"],
    "Monagas": ["Acosta", "Aguasay", "Bolívar", "Caripe", "Cedeño", "Ezequiel Zamora", "Libertador", "Maturín", "Piar", "Punceres", "Santa Bárbara", "Sotillo", "Uracoa"],
    "Nueva Esparta": ["Antolín del Campo", "Arismendi", "Díaz", "García", "Gómez", "Maneiro", "Marcano", "Mariño", "Península de Macanao", "Tubores", "Villalba"],
    "Portuguesa": ["Agua Blanca", "Araure", "Esteller", "Guanare", "Guanarito", "Monseñor José Vicente de Unda", "Ospino", "Páez", "Papelón", "San Genaro de Boconoíto", "San Rafael de Onoto", "Santa Rosalía", "Sucre", "Turén"],
    "Sucre": ["Andrés Eloy Blanco", "Andrés Mata", "Arismendi", "Benítez", "Bermúdez", "Bolívar", "Cajigal", "Cruz Salmerón Acosta", "Libertador", "Mariño", "Mejía", "Montes", "Ribero", "Sucre", "Valdez"],
    "Táchira": ["Andrés Bello", "Antonio Rómulo Costa", "Ayacucho", "Bolívar", "Cárdenas", "Córdoba", "Fernández Feo", "Francisco de Miranda", "García de Hevia", "Guásimos", "Independencia", "Jáuregui", "José María Vargas", "Junín", "Libertad", "Libertador", "Lobatera", "Michelena", "Panamericano", "Pedro María Ureña", "Rafael Urdaneta", "Samuel Darío Maldonado", "San Cristóbal", "San Judas Tadeo", "Seboruco", "Simón Rodríguez", "Sucre", "Torbes", "Uribante"],
    "Trujillo": ["Andrés Bello", "Boconó", "Bolívar", "Candelaria", "Carache", "Escuque", "José Felipe Márquez Cañizales", "Juan Vicente Campo Elías", "La Ceiba", "Miranda", "Monte Carmelo", "Motatán", "Pampán", "Pampanito", "Rafael Rangel", "San Rafael de Carvajal", "Sucre", "Trujillo", "Urdaneta", "Valera"],
    "Yaracuy": ["Arístides Bastidas", "Bolívar", "Bruzual", "Cocorote", "Independencia", "José Antonio Páez", "La Trinidad", "Manuel Monge", "Nirgua", "Peña", "San Felipe", "Sucre", "Urachiche", "Veroes"],
    "Zulia": ["Almirante Padilla", "Baralt", "Cabimas", "Catatumbo", "Colón", "Francisco Javier Pulgar", "Guajira", "Jesús Enrique Lossada", "Jesús María Semprún", "La Cañada de Urdaneta", "Lagunillas", "Machiques de Perijá", "Mara", "Maracaibo", "Miranda", "Rosario de Perijá", "San Francisco", "Santa Rita", "Simón Bolívar", "Sucre", "Valmore Rodríguez"],
    "Distrito Capital": ["Libertador"],
    "Dependencias Federales": ["(No posee municipios)"]
};

// Datos para los 8 municipios con equipos en la LVBP, agregando su paleta de colores intensa
const municipalityInfo = {
    "Libertador": {
        poblacion: "2,089,015 hab. (Aprox.)",
        himno: "¡Caracas, allí está! / Sus techos rojos, su Ávila imponente...",
        lvbp: {
            nombre: "Leones del Caracas",
            apodo: "Caraquistas / Melenudos",
            fans: "La fanaticada más grande de Venezuela (aprox. 35-40% del país).",
            colores: { bg: "#FFD500", text: "#00154F" } // Amarillo Intenso y Brillante / Azul Marino muy profundo
        }
    },
    "Valencia": {
        poblacion: "1,484,430 hab. (Aprox.)",
        himno: "Oh Valencia, la heroica y leal, bajo un cielo de luz y esplendor...",
        lvbp: {
            nombre: "Navegantes del Magallanes",
            apodo: "Magallaneros / Los Eléctricos / La Nave Turca",
            fans: "La segunda fanaticada más grande del país, los 'Eternos Rivales'.",
            colores: { bg: "#0033A0", text: "#FFF200" } // Azul Eléctrico vibrante / Amarillo puro brillante
        }
    },
    "Iribarren": {
        poblacion: "1,059,092 hab. (Aprox.)",
        himno: "¡Oh, Barquisimeto, ciudad musical! En tus calles y plazas hay amor...",
        lvbp: {
            nombre: "Cardenales de Lara",
            apodo: "Cardenaleros / Los Pájaros Rojos",
            fans: "La tercera gran fanaticada, muy ruidosos dominando el occidente-centro.",
            colores: { bg: "#E31837", text: "#FFFFFF" } // Rojo Vivo Sangre ultra intenso / Blanco
        }
    },
    "Maracaibo": {
        poblacion: "1,551,539 hab. (Aprox.)",
        himno: "Sobre palmas y lauros de oro... (Himno del Zulia usado en Maracaibo)",
        lvbp: {
            nombre: "Águilas del Zulia",
            apodo: "Aguiluchos / Rapaces / Los Naranjas",
            fans: "Dominan de forma abrumadora en su región, afición muy regionalista.",
            colores: { bg: "#FF5F05", text: "#000000" } // Naranja Eléctrico Fluor / Negro intenso
        }
    },
    "Girardot": {
        poblacion: "407,109 hab. (Aprox.)",
        himno: "Maracay, Maracay, ciudad jardín ardiente...",
        lvbp: {
            nombre: "Tigres de Aragua",
            apodo: "Tigreros / Bengalíes / La Dinastía",
            fans: "Creciente fanaticada en el centro gracias a su gran Dinastía de los 2000.",
            colores: { bg: "#0C2340", text: "#FF0000" } // Azul Noche puro / Rojo encendido fuego
        }
    },
    "Vargas": {
        poblacion: "344,309 hab. (Aprox.)",
        himno: "La Guaira, puerto de mar en la inmensidad del Caribe... ",
        lvbp: {
            nombre: "Tiburones de La Guaira",
            apodo: "Escualos / Los Salados",
            fans: "Afición súper alegre y caribeña que siempre disfruta a ritmo de la 'Samba'.",
            colores: { bg: "#00BFFF", text: "#C8102E" } // Azul Cielo tropical deslumbrante (DeepSkyBlue) / Rojo fuerte
        }
    },
    "Sotillo": {
        poblacion: "244,728 hab. (Aprox.)",
        himno: "Puerto La Cruz, perla oriental en las orillas de nuestro mar...",
        lvbp: {
            nombre: "Caribes de Anzoátegui",
            apodo: "Los Caribes / La Tribu Oriental",
            fans: "Predominantes y dueños absolutos de la afición del oriente del país.",
            colores: { bg: "#003882", text: "#FF7300" } // Azul Rey fuerte y sólido / Naranja encendido
        }
    },
    "Mariño": {
        poblacion: "97,830 hab. (Aprox.)",
        himno: "Porlamar ciudad marinera, cuna ilustre del grande y gentil...",
        lvbp: {
            nombre: "Bravos de Margarita",
            apodo: "Los Bravos / La Máquina Insular",
            fans: "Núcleo de la isla, afición folclórica y familiar del sector margariteño.",
            colores: { bg: "#00E5FF", text: "#000000" } // Cian brillante (muy neón) / Negro
        }
    }
};

const stateSelect = document.getElementById('estado');
const municipalitySelect = document.getElementById('municipio');

const selectorContainer = document.querySelector('.selector-container');
const leyendaDiv = document.getElementById('leyenda');
const poblacionSpan = document.getElementById('poblacion');
const himnoEm = document.getElementById('himno');

const lvbpSection = document.getElementById('lvbp-section');
const equipoNombreSpan = document.getElementById('equipo-nombre');
const equipoApodoSpan = document.getElementById('equipo-apodo');
const equipoFansSpan = document.getElementById('equipo-fans');

// *** Función para resetear el Estilo general a limpio ***
function resetTheme() {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";

    selectorContainer.style.backgroundColor = "#f9f9f9";
    selectorContainer.style.color = "#000000";

    leyendaDiv.style.backgroundColor = "#f1f8e9";
    leyendaDiv.style.color = "#000000";
    leyendaDiv.style.borderColor = "#ccc";

    const tituloLvbp = document.querySelector('#lvbp-section h4');
    if (tituloLvbp) tituloLvbp.style.color = "#1e3a8a";
}

// *** Función para Aplicar Temática de equipo usando colores ***
function applyTheme(bg, text) {
    document.body.style.backgroundColor = bg;
    document.body.style.color = text;

    // El fondo de las cajas toma el color inverso para que resalten potentemente
    selectorContainer.style.backgroundColor = text;
    selectorContainer.style.color = bg;

    leyendaDiv.style.backgroundColor = text;
    leyendaDiv.style.color = bg;
    leyendaDiv.style.borderColor = bg;

    const tituloLvbp = document.querySelector('#lvbp-section h4');
    if (tituloLvbp) {
        tituloLvbp.style.color = bg;
    }
}

// Poblamos el select de estados con los datos iniciales
for (const estado in venezuelaData) {
    const option = document.createElement('option');
    option.value = estado;
    option.textContent = estado;
    stateSelect.appendChild(option);
}

// Evento al cambiar el estado
stateSelect.addEventListener('change', function () {
    const selectedState = this.value;

    // Limpiar options anteriores, ocultar elementos visuales y volver a aspecto por defecto
    municipalitySelect.innerHTML = '<option value="">Seleccione un municipio...</option>';
    leyendaDiv.style.display = 'none';
    lvbpSection.style.display = 'none';
    resetTheme();

    if (selectedState) {
        // Habilitar el select de municipios
        municipalitySelect.disabled = false;
        const municipalities = venezuelaData[selectedState];

        municipalities.forEach(municipio => {
            const option = document.createElement('option');
            option.value = municipio;
            option.textContent = municipio;
            municipalitySelect.appendChild(option);
        });
    } else {
        municipalitySelect.disabled = true;
    }
});

// Evento al cambiar el municipio
municipalitySelect.addEventListener('change', function () {
    const selectedMunicipality = this.value;

    if (selectedMunicipality && selectedMunicipality !== "") {
        // Mostrar la división base
        leyendaDiv.style.display = 'block';

        if (municipalityInfo[selectedMunicipality]) {
            poblacionSpan.textContent = municipalityInfo[selectedMunicipality].poblacion;
            himnoEm.textContent = municipalityInfo[selectedMunicipality].himno;

            // Verificamos si existe equipo de LVBP
            if (municipalityInfo[selectedMunicipality].lvbp) {
                lvbpSection.style.display = 'block';
                equipoNombreSpan.textContent = municipalityInfo[selectedMunicipality].lvbp.nombre;
                equipoApodoSpan.textContent = municipalityInfo[selectedMunicipality].lvbp.apodo;
                equipoFansSpan.textContent = municipalityInfo[selectedMunicipality].lvbp.fans;

                // ⚾ APLICAMOS EL COLOR DEL EQUIPO COMO TEMA (AHORA MUCHO MÁS VIBRANTE) ⚾
                const teamBg = municipalityInfo[selectedMunicipality].lvbp.colores.bg;
                const teamText = municipalityInfo[selectedMunicipality].lvbp.colores.text;
                applyTheme(teamBg, teamText);
            } else {
                lvbpSection.style.display = 'none';
                resetTheme(); // Municipio sin equipo -> no tema local
            }
        } else {
            poblacionSpan.textContent = "Dato local en recopilación para " + selectedMunicipality;
            himnoEm.innerHTML = "<em>Dato del himno local en recopilación.</em>";
            lvbpSection.style.display = 'none';
            resetTheme();
        }
    } else {
        leyendaDiv.style.display = 'none';
        lvbpSection.style.display = 'none';
        resetTheme();
    }
});
