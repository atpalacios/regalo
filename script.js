const frases = [
"No existen palabras suficientes para describir lo agradecida que me siento por tenerte en mi vida.",
"Eres una de las personas más hermosas, honestas, nobles y divertidas que he conocido.",
"Todos los días le doy gracias a Dios y al universo por haberte puesto en mi camino.",
"Gracias por cada risa.",
"Gracias por cada consejo.",
"Gracias por cada momento compartido.",
"Y gracias por ser ese refugio bonito que tantas veces he necesitado.",
"Compartir mi vida contigo ha sido uno de los regalos más especiales que me ha dado la vida.",
"Te amo con todo mi corazón, zorrita. ❤️",
"Y si hay algo que deseo para ti, es que nunca olvides lo increíble que eres.",
"Nunca cambies esa esencia tan única que ilumina la vida de quienes te rodean.",
"Mereces todo el amor, toda la tranquilidad, toda la felicidad y todas las cosas hermosas que existen en este mundo.",
"Sé que a veces la vida puede sentirse pesada.",
"Sé que hay días en los que todo parece más difícil.",
"Pero también sé quién eres.",
"Sé la fuerza que llevas dentro.",
"Sé la inteligencia que te guía.",
"Y sé el corazón tan grande que tienes.",
"Por eso estoy segura de que, pase lo que pase, encontrarás la manera de salir adelante.",
"Porque siempre lo haces.",
"Nunca dejes de creer en ti.",
"Yo creo en ti incluso en los momentos en los que tú dudas.",
"Estoy muy orgullosa de la mujer que eres.",
"De todo lo que has superado.",
"Y de todo lo que aún vas a lograr.",
"Deseo que la vida te abrace bonito.",
"Que te cuide.",
"Y que te devuelva multiplicado todo el amor y la bondad que entregas cada día.",
"Y, sobre todo, mi amor, ten un feliz cumpleaños. 🎂❤️",
"Espero que este nuevo año de vida esté lleno de momentos hermosos, sueños cumplidos y muchísima felicidad.",
"Porque nadie merece tantas cosas bonitas como tú.",
"También quiero decirte algo que me apena un poquito.",
"En este momento no puedo darte tu regalo de cumpleaños como me gustaría.",
"Peeeeeero quiero que sepas que no olvidé esta fecha.",
"Y tampoco voy a dejar pasar una ocasión tan importante para mí.",
"Tengo tu regalo presente en mi corazón.",
"Y en cuanto tenga los medios para hacerlo, te lo entregaré con todo el amor del mundo.",
"Quizás no llegue exactamente el día de tu cumpleaños.",
"¡Pero llegará, eso te lo prometo! ❤️",
"Siempre voy a sentirme afortunada de haberte encontrado.",
"Te amo muchísimo. ❤️",
]

const fotos = [
    "img/WhatsApp Image 2026-07-13 at 10.28.34 PM (1).jpeg",
    "img/WhatsApp Image 2026-07-13 at 10.28.34 PM (2).jpeg",
    "img/WhatsApp Image 2026-07-13 at 10.28.34 PM (3).jpeg",
    "img/WhatsApp Image 2026-07-13 at 10.28.34 PM (4).jpeg",
    "img/WhatsApp Image 2026-07-13 at 10.28.34 PM (5).jpeg",
    "img/WhatsApp Image 2026-07-13 at 10.28.34 PM (6).jpeg",
    "img/WhatsApp Image 2026-07-13 at 10.28.34 PM (7).jpeg",
    "img/WhatsApp Image 2026-07-13 at 10.28.34 PM (8).jpeg",
    "img/WhatsApp Image 2026-07-13 at 10.28.34 PM.jpeg",
    "img/WhatsApp Video 2026-07-13 at 10.29.34 PM.mp4",
];

const frasesIniciales = [
    "Toca la pantalla",
    "Vidaaa preciosa ❤️"
]

const content = document.getElementById("content");

let photosIndex = 0;
let initialIndex = 0;

let probabilityText = 50;
let initialPhrases = false;

let indiceFrase = 0;

function showItem()
{
    if (!initialPhrases)
    {
        const item = frasesIniciales[initialIndex];
        content.innerHTML = `<p>${item}</p>`;
        initialIndex++
        return
    }

    let probability = Math.floor(Math.random() * 100);

    if (probability < probabilityText)
        {
            const item = frases[indiceFrase];
            content.innerHTML = `<p>${item}</p>`;

            indiceFrase++;

            if (indiceFrase >= frases.length)
            {
                indiceFrase = 0;
            }
        }
    else
    {
        const archivo = fotos[photosIndex];

if (archivo.toLowerCase().endsWith(".mp4")) {
    content.innerHTML = `
        <video autoplay muted loop playsinline controls>
            <source src="${archivo}" type="video/mp4">
            Tu navegador no soporta videos.
        </video>
    `;
} else {
    content.innerHTML = `<img src="${archivo}" alt="">`;
}

photosIndex++;

        if (photosIndex >= fotos.length)
        {
                photosIndex = 0;
        }
    }
}

showItem();

document.body.addEventListener("click",()=>{

    showItem();
    if (!initialPhrases){
        if (initialIndex >= frasesIniciales.length)
            initialPhrases = true;
    }
    
});