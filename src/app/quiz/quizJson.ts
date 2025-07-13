import { CategoryKey } from '../categories.service';

export interface Questions {
  question: string;
  id: string;
  options: Options[];
}

export interface Options {
  value: string;
  isCorrect: boolean;
  imgSrc: string;
}

type QuizJsonInt = Record<Exclude<CategoryKey, 'custom'>, Questions[]>;

export const quizJson: QuizJsonInt = {
  history: [
    {
      question: '¿En qué año comenzó la Revolución Francesa?',
      id: 'history1',
      options: [
        { value: '1810', isCorrect: false, imgSrc: '/optionsImgs/historyImgs/1810.webp' },
        { value: '1776', isCorrect: false, imgSrc: '/optionsImgs/historyImgs/1776.webp' },
        { value: '1789', isCorrect: true, imgSrc: '/optionsImgs/historyImgs/1789.webp' },
        { value: '1804', isCorrect: false, imgSrc: '/optionsImgs/historyImgs/1804.webp' },
      ],
    },
    {
      question: '¿Qué país fue liderado por Simón Bolívar en su independencia?',
      id: 'history2',
      options: [
        {
          value: 'Argentina',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/argentina.webp',
        },
        { value: 'Perú', isCorrect: false, imgSrc: '/optionsImgs/historyImgs/peru.webp' },
        {
          value: 'Venezuela',
          isCorrect: true,
          imgSrc: '/optionsImgs/historyImgs/venezuela.webp',
        },
        {
          value: 'México',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/mexico.webp',
        },
      ],
    },
    {
      question: '¿En qué año Cristóbal Colón llegó a América?',
      id: 'history3',
      options: [
        { value: '1492', isCorrect: true, imgSrc: '/optionsImgs/historyImgs/1492.webp' },
        { value: '1500', isCorrect: false, imgSrc: '/optionsImgs/historyImgs/1500.webp' },
        { value: '1519', isCorrect: false, imgSrc: '/optionsImgs/historyImgs/1519.webp' },
        { value: '1453', isCorrect: false, imgSrc: '/optionsImgs/historyImgs/1453.webp' },
      ],
    },
    {
      question:
        '¿Cuál fue la civilización precolombina que construyó Machu Picchu?',
      id: 'history4',
      options: [
        { value: 'Maya', isCorrect: false, imgSrc: '/optionsImgs/historyImgs/maya.webp' },
        {
          value: 'Azteca',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/azteca.webp',
        },
        { value: 'Inca', isCorrect: true, imgSrc: '/optionsImgs/historyImgs/inca.webp' },
        {
          value: 'Olmeca',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/olmecas.webp',
        },
      ],
    },
    {
      question:
        '¿En qué ciudad se firmó la Declaración de Independencia de Estados Unidos?',
      id: 'history5',
      options: [
        {
          value: 'Nueva York',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/new-york.webp',
        },
        {
          value: 'Boston',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/boston.webp',
        },
        {
          value: 'Washington D.C.',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/washington.webp',
        },
        {
          value: 'Filadelfia',
          isCorrect: true,
          imgSrc: '/optionsImgs/historyImgs/filadelfia.webp',
        },
      ],
    },
    {
      question: '¿Qué hecho histórico se conmemora el 5 de mayo en México?',
      id: 'history6',
      options: [
        {
          value: 'La Constitución de 1917',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/constitucion.webp',
        },
        {
          value: 'La Revolución Mexicana',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/revolucion.webp',
        },
        {
          value: 'La Independencia de México',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/independencia.webp',
        },
        {
          value: 'La Batalla de Puebla',
          isCorrect: true,
          imgSrc: '/optionsImgs/historyImgs/puebla.webp',
        },
      ],
    },
    {
      question:
        '¿Qué muro dividió una ciudad en Europa durante la Guerra Fría?',
      id: 'history7',
      options: [
        {
          value: 'Muro de Viena',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/viena.webp',
        },
        {
          value: 'Muro de Berlín',
          isCorrect: true,
          imgSrc: '/optionsImgs/historyImgs/berlin.webp',
        },
        {
          value: 'Muro de Praga',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/praga.webp',
        },
        {
          value: 'Muro de Varsovia',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/varsovia.webp',
        },
      ],
    },
    {
      question: '¿Quién fue el primer emperador romano?',
      id: 'history8',
      options: [
        {
          value: 'Julio César',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/julio.webp',
        },
        {
          value: 'Augusto',
          isCorrect: true,
          imgSrc: '/optionsImgs/historyImgs/augusto.webp',
        },
        {
          value: 'Tiberio',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/tiberio.webp',
        },
        { value: 'Nerón', isCorrect: false, imgSrc: '/optionsImgs/historyImgs/neron.webp' },
      ],
    },
  ],
  entertainment: [
    {
      question: '¿Cuál es el nombre del superhéroe alter ego de Bruce Wayne?',
      id: 'e1',
      options: [
        {
          value: 'Spider-Man',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/spiderman.webp',
        },
        {
          value: 'Superman',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/superman.webp',
        },
        {
          value: 'Iron Man',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/ironman.webp',
        },
        {
          value: 'Batman',
          isCorrect: true,
          imgSrc: '/optionsImgs/entertainmentImgs/batman.webp',
        },
      ],
    },
    {
      question:
        '¿Qué saga cinematográfica incluye los personajes Frodo y Gandalf?',
      id: 'e2',
      options: [
        {
          value: 'Harry Potter',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/harrypoter.webp',
        },
        {
          value: 'El Señor de los Anillos',
          isCorrect: true,
          imgSrc: '/optionsImgs/entertainmentImgs/señor.webp',
        },
        {
          value: 'Narnia',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/narnia.webp',
        },
        {
          value: 'Star Wars',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/starwars.webp',
        },
      ],
    },
    {
      question: "¿Quién es el creador de la serie de televisión 'Los Simpson'?",
      id: 'e3',
      options: [
        {
          value: 'Mike Judge',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/mike.webp',
        },
        {
          value: 'Seth MacFarlane',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/seth.webp',
        },
        {
          value: 'Matt Groening',
          isCorrect: true,
          imgSrc: '/optionsImgs/entertainmentImgs/matt.webp',
        },
        {
          value: 'Trey Parker',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/trey.webp',
        },
      ],
    },
    {
      question:
        '¿Cuál es el título de la famosa serie donde aparece el personaje Walter White?',
      id: 'e4',
      options: [
        {
          value: 'Mad Men',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/madmen.webp',
        },
        {
          value: 'Breaking Bad',
          isCorrect: true,
          imgSrc: '/optionsImgs/entertainmentImgs/breakingbad.webp',
        },
        {
          value: 'Game of Thrones',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/gameofthrones.webp',
        },
        {
          value: 'The Sopranos',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/sopranos.webp',
        },
      ],
    },
    {
      question: '¿En qué película animada aparece el personaje Buzz Lightyear?',
      id: 'e5',
      options: [
        {
          value: 'Cars',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/cars.webp',
        },
        {
          value: 'Shrek',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/shrek.webp',
        },
        {
          value: 'Toy Story',
          isCorrect: true,
          imgSrc: '/optionsImgs/entertainmentImgs/toystory.webp',
        },
        {
          value: 'Los Increíbles',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/losincreibles.webp',
        },
      ],
    },
    {
      question: '¿Qué actor interpretó a Jack en la película Titanic?',
      id: 'e6',
      options: [
        {
          value: 'Johnny Depp',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/johnny.webp',
        },
        {
          value: 'Leonardo DiCaprio',
          isCorrect: true,
          imgSrc: '/optionsImgs/entertainmentImgs/dicaprio.webp',
        },
        {
          value: 'Tom Cruise',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/cruise.webp',
        },
        {
          value: 'Brad Pitt',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/brad.webp',
        },
      ],
    },
    {
      question: '¿Cuál de estas series es de origen español?',
      id: 'e7',
      options: [
        {
          value: 'Dark',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/dark.webp',
        },
        {
          value: 'La Casa de Papel',
          isCorrect: true,
          imgSrc: '/optionsImgs/entertainmentImgs/mike.webp',
        },
        {
          value: 'Stranger Things',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/casadepapel.webp',
        },
        {
          value: 'Breaking Bad',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/breakingbad.webp',
        },
      ],
    },
    {
      question:
        '¿Cuál es el nombre del mago protagonista en la saga de J.K. Rowling?',
      id: 'e8',
      options: [
        {
          value: 'Ron Weasley',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/weasley.webp',
        },
        {
          value: 'Harry Potter',
          isCorrect: true,
          imgSrc: '/optionsImgs/entertainmentImgs/harrypoter.webp',
        },
        {
          value: 'Severus Snape',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/snape.webp',
        },
        {
          value: 'Hermione Granger',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/hermione.webp',
        },
      ],
    },
    {
      question: "¿Qué banda británica lanzó el álbum 'Abbey Road'?",
      id: 'e9',
      options: [
        {
          value: 'Queen',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/queen.webp',
        },
        {
          value: 'The Beatles',
          isCorrect: true,
          imgSrc: '/optionsImgs/entertainmentImgs/beatles.webp',
        },
        {
          value: 'The Rolling Stones',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/rolling.webp',
        },
        {
          value: 'Oasis',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/oasis.webp',
        },
      ],
    },
  ],
  food: [
    {
      question: '¿Cuál es el principal ingrediente del guacamole?',
      id: 'f1',
      options: [
        {
          value: 'Cebolla',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/cebolla.webp',
        },
        { value: 'Chiles', isCorrect: false, imgSrc: '/optionsImgs/foodImgs/chiles.webp' },
        { value: 'Tomate', isCorrect: false, imgSrc: '/optionsImgs/foodImgs/tomate.webp' },
        {
          value: 'Aguacate',
          isCorrect: true,
          imgSrc: '/optionsImgs/foodImgs/aguacate.webp',
        },
      ],
    },
    {
      question: '¿De qué país es originaria la pizza?',
      id: 'f2',
      options: [
        {
          value: 'Estados Unidos',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/usa.webp',
        },
        { value: 'Italia', isCorrect: true, imgSrc: '/optionsImgs/foodImgs/italia.webp' },
        { value: 'España', isCorrect: false, imgSrc: '/optionsImgs/foodImgs/españa.webp' },
        {
          value: 'Francia',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/francia.webp',
        },
      ],
    },
    {
      question: '¿Qué tipo de pasta tiene forma de tubos?',
      id: 'f3',
      options: [
        {
          value: 'Raviolis',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/rabiolis.webp',
        },
        {
          value: 'Fusilli',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/fusilli.webp',
        },
        {
          value: 'Espaguetis',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/spaghetti.webp',
        },
        {
          value: 'Macarrones',
          isCorrect: true,
          imgSrc: '/optionsImgs/foodImgs/macarrones.webp',
        },
      ],
    },
    {
      question:
        '¿Cuál es el nombre del famoso platillo japonés de arroz con pescado crudo?',
      id: 'f4',
      options: [
        { value: 'Ramen', isCorrect: false, imgSrc: '/optionsImgs/foodImgs/ramen.webp' },
        {
          value: 'Tempura',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/tempura.webp',
        },
        { value: 'Gyoza', isCorrect: false, imgSrc: '/optionsImgs/foodImgs/gyoza.webp' },
        { value: 'Sushi', isCorrect: true, imgSrc: '/optionsImgs/foodImgs/sushi.webp' },
      ],
    },
    {
      question: '¿Con qué fruta se hace la sidra tradicional?',
      id: 'f5',
      options: [
        { value: 'Uva', isCorrect: false, imgSrc: '/optionsImgs/foodImgs/uva.webp' },
        { value: 'Manzana', isCorrect: true, imgSrc: '/optionsImgs/foodImgs/manzana.webp' },
        {
          value: 'Durazno',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/durazno.webp',
        },
        { value: 'Pera', isCorrect: false, imgSrc: '/optionsImgs/foodImgs/pera.webp' },
      ],
    },
    {
      question:
        '¿Qué bebida se obtiene a partir de la fermentación de la cebada?',
      id: 'f6',
      options: [
        { value: 'Sidra', isCorrect: false, imgSrc: '/optionsImgs/foodImgs/sidra.webp' },
        { value: 'Vino', isCorrect: false, imgSrc: '/optionsImgs/foodImgs/vino.webp' },
        {
          value: 'Tequila',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/tequila.webp',
        },
        { value: 'Cerveza', isCorrect: true, imgSrc: '/optionsImgs/foodImgs/cerveza.webp' },
      ],
    },
    {
      question: "¿Qué tipo de carne se utiliza en un 'cordero asado'?",
      id: 'f7',
      options: [
        {
          value: 'Carne de res',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/res.webp',
        },
        {
          value: 'Carne de pollo',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/pollo.webp',
        },
        {
          value: 'Carne de cordero',
          isCorrect: true,
          imgSrc: '/optionsImgs/foodImgs/cordero.webp',
        },
        {
          value: 'Carne de cerdo',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/cerdo.webp',
        },
      ],
    },
    {
      question: '¿Cuál es el ingrediente principal de la tortilla española?',
      id: 'f8',
      options: [
        { value: 'Papa', isCorrect: true, imgSrc: '/optionsImgs/foodImgs/papa.webp' },
        { value: 'Queso', isCorrect: false, imgSrc: '/optionsImgs/foodImgs/queso.webp' },
        {
          value: 'Calabacín',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/calabacin.webp',
        },
        {
          value: 'Champiñón',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/champiñon.webp',
        },
      ],
    },
  ],
  general: [
    {
      question: '¿Cuál es el océano más grande del mundo?',
      id: 'g1',
      options: [
        {
          value: 'Océano Ártico',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/artico.webp',
        },
        {
          value: 'Océano Índico',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/indico.webp',
        },
        {
          value: 'Océano Atlántico',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/atlantico.webp',
        },
        {
          value: 'Océano Pacífico',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/pacifico.webp',
        },
      ],
    },
    {
      question: '¿Cuántos planetas conforman el sistema solar?',
      id: 'g2',
      options: [
        {
          value: '10',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/10.webp',
        },
        {
          value: '9',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/9.webp',
        },
        {
          value: '8',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/8.webp',
        },
        {
          value: '7',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/7.webp',
        },
      ],
    },
    {
      question: '¿Qué gas es esencial para la respiración humana?',
      id: 'g3',
      options: [
        {
          value: 'Hidrógeno',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/hidrogeno.webp',
        },
        {
          value: 'Oxígeno',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/oxigeno.webp',
        },
        {
          value: 'Nitrógeno',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/nitro.webp',
        },
        {
          value: 'Dióxido de carbono',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/dioxido.webp',
        },
      ],
    },
    {
      question: '¿En qué continente se encuentra Egipto?',
      id: 'g4',
      options: [
        {
          value: 'Europa',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/europa.webp',
        },
        {
          value: 'Asia',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/asia.webp',
        },
        {
          value: 'América',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/america.webp',
        },
        {
          value: 'África',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/africa.webp',
        },
      ],
    },
    {
      question: '¿Qué instrumento mide la temperatura?',
      id: 'g5',
      options: [
        {
          value: 'Termómetro',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/termo.webp',
        },
        {
          value: 'Anemómetro',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/anemometro.webp',
        },
        {
          value: 'Altímetro',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/altimetro.webp',
        },
        {
          value: 'Barómetro',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/barometro.webp',
        },
      ],
    },
    {
      question: '¿Cuántos lados tiene un hexágono?',
      id: 'g6',
      options: [
        {
          value: '5',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/5.webp',
        },
        {
          value: '8',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/octagono.webp',
        },
        {
          value: '7',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/heptagono.webp',
        },
        {
          value: '6',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/hexagono.webp',
        },
      ],
    },
    {
      question: '¿Qué día se celebra el Día de la Tierra?',
      id: 'g7',
      options: [
        {
          value: '5 de junio',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/5junio.webp',
        },
        {
          value: '22 de abril',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/22abril.webp',
        },
        {
          value: '14 de febrero',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/14febrero.webp',
        },
        {
          value: '1 de mayo',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/1mayo.webp',
        },
      ],
    },
    {
      question: '¿Qué metal es líquido a temperatura ambiente?',
      id: 'g8',
      options: [
        {
          value: 'Hierro',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/hierro.webp',
        },
        {
          value: 'Aluminio',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/aluminio.webp',
        },
        {
          value: 'Mercurio',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/mercurio.webp',
        },
        {
          value: 'Plomo',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/plomo.webp',
        },
      ],
    },
  ],
  geography: [
    {
      question: '¿Cuál es el país más grande del mundo en superficie?',
      id: 'geo1',
      options: [
        { value: 'Rusia', isCorrect: true, imgSrc: '/optionsImgs/geoImgs/rusia.webp' },
        {
          value: 'Estados Unidos',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/usa.webp',
        },
        { value: 'China', isCorrect: false, imgSrc: '/optionsImgs/geoImgs/china.webp' },
        { value: 'Canadá', isCorrect: false, imgSrc: '/optionsImgs/geoImgs/canada.webp' },
      ],
    },
    {
      question: '¿Cuál es la capital de Australia?',
      id: 'geo2',
      options: [
        { value: 'Sídney', isCorrect: false, imgSrc: '/optionsImgs/geoImgs/sidney.webp' },
        {
          value: 'Melbourne',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/melbourne.webp',
        },
        {
          value: 'Canberra',
          isCorrect: true,
          imgSrc: '/optionsImgs/geoImgs/canberra.webp',
        },
        {
          value: 'Brisbane',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/brisbane.webp',
        },
      ],
    },
    {
      question: '¿En qué continente se encuentra el desierto del Sahara?',
      id: 'geo3',
      options: [
        {
          value: 'África',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/africa.webp',
        },
        { value: 'Asia', isCorrect: false, imgSrc: '/optionsImgs/generalImgs/asia.webp' },
        {
          value: 'América',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/america.webp',
        },
        {
          value: 'Europa',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/europa.webp',
        },
      ],
    },
    {
      question: '¿Qué país tiene la mayor cantidad de islas en el mundo?',
      id: 'geo4',
      options: [
        { value: 'Suecia', isCorrect: true, imgSrc: '/optionsImgs/geoImgs/suecia.webp' },
        {
          value: 'Indonesia',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/indonesia.webp',
        },
        {
          value: 'Filipinas',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/filipinas.webp',
        },
        { value: 'Noruega', isCorrect: false, imgSrc: '/optionsImgs/geoImgs/noruega.webp' },
      ],
    },
    {
      question: '¿Cuál es el río más largo del mundo?',
      id: 'geo5',
      options: [
        {
          value: 'Amazonas',
          isCorrect: true,
          imgSrc: '/optionsImgs/geoImgs/amazonas.webp',
        },
        { value: 'Nilo', isCorrect: false, imgSrc: '/optionsImgs/geoImgs/nilo.webp' },
        { value: 'Yangtsé', isCorrect: false, imgSrc: '/optionsImgs/geoImgs/yangtse.webp' },
        {
          value: 'Misisipi',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/misisipi.webp',
        },
      ],
    },
    {
      question: '¿Qué país tiene como capital a Varsovia?',
      id: 'geo6',
      options: [
        { value: 'Polonia', isCorrect: true, imgSrc: '/optionsImgs/geoImgs/polonia.webp' },
        { value: 'Hungría', isCorrect: false, imgSrc: '/optionsImgs/geoImgs/hungria.webp' },
        { value: 'Rumanía', isCorrect: false, imgSrc: '/optionsImgs/geoImgs/rumania.webp' },
        {
          value: 'Eslovaquia',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/eslovaquia.webp',
        },
      ],
    },
    {
      question: '¿Qué cordillera separa a España de Francia?',
      id: 'geo7',
      options: [
        {
          value: 'Pirineos',
          isCorrect: true,
          imgSrc: '/optionsImgs/geoImgs/pirineos.webp',
        },
        { value: 'Alpes', isCorrect: false, imgSrc: '/optionsImgs/geoImgs/alpes.webp' },
        {
          value: 'Apeninos',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/apeninos.webp',
        },
        {
          value: 'Cárpatos',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/carpatos.webp',
        },
      ],
    },
    {
      question: '¿En qué país se encuentra la Torre Eiffel?',
      id: 'geo8',
      options: [
        { value: 'Francia', isCorrect: true, imgSrc: '/optionsImgs/foodImgs/francia.webp' },
        { value: 'Italia', isCorrect: false, imgSrc: '/optionsImgs/foodImgs/italia.webp' },
        {
          value: 'Alemania',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/alemania.webp',
        },
        {
          value: 'Reino Unido',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/reinounido.webp',
        },
      ],
    },
  ],
  sports: [
    {
      question:
        '¿En qué deporte se utiliza una raqueta y una pelota en una cancha dividida por una red?',
      id: 'd1',
      options: [
        {
          value: 'Bádminton',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/badminton.webp',
        },
        { value: 'Tenis', isCorrect: true, imgSrc: '/optionsImgs/sportsImgs/tenis.webp' },
        {
          value: 'Squash',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/squash.webp',
        },
        {
          value: 'Ping Pong',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/pinpon.webp',
        },
      ],
    },
    {
      question:
        '¿Cuántos jugadores hay en un equipo de fútbol (en el campo) por lado?',
      id: 'd2',
      options: [
        { value: '11', isCorrect: true, imgSrc: '/optionsImgs/sportsImgs/11.webp' },
        { value: '10', isCorrect: false, imgSrc: '/optionsImgs/sportsImgs/10.webp' },
        { value: '9', isCorrect: false, imgSrc: '/optionsImgs/sportsImgs/9.webp' },
        { value: '12', isCorrect: false, imgSrc: '/optionsImgs/sportsImgs/12.webp' },
      ],
    },
    {
      question: '¿Qué país ha ganado más Copas Mundiales de Fútbol?',
      id: 'd3',
      options: [
        {
          value: 'Alemania',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/alemania.webp',
        },
        {
          value: 'Argentina',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/argentina.webp',
        },
        { value: 'Brasil', isCorrect: true, imgSrc: '/optionsImgs/sportsImgs/brazil.webp' },
        { value: 'Italia', isCorrect: false, imgSrc: '/optionsImgs/foodImgs/italia.webp' },
      ],
    },
    {
      question: '¿En qué ciudad se celebraron los Juegos Olímpicos de 2012?',
      id: 'd4',
      options: [
        {
          value: 'Londres',
          isCorrect: true,
          imgSrc: '/optionsImgs/sportsImgs/londres.webp',
        },
        {
          value: 'Beijing',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/beijing.webp',
        },
        { value: 'Tokio', isCorrect: false, imgSrc: '/optionsImgs/sportsImgs/tokio.webp' },
        {
          value: 'Río de Janeiro',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/riojaneiro.webp',
        },
      ],
    },
    {
      question: '¿Qué piloto ha ganado más campeonatos de Fórmula 1?',
      id: 'd5',
      options: [
        {
          value: 'Lewis Hamilton',
          isCorrect: true,
          imgSrc: '/optionsImgs/sportsImgs/hamilton.webp',
        },
        {
          value: 'Ayrton Senna',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/senna.webp',
        },
        {
          value: 'Sebastian Vettel',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/vettek.webp',
        },
        {
          value: 'Michael Schumacher',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/michael.webp',
        },
      ],
    },
    {
      question: '¿Qué selección ganó el Mundial de Fútbol de 1998?',
      id: 'd6',
      options: [
        { value: 'Francia', isCorrect: true, imgSrc: '/optionsImgs/foodImgs/francia.webp' },
        {
          value: 'Brasil',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/brazil.webp',
        },
        { value: 'Italia', isCorrect: false, imgSrc: '/optionsImgs/foodImgs/italia.webp' },
        {
          value: 'Alemania',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/alemania.webp',
        },
      ],
    },
    {
      question: '¿Qué país es conocido por ser potencia mundial en rugby?',
      id: 'd7',
      options: [
        {
          value: 'Nueva Zelanda',
          isCorrect: true,
          imgSrc: '/optionsImgs/sportsImgs/zelanda.webp',
        },
        {
          value: 'Inglaterra',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/inglaterra.webp',
        },
        {
          value: 'Sudáfrica',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/sudafrica.webp',
        },
        {
          value: 'Australia',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/sudafrica.webp',
        },
      ],
    },
    {
      question:
        '¿Qué deportista ha ganado más medallas olímpicas de la historia?',
      id: 'd8',
      options: [
        {
          value: 'Michael Phelps',
          isCorrect: true,
          imgSrc: '/optionsImgs/sportsImgs/phelps.webp',
        },
        {
          value: 'Usain Bolt',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/bolt.webp',
        },
        {
          value: 'Simone Biles',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/biles.webp',
        },
        {
          value: 'Carl Lewis',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/lewis.webp',
        },
      ],
    },
  ],
};
