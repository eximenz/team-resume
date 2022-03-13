import { stack } from "./stack.api";

const developers = [
  {
    _id: "1",
    name: "Корнеева Ксения",
    age: 24,
    stack: stack.react,
    description: "здесь можно коротко написать о себе",
    price: 25,
    src: "https://img.nickpic.host/mlLvne.png",
    alt: "photo ksenii",
    favorite: false,
    // здесь укажем массив из фото, ссылки на соц сети, кто что делал, бэйдж и др
  },
  {
    _id: "2",
    name: "Станислав Бугаевский",
    age: 39,
    stack: stack.nodeJs,
    description: "здесь можно коротко написать о себе",
    price: 30,
    src: "http://steelwood.nazwa.pl/rozrywka/images/steve-jobs.jpg",
    alt: "photo stasa",
    favorite: false,
  },
  {
    _id: "3",
    name: "Потапова Анна",
    age: 30,
    stack: stack.js,
    description: "здесь можно коротко написать о себе",
    price: 20,
    src: "http://networker.media/wp-content/media/1137-200x400.jpg",
    alt: "photo ani",
    favorite: false,
  },
];

if (!localStorage.getItem("developers")) {
  localStorage.setItem("developers", JSON.stringify(developers));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("developers")));
    }, 2000);
  });

const toFavorite = (id) =>
  new Promise((resolve) => {
    const developers = JSON.parse(localStorage.getItem("developers"));
        const favoriteDevelopers = developers.map((dev) => {
          if (dev._id === id) {
            dev.favorite = !dev.favorite;
          }
          return dev;
        });
    localStorage.setItem("developers", JSON.stringify(favoriteDevelopers));
    resolve(favoriteDevelopers);
  });

const getBy = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("developers")).find(
          (developer) => developer._id === id
        )
      );
    }, 1000);
  });
export default {
  fetchAll,
  getBy,
  toFavorite,
};
