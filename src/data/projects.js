import pyPad from "../assets/pypadcard.png"
import silba from "../assets/silba.png"
import NCNewsFE from "../assets/NCNewsFE.png"
import NCNewsBE from "../assets/NCNewsBE.png"
import edJsonBuilder from "../assets/edjsonbuilder.png"
import IBDirect from "../assets/IBDirect.png"
import AtomiFit from "../assets/atomifit.png"

const projects = [
  {
    image: AtomiFit,
    name: "AtomiFit",
    body: "WIP cross-platform fitness tracker app. Planned as a freemium app with features to bridge the gap in the current market such as: detailed analytics, out of the box programs, ML object detection for bar path tracking. Built with React Native w/TS, DrizzleORM and native libraries incl. SQLite.",
    repo: "https://github.com/The-Nightman/AtomiFit",
    live: null,
    fullstack: false
  },
  {
    image: IBDirect,
    name: "IBDirect",
    body: "NHS based web-portal for IBD patients and healthcare specialists to monitor, update and create records & appointments. Responsive design for devices used by NHS staff and patients with an ASP.NET API using EFCore and SignalR.",
    repo: ["https://github.com/The-Nightman/IBDirect","https://github.com/The-Nightman/IBDirectAPI"],
    live: "https://ibdirect.net/",
    fullstack: true
  },
  {
    image: silba,
    name: "SILBA",
    body: "SILBA is a react-native mobile app platform for small businesses to advertise or provide goods and services with a sleek and intuitive UI. Created as part of a FullStack group project at Northcoders.",
    repo: ["https://github.com/JoeAshcroft/SILBA","https://github.com/Kayphaz007/SILBA_BE"],
    live: null,
    fullstack: true
  },
  {
    image: edJsonBuilder,
    name: "ElDewrito Json Builder",
    body: "An Electron based production app with an accessible UI/UX focus and automation, built to help server hosts build the required voting.json file to host servers. Actively maintained with GHub actions for CI/CD pipeline.",
    repo: "https://github.com/The-Nightman/ED-VotingJSON",
    live: null,
    fullstack: false
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