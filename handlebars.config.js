import { resolve } from "path";
import { dirname } from "path";

const __dirname = dirname(new URL(import.meta.url).pathname);

const productCards = [
  {
    link: "#!",
    url: "./src/img/shoes_1.webp",
    title: "Casual Shoe",
    price: "$225",
    isLarge: false,
  },
  {
    link: "#!",
    url: "./src/img/shoes_2.webp",
    title: "Skateboard Shoe",
    price: "$125",
    isLarge: false,
  },
  {
    link: "#!",
    url: "./src/img/shoes_3.webp",
    title: "Skateboard Shoe",
    price: "$125",
    isLarge: true,
  },
  {
    link: "#!",
    url: "./src/img/shoes_4.webp",
    title: "Skateboard Shoe",
    price: "$125",
    isLarge: true,
  },
  {
    link: "#!",
    url: "./src/img/shoes_5.webp",
    title: "Basket Shoe",
    price: "$125",
    isLarge: false,
  },
  {
    link: "#!",
    url: "./src/img/shoes_6.webp",
    title: "Skateboard Shoe",
    price: "$125",
    isLarge: false,
  },
];

const supportCards = [
  {
    use: "#heart-fill",
    title: "Take care with love",
    text: "We take care your package with full of attention and of course full of love. We want to make sure you’ll receive your package like you receive your birthday gift.",
  },
  {
    use: "#phone",
    title: "Friendly Customer Service",
    text: "You do not need to worry when you want to check your package. We will always answer whatever your questions. Just click on the chat icon and we will talk.",
  },
  {
    use: "#refresh",
    title: "Refund Process",
    text: "Refund is a such bad experience and we don’t want that thing happen to you. But when it’s happen we will make sure you will through smooth and friendly process.",
  },
];

export default {
  partialDirectory: resolve(__dirname, "src/partials"),
  context: {
    products: productCards,
    supportCards: supportCards,
  },
};
