import React from "react";
import CardItemMenu from "./CardItemMenu";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Menu() {
  const thaiDishes = [
    {
      name: "Pad Thai",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/pad_thai-MAX-w1000h600.jpg", // Remplacez par une URL valide
      price: "12.90€",
      ingredients: [
        "Nouilles de riz",
        "Crevettes",
        "Œufs",
        "Pousses de soja",
        "Arachides",
        "Citron vert",
        "Sauce tamarin",
      ],
    },
    {
      name: "Tom Yum Goong",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/khao_phat-MAX-w1000h600.jpg", // Remplacez par une URL valide
      price: "14.50€",
      ingredients: [
        "Crevettes",
        "Citronnelle",
        "Feuilles de kaffir",
        "Piment",
        "Champignons",
        "Lait de coco",
        "Coriandre",
      ],
    },
    {
      name: "Som Tum (Salade de Papaye)",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/papaya_salad-MAX-w1000h600.jpg", // Remplacez par une URL valide
      price: "9.90€",
      ingredients: [
        "Papaye verte",
        "Piment",
        "Tomates cerises",
        "Arachides",
        "Haricots longs",
        "Citron vert",
        "Sauce poisson",
      ],
    },
    {
      name: "Green Curry (Kaeng Khiao Wan)",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/tom_kha_soup-MAX-w1000h600.jpg", // Remplacez par une URL valide
      price: "13.90€",
      ingredients: [
        "Poulet",
        "Lait de coco",
        "Pâte de curry vert",
        "Aubergines thaïes",
        "Basilic thaï",
        "Bambou",
        "Piments verts",
      ],
    },
    {
      name: "Mango Sticky Rice",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/panang_curry-MAX-w1000h600.jpg", // Remplacez par une URL valide
      price: "7.50€",
      ingredients: ["Mangue", "Riz gluant", "Lait de coco", "Sucre", "Sel"],
    },
  ];
  const thaiDesserts = [
    {
      name: "Mango Sticky Rice",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/mango_sticky_rice-MAX-w1000h600.jpg", // URL valide
      price: "6.90€",
      ingredients: ["Mangue", "Riz gluant", "Lait de coco", "Sucre", "Sel"],
    },
    {
      name: "Khanom Buang (Crêpes Thaïes)",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/khanom_buang-MAX-w1000h600.jpg", // URL valide
      price: "4.50€",
      ingredients: [
        "Farine de riz",
        "Œufs",
        "Noix de coco râpée",
        "Crème fouettée",
        "Filaments de jaune d'œuf sucré (Foi Thong)",
      ],
    },
    {
      name: "Tub Tim Krob (Dessert de Châtaignes d'Eau)",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/tub_tim_krob-MAX-w1000h600.jpg", // URL valide
      price: "5.90€",
      ingredients: [
        "Châtaignes d'eau",
        "Sirop de sucre",
        "Lait de coco",
        "Glaçons pilés",
        "Colorant alimentaire (optionnel)",
      ],
    },
    {
      name: "Khanom Tom (Boules de Noix de Coco)",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/khanom_tom-MAX-w1000h600.jpg", // URL valide
      price: "4.90€",
      ingredients: [
        "Farine de riz gluant",
        "Noix de coco râpée",
        "Sucre de palme",
        "Eau",
        "Sel",
      ],
    },
    {
      name: "Sangkaya Fak Thong (Crème de Noix de Coco et Potiron)",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/sangkaya_fak_thong-MAX-w1000h600.jpg", // URL valide
      price: "6.50€",
      ingredients: [
        "Potiron",
        "Lait de coco",
        "Œufs",
        "Sucre de palme",
        "Sel",
      ],
    },
  ];

  const thaiDrinks = [
    {
      name: "Thai Iced Tea (Cha Yen)",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/thai_iced_tea-MAX-w1000h600.jpg", // URL valide
      price: "3.50€",
      ingredients: [
        "Thé noir thaï",
        "Lait concentré sucré",
        "Lait évaporé",
        "Sucre",
        "Glaçons",
      ],
    },
    {
      name: "Nam Manao (Citronnade Thaïlandaise)",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/nam_manao-MAX-w1000h600.jpg", // URL valide
      price: "2.90€",
      ingredients: ["Jus de citron vert", "Eau", "Sucre", "Glaçons"],
    },
    {
      name: "Coconut Water (Nam Maprao)",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/coconut_water-MAX-w1000h600.jpg", // URL valide
      price: "3.90€",
      ingredients: ["Eau de coco fraîche", "Pulpe de coco (optionnel)"],
    },
    {
      name: "Butterfly Pea Tea (Nam Dok Anchan)",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/butterfly_pea_tea-MAX-w1000h600.jpg", // URL valide
      price: "4.50€",
      ingredients: [
        "Fleurs de pois papillon",
        "Miel ou sucre",
        "Jus de citron (pour changer la couleur)",
        "Eau chaude",
        "Glaçons (optionnel)",
      ],
    },
    {
      name: "Sangria Thaïe au Litchi",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/lychee_sangria-MAX-w1000h600.jpg", // URL valide
      price: "5.50€",
      ingredients: [
        "Litchis",
        "Vin blanc",
        "Jus de citron",
        "Eau pétillante",
        "Menthe",
        "Glaçons",
      ],
    },
  ];

  const thaiStarters = [
    {
      name: "Spring Rolls (Poh Pia Tod)",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/spring_rolls-MAX-w1000h600.jpg", // URL valide
      price: "5.50€",
      ingredients: [
        "Galettes de riz",
        "Légumes (carottes, chou)",
        "Champignons",
        "Nouilles transparentes",
        "Ail",
        "Sauce soja",
        "Sauce sweet chili",
      ],
    },
    {
      name: "Satay de Poulet (Kai Satay)",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/chicken_satay-MAX-w1000h600.jpg", // URL valide
      price: "6.90€",
      ingredients: [
        "Poulet",
        "Lait de coco",
        "Curry en poudre",
        "Curcuma",
        "Cacahuètes",
        "Sauce soja",
        "Brochettes",
      ],
    },
    {
      name: "Salade de Bœuf Épicée (Yam Nua)",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/yam_nua-MAX-w1000h600.jpg", // URL valide
      price: "8.50€",
      ingredients: [
        "Bœuf",
        "Citron vert",
        "Piment frais",
        "Oignons rouges",
        "Tomates",
        "Concombre",
        "Coriandre",
      ],
    },
    {
      name: "Soupe au Poulet et Noix de Coco (Tom Kha Gai)",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/tom_kha_gai-MAX-w1000h600.jpg", // URL valide
      price: "7.50€",
      ingredients: [
        "Poulet",
        "Lait de coco",
        "Citronnelle",
        "Galanga",
        "Feuilles de kaffir",
        "Piment",
        "Champignons",
      ],
    },
    {
      name: "Salade de Crevettes Épicée (Pla Goong)",
      image:
        "https://www.voyagethailande.fr/cdn/th-public/pla_goong-MAX-w1000h600.jpg", // URL valide
      price: "8.90€",
      ingredients: [
        "Crevettes",
        "Citron vert",
        "Piment",
        "Oignons rouges",
        "Herbes thaïes",
        "Ail",
        "Sauce poisson",
      ],
    },
  ];


  return (
    <div className="container mt-5" id="menu">
      <div className="row justify-content-evenly">
        <h1 className="text-center text-light">MENU</h1>

        <ButtonGroup className="sticky-top mt-5" aria-label="Basic example">
          <Button href="#entrees" variant="secondary">Entrées</Button>
          <Button href="#plats" variant="secondary">Plats</Button>
          <Button href="#desserts" variant="secondary">Desserts</Button>
          <Button href="#boissons" variant="secondary">Boissons</Button>
        </ButtonGroup>

        <h2 id="entrees" className="text-light mt-5">Entrées</h2>
        {thaiStarters.map((dish, index) => (
          <CardItemMenu key={index} data={dish} />
        ))}

        <h2 id="plats" className="text-light mt-5">Plats</h2>
        {thaiDishes.map((dish, index) => (
          <CardItemMenu key={index} data={dish} />
        ))}

        <h2 id="desserts" className="text-light mt-5">Desserts</h2>
        {thaiDesserts.map((dish, index) => (
          <CardItemMenu key={index} data={dish} />
        ))}

        <h2 id="boissons" className="text-light mt-5">Boissons</h2>
        {thaiDrinks.map((dish, index) => (
          <CardItemMenu key={index} data={dish} />
        ))}
      </div>
    </div>
  );
}
