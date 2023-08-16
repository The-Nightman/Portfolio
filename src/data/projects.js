import pyPad from "../assets/pypadcard.png"
import silba from "../assets/silba.png"
import NCNewsFE from "../assets/NCNewsFE.png"
import NCNewsBE from "../assets/NCNewsBE.png"

const projects = [
  {
    image: silba,
    name: "SILBA",
    body: "SILBA is a react-native mobile app platform for small businesses to advertise or provide goods and services with a sleek and intuitive UI. Created as part of a FullStack group project at Northcoders.",
    repo: ["https://github.com/JoeAshcroft/SILBA","https://github.com/Kayphaz007/SILBA_BE"],
    live: null,
    fullstack: true
  },
  {
    image: NCNewsFE,
    name: "NC News",
    body: "NC News is an interactive responsive mobile-first single-page webapp using functional components and hooks made with react, JS, MUI, and CSS connected to a RESTful API backend.",
    repo: "https://github.com/The-Nightman/NC-News",
    live: "https://ncnewsfeproject.netlify.app/",
    fullstack: false
  },
  {
    image: NCNewsBE,
    name: "NC News API",
    body: "Backend RESTful API built with NodeJS and Express capable of receiving CRUD requests and returning data through multiple endpoints with built in documentation.",
    repo: "https://github.com/The-Nightman/be-nc-news",
    live: "https://nc-news-v54w.onrender.com/api",
    fullstack: false
  },
  {
    image: pyPad,
    name: "Pypad",
    body: "Notepad clone written in python as a gui app using elements from tkinter and customtkinter to create a familiar but smooth interface.",
    repo: "https://github.com/The-Nightman/Py-Pad",
    live: null,
    fullstack: false
  },
];

export { projects };