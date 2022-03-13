export const stack = {
  js: { _id: "67rdca3eeb7f6fgeed471818", name: "JS" },
  react: { _id: "67rdca3eeb7f6fgeed471820", name: "React" },
  nodeJs: { _id: "67rdca3eeb7f6fgeed471814", name: "Node.Js" },
  // ReactNative: { _id: "67rdca3eeb7f6fgeed471822", name: "ReactNative" },
  // php: { _id: "67rdca3eeb7f6fgeed471824", name: "PHP" },
  // Vue: { _id: "67rdca3eeb7f6fgeed471829", name: "Vue" },
};

if (!localStorage.getItem("stack")) {
  localStorage.setItem("stack", JSON.stringify(stack));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("stack")));
    }, 2000);
  });

export default {
  fetchAll,
};
