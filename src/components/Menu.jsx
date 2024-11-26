import React from "react";
import CardItemMenu from "./CardItemMenu";

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
  return (
    <div className="container mt-5">
      <div className="row justify-content-evenly">
        <h1 className="text-center text-light">MENU</h1>
        {thaiDishes.map((dish, index) => (
          <CardItemMenu key={index} data={dish} />
        ))}
      </div>
    </div>
  );
}
