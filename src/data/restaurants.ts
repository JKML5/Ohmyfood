import image1 from '../assets/images/restaurants/01.jpg';
import image2 from '../assets/images/restaurants/02.jpg';
import image3 from '../assets/images/restaurants/03.jpg';
import image4 from '../assets/images/restaurants/04.jpg';

const restaurantsData = [
  {
    id: 1,
    title: 'La palette du goût',
    location: 'Ménilmontant',
    imgSrc: image1,
    isNew: true,
    menu: [
      {
        Appetizer: [
          {
            id: 1,
            title: "Fricassée d'escargots",
            subtitle: "Au piment d'Espelette",
            price: 25,
          },
          {
            id: 2,
            title: 'Foie gras de canard mi-cuit',
            subtitle: 'Et ses copeaux de truffe noire',
            price: 35,
          },
          {
            id: 3,
            title: 'Oeuf au plat',
            subtitle: 'Assaisonné à la truffe sur lit de caviar',
            price: 20,
          },
        ],
        'Main Courses': [
          {
            id: 4,
            title: 'Filet de boeuf aux herbes',
            subtitle: 'Accompagné de sa ribambelle de légumes',
            price: 40,
          },
          {
            id: 5,
            title: 'Parmentier de queue de boeuf',
            subtitle: 'À la truffe noire sur sa purée de panais',
            price: 35,
          },
          {
            id: 6,
            title: 'Filet de turbot',
            subtitle: 'Aux agrumes',
            price: 44,
          },
        ],
        Desserts: [
          {
            id: 7,
            title: 'Paris-Brest',
            subtitle: 'Revisité',
            price: 18,
          },
          {
            id: 8,
            title: "Macaron au chocolat d'exception",
            subtitle: 'Et glace à la vanille de Madagascar',
            price: 25,
          },
          {
            id: 9,
            title: 'Mousse au chocolat',
            subtitle: "Au piment d'Espelette et à la truffe noire",
            price: 23,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'La Note enchantée',
    location: 'Charonne',
    imgSrc: image2,
    isNew: true,
    menu: [
      {
        Appetizer: [
          {
            id: 1,
            title: 'Ravioles de foie gras',
            subtitle: 'Accompagnées de leur crème à la truffe',
            price: 25,
          },
          {
            id: 2,
            title: 'Caviar Osciètre',
            subtitle: 'Sur blini à la farine de blé noir',
            price: 35,
          },
          {
            id: 3,
            title: 'Homard et espuma de potiron',
            subtitle: "Mariné aux zestes d'orange",
            price: 20,
          },
          {
            id: 4,
            title: 'Foie gras de canard cuit entier',
            subtitle: 'Confiture de figue et pain toasté',
            price: 35,
          },
        ],
        'Main Courses': [
          {
            id: 4,
            title: 'Noix de coquilles Saint-Jacques',
            subtitle: 'Sur lit de purée de céleri-rave',
            price: 40,
          },
          {
            id: 5,
            title: 'Langoustine poêlée',
            subtitle: 'Purée de patate douce',
            price: 35,
          },
          {
            id: 6,
            title: 'Mijoté de queue de boeuf',
            subtitle: 'Et riz sauvage aux zestes de citron',
            price: 44,
          },
        ],
        Desserts: [
          {
            id: 7,
            title: 'Macaron noisette et chocolat',
            subtitle: 'Glace au caramel brun et sel de Guérande',
            price: 18,
          },
          {
            id: 8,
            title: 'Baba au rhum revisité',
            subtitle: 'Avec son coulis de citron',
            price: 22,
          },
          {
            id: 9,
            title: 'Tarte au citron meringuée',
            subtitle: 'Déstructurée',
            price: 23,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'À la française',
    location: 'Cité Rouge',
    imgSrc: image3,
    isNew: false,
    menu: [
      {
        Appetizer: [
          {
            id: 1,
            title: 'Tartare de poulpe acidulé',
            subtitle: "Aux zestes d'orange",
            price: 25,
          },
          {
            id: 2,
            title: "Velouté de légumes d'antan",
            subtitle: 'Carotte, panais, topinambour',
            price: 35,
          },
          {
            id: 3,
            title: "Soupe à l'oignon",
            subtitle: 'Revisitée',
            price: 20,
          },
        ],
        'Main Courses': [
          {
            id: 4,
            title: 'Coquilles Saint-Jacques',
            subtitle: "Accompagnées d'une purée de panais",
            price: 40,
          },
          {
            id: 5,
            title: 'Magret de canard',
            subtitle: 'Et parmentier de pommes de terre',
            price: 35,
          },
          {
            id: 6,
            title: 'Pigeonneau d’Ille-et-Vilaine',
            subtitle: 'Sur son lit de gnocchis aux légumes',
            price: 44,
          },
        ],
        Desserts: [
          {
            id: 7,
            title: 'Pétales de violettes glacés',
            subtitle: 'Et purée de noisettes',
            price: 18,
          },
          {
            id: 8,
            title: 'Fondant au chocolat',
            subtitle: 'Revisité',
            price: 22,
          },
          {
            id: 9,
            title: 'Millefeuille croustillant',
            subtitle: 'Myrtilles et pâte d’amande',
            price: 23,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Le délice des sens',
    location: 'Folie-Méricourt',
    imgSrc: image4,
    isNew: false,
    menu: [
      {
        Appetizer: [
          {
            id: 1,
            title: 'Tartare de thon',
            subtitle: 'Assaisonné au yuzu',
            price: 25,
          },
          {
            id: 2,
            title: 'Bouchée de homard croustillant',
            subtitle: 'Et sa farandole de petits légumes',
            price: 35,
          },
          {
            id: 3,
            title: 'Velouté de cèpes',
            subtitle: 'Aux truffes',
            price: 20,
          },
        ],
        'Main Courses': [
          {
            id: 4,
            title: 'Poulet rôti aux herbes de Provence',
            subtitle: 'Et sa crème de truffe',
            price: 40,
          },
          {
            id: 5,
            title: 'Langouste rôtie',
            subtitle: 'Et ses légumes de saison',
            price: 35,
          },
          {
            id: 6,
            title: 'Côte de boeuf Angus',
            subtitle: 'Et sa purée de panais',
            price: 44,
          },
        ],
        Desserts: [
          {
            id: 7,
            title: 'Farandole de desserts',
            subtitle: 'Du chef',
            price: 18,
          },
          {
            id: 8,
            title: 'Crème brulée',
            subtitle: 'Revisitée',
            price: 22,
          },
          {
            id: 9,
            title: 'Tiramisu',
            subtitle: 'À la noisette',
            price: 23,
          },
        ],
      },
    ],
  },
];

export default restaurantsData;
