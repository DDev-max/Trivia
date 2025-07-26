import { CategoryKey } from '../../../shared/services/categories-service/categoriesObj';

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
      question: 'In what year did the French Revolution begin?',
      id: 'history1',
      options: [
        {
          value: '1789',
          isCorrect: true,
          imgSrc: '/optionsImgs/historyImgs/1789.webp',
        },
        {
          value: '1804',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/1804.webp',
        },
        {
          value: '1810',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/1810.webp',
        },
        {
          value: '1776',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/1776.webp',
        },
      ],
    },
    {
      question: 'Which country was led to independence by Simón Bolívar?',
      id: 'history2',
      options: [
        {
          value: 'Venezuela',
          isCorrect: true,
          imgSrc: '/optionsImgs/historyImgs/venezuela.webp',
        },
        {
          value: 'Mexico',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/mexico.webp',
        },
        {
          value: 'Peru',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/peru.webp',
        },
        {
          value: 'Argentina',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/argentina.webp',
        },
      ],
    },
    {
      question: 'In what year did Christopher Columbus arrive in the Americas?',
      id: 'history3',
      options: [
        {
          value: '1519',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/1519.webp',
        },
        {
          value: '1500',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/1500.webp',
        },
        {
          value: '1492',
          isCorrect: true,
          imgSrc: '/optionsImgs/historyImgs/1492.webp',
        },
        {
          value: '1453',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/1453.webp',
        },
      ],
    },
    {
      question: 'Which pre-Columbian civilization built Machu Picchu?',
      id: 'history4',
      options: [
        {
          value: 'Inca',
          isCorrect: true,
          imgSrc: '/optionsImgs/historyImgs/inca.webp',
        },
        {
          value: 'Aztec',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/azteca.webp',
        },
        {
          value: 'Maya',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/maya.webp',
        },
        {
          value: 'Olmec',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/olmecas.webp',
        },
      ],
    },
    {
      question:
        'In which city was the U.S. Declaration of Independence signed?',
      id: 'history5',
      options: [
        {
          value: 'Philadelphia',
          isCorrect: true,
          imgSrc: '/optionsImgs/historyImgs/filadelfia.webp',
        },
        {
          value: 'Washington D.C.',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/washington.webp',
        },
        {
          value: 'Boston',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/boston.webp',
        },
        {
          value: 'New York',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/new-york.webp',
        },
      ],
    },
    {
      question: 'What historical event is commemorated on May 5th in Mexico?',
      id: 'history6',
      options: [
        {
          value: 'The Battle of Puebla',
          isCorrect: true,
          imgSrc: '/optionsImgs/historyImgs/puebla.webp',
        },
        {
          value: 'The Constitution of 1917',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/constitucion.webp',
        },
        {
          value: 'Mexican Independence',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/independencia.webp',
        },
        {
          value: 'The Mexican Revolution',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/revolucion.webp',
        },
      ],
    },
    {
      question: 'Which wall divided a European city during the Cold War?',
      id: 'history7',
      options: [
        {
          value: 'Berlin Wall',
          isCorrect: true,
          imgSrc: '/optionsImgs/historyImgs/berlin.webp',
        },
        {
          value: 'Vienna Wall',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/viena.webp',
        },
        {
          value: 'Prague Wall',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/praga.webp',
        },
        {
          value: 'Warsaw Wall',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/varsovia.webp',
        },
      ],
    },
    {
      question: 'Who was the first Roman emperor?',
      id: 'history8',
      options: [
        {
          value: 'Augustus',
          isCorrect: true,
          imgSrc: '/optionsImgs/historyImgs/augusto.webp',
        },
        {
          value: 'Nero',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/neron.webp',
        },
        {
          value: 'Tiberius',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/tiberio.webp',
        },
        {
          value: 'Julius Caesar',
          isCorrect: false,
          imgSrc: '/optionsImgs/historyImgs/julio.webp',
        },
      ],
    },
  ],
  entertainment: [
    {
      question: 'What is the superhero alter ego of Bruce Wayne?',
      id: 'e1',
      options: [
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
        {
          value: 'Superman',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/superman.webp',
        },
        {
          value: 'Spider-Man',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/spiderman.webp',
        },
      ],
    },
    {
      question: 'Which movie saga features characters Frodo and Gandalf?',
      id: 'e2',
      options: [
        {
          value: 'The Lord of the Rings',
          isCorrect: true,
          imgSrc: '/optionsImgs/entertainmentImgs/señor.webp',
        },
        {
          value: 'Star Wars',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/starwars.webp',
        },
        {
          value: 'Narnia',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/narnia.webp',
        },
        {
          value: 'Harry Potter',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/harrypoter.webp',
        },
      ],
    },
    {
      question: "Who created the TV series 'The Simpsons'?",
      id: 'e3',
      options: [
        {
          value: 'Trey Parker',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/trey.webp',
        },
        {
          value: 'Matt Groening',
          isCorrect: true,
          imgSrc: '/optionsImgs/entertainmentImgs/matt.webp',
        },
        {
          value: 'Seth MacFarlane',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/seth.webp',
        },
        {
          value: 'Mike Judge',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/mike.webp',
        },
      ],
    },
    {
      question: 'Which TV series features the character Walter White?',
      id: 'e4',
      options: [
        {
          value: 'The Sopranos',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/sopranos.webp',
        },
        {
          value: 'Game of Thrones',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/gameofthrones.webp',
        },
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
      ],
    },
    {
      question:
        'In which animated movie does the character Buzz Lightyear appear?',
      id: 'e5',
      options: [
        {
          value: 'Toy Story',
          isCorrect: true,
          imgSrc: '/optionsImgs/entertainmentImgs/toystory.webp',
        },
        {
          value: 'Cars',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/cars.webp',
        },
        {
          value: 'The Incredibles',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/losincreibles.webp',
        },
        {
          value: 'Shrek',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/shrek.webp',
        },
      ],
    },
    {
      question: 'Which actor played Jack in the movie Titanic?',
      id: 'e6',
      options: [
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
        {
          value: 'Leonardo DiCaprio',
          isCorrect: true,
          imgSrc: '/optionsImgs/entertainmentImgs/dicaprio.webp',
        },
        {
          value: 'Johnny Depp',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/johnny.webp',
        },
      ],
    },
    {
      question: 'Which of these TV series is from Spain?',
      id: 'e7',
      options: [
        {
          value: 'Stranger Things',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/stranger.webp',
        },
        {
          value: 'La Casa de Papel',
          isCorrect: true,
          imgSrc: '/optionsImgs/entertainmentImgs/casadepapel.webp',
        },
        {
          value: 'Breaking Bad',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/breakingbad.webp',
        },
        {
          value: 'Dark',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/dark.webp',
        },
      ],
    },
    {
      question:
        "What is the name of the wizard protagonist in J.K. Rowling's saga?",
      id: 'e8',
      options: [
        {
          value: 'Severus Snape',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/snape.webp',
        },
        {
          value: 'Harry Potter',
          isCorrect: true,
          imgSrc: '/optionsImgs/entertainmentImgs/harrypoter.webp',
        },
        {
          value: 'Hermione Granger',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/hermione.webp',
        },
        {
          value: 'Ron Weasley',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/weasley.webp',
        },
      ],
    },
    {
      question: "Which British band released the album 'Abbey Road'?",
      id: 'e9',
      options: [
        {
          value: 'Oasis',
          isCorrect: false,
          imgSrc: '/optionsImgs/entertainmentImgs/oasis.webp',
        },
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
      ],
    },
  ],
  food: [
    {
      question: 'What is the main ingredient in guacamole?',
      id: 'f1',
      options: [
        {
          value: 'Avocado',
          isCorrect: true,
          imgSrc: '/optionsImgs/foodImgs/aguacate.webp',
        },
        {
          value: 'Chili peppers',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/chiles.webp',
        },
        {
          value: 'Tomato',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/tomate.webp',
        },
        {
          value: 'Onion',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/cebolla.webp',
        },
      ],
    },
    {
      question: 'Which country is the origin of pizza?',
      id: 'f2',
      options: [
        {
          value: 'Italy',
          isCorrect: true,
          imgSrc: '/optionsImgs/foodImgs/italia.webp',
        },
        {
          value: 'Spain',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/españa.webp',
        },
        {
          value: 'France',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/francia.webp',
        },
        {
          value: 'United States',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/usa.webp',
        },
      ],
    },
    {
      question: 'What type of pasta is shaped like tubes?',
      id: 'f3',
      options: [
        {
          value: 'Macaroni',
          isCorrect: true,
          imgSrc: '/optionsImgs/foodImgs/macarrones.webp',
        },
        {
          value: 'Fusilli',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/fusilli.webp',
        },
        {
          value: 'Ravioli',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/rabiolis.webp',
        },
        {
          value: 'Spaghetti',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/spaghetti.webp',
        },
      ],
    },
    {
      question:
        'What is the name of the famous Japanese dish made with rice and raw fish?',
      id: 'f4',
      options: [
        {
          value: 'Sushi',
          isCorrect: true,
          imgSrc: '/optionsImgs/foodImgs/sushi.webp',
        },
        {
          value: 'Tempura',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/tempura.webp',
        },
        {
          value: 'Ramen',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/ramen.webp',
        },
        {
          value: 'Gyoza',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/gyoza.webp',
        },
      ],
    },
    {
      question: 'What fruit is traditionally used to make cider?',
      id: 'f5',
      options: [
        {
          value: 'Peach',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/durazno.webp',
        },
        {
          value: 'Pear',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/pera.webp',
        },
        {
          value: 'Apple',
          isCorrect: true,
          imgSrc: '/optionsImgs/foodImgs/manzana.webp',
        },
        {
          value: 'Grape',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/uva.webp',
        },
      ],
    },
    {
      question: 'Which drink is made from fermented barley?',
      id: 'f6',
      options: [
        {
          value: 'Beer',
          isCorrect: true,
          imgSrc: '/optionsImgs/foodImgs/cerveza.webp',
        },
        {
          value: 'Wine',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/vino.webp',
        },
        {
          value: 'Tequila',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/tequila.webp',
        },
        {
          value: 'Cider',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/sidra.webp',
        },
      ],
    },
    {
      question: "What type of meat is used in 'roast lamb'?",
      id: 'f7',
      options: [
        {
          value: 'Lamb',
          isCorrect: true,
          imgSrc: '/optionsImgs/foodImgs/cordero.webp',
        },
        {
          value: 'Beef',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/res.webp',
        },
        {
          value: 'Chicken',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/pollo.webp',
        },
        {
          value: 'Pork',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/cerdo.webp',
        },
      ],
    },
    {
      question: 'What is the main ingredient in Spanish omelette?',
      id: 'f8',
      options: [
        {
          value: 'Zucchini',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/calabacin.webp',
        },
        {
          value: 'Potato',
          isCorrect: true,
          imgSrc: '/optionsImgs/foodImgs/papa.webp',
        },
        {
          value: 'Cheese',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/queso.webp',
        },
        {
          value: 'Mushroom',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/champiñon.webp',
        },
      ],
    },
  ],
  general: [
    {
      question: 'What is the largest ocean in the world?',
      id: 'g1',
      options: [
        {
          value: 'Pacific Ocean',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/pacifico.webp',
        },
        {
          value: 'Indian Ocean',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/indico.webp',
        },
        {
          value: 'Atlantic Ocean',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/atlantico.webp',
        },
        {
          value: 'Arctic Ocean',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/artico.webp',
        },
      ],
    },
    {
      question: 'How many planets make up the solar system?',
      id: 'g2',
      options: [
        {
          value: '8',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/8.webp',
        },
        {
          value: '10',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/10.webp',
        },
        {
          value: '7',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/7.webp',
        },
        {
          value: '9',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/9.webp',
        },
      ],
    },
    {
      question: 'Which gas is essential for human respiration?',
      id: 'g3',
      options: [
        {
          value: 'Oxygen',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/oxigeno.webp',
        },
        {
          value: 'Carbon dioxide',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/dioxido.webp',
        },
        {
          value: 'Hydrogen',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/hidrogeno.webp',
        },
        {
          value: 'Nitrogen',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/nitro.webp',
        },
      ],
    },
    {
      question: 'On which continent is Egypt located?',
      id: 'g4',
      options: [
        {
          value: 'Africa',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/africa.webp',
        },
        {
          value: 'Europe',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/europa.webp',
        },
        {
          value: 'Asia',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/asia.webp',
        },
        {
          value: 'America',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/america.webp',
        },
      ],
    },
    {
      question: 'Which instrument measures temperature?',
      id: 'g5',
      options: [
        {
          value: 'Thermometer',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/termo.webp',
        },
        {
          value: 'Barometer',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/barometro.webp',
        },
        {
          value: 'Altimeter',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/altimetro.webp',
        },
        {
          value: 'Anemometer',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/anemometro.webp',
        },
      ],
    },
    {
      question: 'How many sides does a hexagon have?',
      id: 'g6',
      options: [
        {
          value: '6',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/hexagono.webp',
        },
        {
          value: '7',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/heptagono.webp',
        },
        {
          value: '8',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/octagono.webp',
        },
        {
          value: '5',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/5.webp',
        },
      ],
    },
    {
      question: 'On what day is Earth Day celebrated?',
      id: 'g7',
      options: [
        {
          value: 'April 22',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/22abril.webp',
        },
        {
          value: 'May 1',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/1mayo.webp',
        },
        {
          value: 'February 14',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/14febrero.webp',
        },
        {
          value: 'June 5',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/5junio.webp',
        },
      ],
    },
    {
      question: 'Which metal is liquid at room temperature?',
      id: 'g8',
      options: [
        {
          value: 'Mercury',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/mercurio.webp',
        },
        {
          value: 'Aluminum',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/aluminio.webp',
        },
        {
          value: 'Iron',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/hierro.webp',
        },
        {
          value: 'Lead',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/plomo.webp',
        },
      ],
    },
  ],
  geography: [
    {
      question: 'Which country is the largest in the world by area?',
      id: 'geo1',
      options: [
        {
          value: 'Canada',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/canada.webp',
        },
        {
          value: 'Russia',
          isCorrect: true,
          imgSrc: '/optionsImgs/geoImgs/rusia.webp',
        },
        {
          value: 'China',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/china.webp',
        },
        {
          value: 'United States',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/usa.webp',
        },
      ],
    },
    {
      question: 'What is the capital of Australia?',
      id: 'geo2',
      options: [
        {
          value: 'Melbourne',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/melbourne.webp',
        },
        {
          value: 'Sydney',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/sidney.webp',
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
      question: 'On which continent is the Sahara Desert located?',
      id: 'geo3',
      options: [
        {
          value: 'Asia',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/asia.webp',
        },
        {
          value: 'Europe',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/europa.webp',
        },
        {
          value: 'Africa',
          isCorrect: true,
          imgSrc: '/optionsImgs/generalImgs/africa.webp',
        },
        {
          value: 'America',
          isCorrect: false,
          imgSrc: '/optionsImgs/generalImgs/america.webp',
        },
      ],
    },
    {
      question: 'Which country has the most islands in the world?',
      id: 'geo4',
      options: [
        {
          value: 'Norway',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/noruega.webp',
        },
        {
          value: 'Sweden',
          isCorrect: true,
          imgSrc: '/optionsImgs/geoImgs/suecia.webp',
        },
        {
          value: 'Philippines',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/filipinas.webp',
        },
        {
          value: 'Indonesia',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/indonesia.webp',
        },
      ],
    },
    {
      question: 'What is the longest river in the world?',
      id: 'geo5',
      options: [
        {
          value: 'Yangtze',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/yangtse.webp',
        },
        {
          value: 'Amazon',
          isCorrect: true,
          imgSrc: '/optionsImgs/geoImgs/amazonas.webp',
        },
        {
          value: 'Mississippi',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/misisipi.webp',
        },
        {
          value: 'Nile',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/nilo.webp',
        },
      ],
    },
    {
      question: 'Which country has Warsaw as its capital?',
      id: 'geo6',
      options: [
        {
          value: 'Poland',
          isCorrect: true,
          imgSrc: '/optionsImgs/geoImgs/polonia.webp',
        },
        {
          value: 'Romania',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/rumania.webp',
        },
        {
          value: 'Slovakia',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/eslovaquia.webp',
        },
        {
          value: 'Hungary',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/hungria.webp',
        },
      ],
    },
    {
      question: 'Which mountain range separates Spain from France?',
      id: 'geo7',
      options: [
        {
          value: 'Pyrenees',
          isCorrect: true,
          imgSrc: '/optionsImgs/geoImgs/pirineos.webp',
        },
        {
          value: 'Apennines',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/apeninos.webp',
        },
        {
          value: 'Carpathians',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/carpatos.webp',
        },
        {
          value: 'Alps',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/alpes.webp',
        },
      ],
    },
    {
      question: 'In which country is the Eiffel Tower located?',
      id: 'geo8',
      options: [
        {
          value: 'United Kingdom',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/reinounido.webp',
        },
        {
          value: 'Germany',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/alemania.webp',
        },
        {
          value: 'France',
          isCorrect: true,
          imgSrc: '/optionsImgs/foodImgs/francia.webp',
        },
        {
          value: 'Italy',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/italia.webp',
        },
      ],
    },
  ],
  sports: [
    {
      question:
        'In which sport do you use a racket and a ball on a court divided by a net?',
      id: 'd1',
      options: [
        {
          value: 'Ping Pong',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/pinpon.webp',
        },
        {
          value: 'Tennis',
          isCorrect: true,
          imgSrc: '/optionsImgs/sportsImgs/tenis.webp',
        },
        {
          value: 'Squash',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/squash.webp',
        },
        {
          value: 'Badminton',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/badminton.webp',
        },
      ],
    },
    {
      question:
        'How many players are on the field per side in a football (soccer) team?',
      id: 'd2',
      options: [
        {
          value: '12',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/12.webp',
        },
        {
          value: '11',
          isCorrect: true,
          imgSrc: '/optionsImgs/sportsImgs/11.webp',
        },
        {
          value: '9',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/9.webp',
        },
        {
          value: '10',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/10.webp',
        },
      ],
    },
    {
      question: 'Which country has won the most FIFA World Cups?',
      id: 'd3',
      options: [
        {
          value: 'Argentina',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/argentina.webp',
        },
        {
          value: 'Brazil',
          isCorrect: true,
          imgSrc: '/optionsImgs/sportsImgs/brazil.webp',
        },
        {
          value: 'Germany',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/alemania.webp',
        },
        {
          value: 'Italy',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/italia.webp',
        },
      ],
    },
    {
      question: 'In which city were the 2012 Olympic Games held?',
      id: 'd4',
      options: [
        {
          value: 'Rio de Janeiro',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/riojaneiro.webp',
        },
        {
          value: 'London',
          isCorrect: true,
          imgSrc: '/optionsImgs/sportsImgs/londres.webp',
        },
        {
          value: 'Beijing',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/beijing.webp',
        },
        {
          value: 'Tokyo',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/tokio.webp',
        },
      ],
    },
    {
      question: 'Which driver has won the most Formula 1 championships?',
      id: 'd5',
      options: [
        {
          value: 'Michael Schumacher',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/michael.webp',
        },
        {
          value: 'Sebastian Vettel',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/vettek.webp',
        },
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
      ],
    },
    {
      question: 'Which team won the 1998 FIFA World Cup?',
      id: 'd6',
      options: [
        {
          value: 'Brazil',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/brazil.webp',
        },
        {
          value: 'Italy',
          isCorrect: false,
          imgSrc: '/optionsImgs/foodImgs/italia.webp',
        },
        {
          value: 'France',
          isCorrect: true,
          imgSrc: '/optionsImgs/foodImgs/francia.webp',
        },
        {
          value: 'Germany',
          isCorrect: false,
          imgSrc: '/optionsImgs/geoImgs/alemania.webp',
        },
      ],
    },
    {
      question: 'Which country is known as a rugby powerhouse?',
      id: 'd7',
      options: [
        {
          value: 'Australia',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/sudafrica.webp',
        },
        {
          value: 'South Africa',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/sudafrica.webp',
        },
        {
          value: 'England',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/inglaterra.webp',
        },
        {
          value: 'New Zealand',
          isCorrect: true,
          imgSrc: '/optionsImgs/sportsImgs/zelanda.webp',
        },
      ],
    },
    {
      question: 'Which athlete has won the most Olympic medals in history?',
      id: 'd8',
      options: [
        {
          value: 'Usain Bolt',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/bolt.webp',
        },
        {
          value: 'Carl Lewis',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/lewis.webp',
        },
        {
          value: 'Simone Biles',
          isCorrect: false,
          imgSrc: '/optionsImgs/sportsImgs/biles.webp',
        },
        {
          value: 'Michael Phelps',
          isCorrect: true,
          imgSrc: '/optionsImgs/sportsImgs/phelps.webp',
        },
      ],
    },
  ],
};
