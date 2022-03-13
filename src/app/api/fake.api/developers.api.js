import { stack } from "./stack.api";

const developers = [
  {
    _id: "1",
    name: "Корнеева Ксения",
    age: 24,
    stack: stack.react,
    description: "здесь можно коротко написать о себе",
    price: 25,
    src: "../../assets/ksusha.jpg",
    alt: "photo ksenii",
    // здесь укажем массив из фото, ссылки на соц сети, кто что делал, бэйдж и др
  },
  {
    _id: "2",
    name: "Станислав Бугаевский",
    age: 39,
    stack: stack.php,
    description: "здесь можно коротко написать о себе",
    price: 30,
    src: "../../assets/stas.jpg",
    alt: "photo stasa",
  },
  {
    _id: "3",
    name: "Потапова Анна",
    age: 30,
    stack: stack.js,
    description: "здесь можно коротко написать о себе",
    price: 20,
    src: "../../assets/anna.jpg",
    alt: "photo ani",
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
    const favoriteDeveloper = developers.find((d) => d._id === id);
    // developers[developerIndex] = { ...developers[developerIndex], ...data };
    // localStorage.setItem("developers", JSON.stringify(developers));
    // resolve(developers[developerIndex]);
    resolve(favoriteDeveloper);
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
