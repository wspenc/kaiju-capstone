const { Shoe } = require("./models");

let allShoes = [
  {
    name: "Nike Air Force 1",
    price: 110,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f094af40-f82f-4fb9-a246-e031bf6fc411/air-force-1-07-womens-shoes-b19lqD.png",
    description:"The Nike Air Force 1 '07, one of our most popular shoe. Is a durable with a clean look and fine stitching. " ,
  },
  {
    name: "Adidas Alphabounce",
    price: 109.99,
    image: "https://cdn.sanity.io/images/c1chvb1i/production/3b9021c88c2e408b815be4d7194667ec42d6d803-700x468.jpg/ADIDAS-ALPHABOUNCE-BLACK-1.jpg",
    description:"The Adidas Alphabounce cushioning provides maximum comfort and support, allowing you to go the extra mile in style." ,
  },
  {
    name: "Nike Dunk Low University Blue",
    price: 400,
    image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/054/789/465/original/747562_01.jpg.jpeg?action=crop&width=750",
    description:"The Univeristy Blue is a nod towards the University of North Carolina. The Dunk Low is made of white leather consisting of a nice blue overlay." ,
  },
  {
    name: "On Cloud 5",
    price: 139.99,
    image: "https://ccwh54no.cdn.imgeng.in/media/catalog/product/cache/f9298953e225fe5aa69348b5b4218d7e/S/m/Small_JPEG_cloud_fw21_zinc_white_m_g1_jpg.jpg",
    description:"The On Cloud 5 is made of 100% recycled material. With the ultra light weight and new tech comfort, you'll never be able to go back to any other running shoe." ,
  },
  {
    name: "Converse",
    price: 65,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ci5qxcnirgtzjpxztmvu/converse-chuck-taylor-all-star-high-top-unisex-shoe-xX439O.png",
    description:"The Nike Air Force 1 '07, one of our most popular shoe. Is a durable with a clean look and fine stitching." ,
  },
  {
    name: "Balenciaga Crocs Madame",
    price: 600,
    image: "https://balenciaga.dam.kering.com/m/1f540e154c922d44/eCom-677390W1S8E5300_F.jpg?v=0",
    description:"Balenciaga collabed with Crocs to produce The Crocs Madame 80MM, made of 100% rubber and polyurethane." ,
  },
  {
    name: "Nike Customs",
    price: 150,
    image: "https://cdn.discordapp.com/attachments/986702494392533137/1000467262953758784/IMG_5427.jpg",
    description:"With the recent trend of custom shoes, a spin from anime series 'Naruto' was brought to life with the Air Force 1 sneakers." ,
  },
];
const seed = async () => {
  await Shoe.bulkCreate(allShoes);
};

module.exports = seed

