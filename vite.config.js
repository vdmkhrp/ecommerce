import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";
import { dirname } from "path";
import handlebars from "vite-plugin-handlebars";
import { createHtmlPlugin } from "vite-plugin-html";

const __dirname = dirname(new URL(import.meta.url).pathname);

const getHtmlInputs = () => {
  const files = fs
    .readdirSync(__dirname)
    .filter((file) => file.endsWith(".html"));
  return files.reduce((inputs, file) => {
    const key = file.replace(/\.html$/, "");
    inputs[key] = resolve(__dirname, file);
    return inputs;
  }, {});
};

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
    isLarge: false,
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
    isLarge: true,
  },
];

export default defineConfig({
  root: __dirname,
  base: "./",
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      context: {
        products: productCards,
      },
    }),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        ...getHtmlInputs(),
        main: resolve(__dirname, "src/js/script.js"),
      },
    },
    outDir: "dist",
    assetsDir: "assets",
  },
});
