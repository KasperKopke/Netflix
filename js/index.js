import service from "./service.js";
import { modalTmpl, movieTmpl, movieTmplMinList } from "./template.js";

const movies = await service.getMovies();

const categories = [...new Set(movies.map((movie) => movie.category))];
console.log(categories);
categories.forEach((category) => {
  const container = document.querySelector(`.${category.toLowerCase()}`);

  movies.forEach((movie) => {
    if (movie.category === category) {
      // Check om filmen tilhører den pågældende kategori
      container.insertAdjacentHTML("beforeend", movieTmpl(movie));
    }
  });
});

/* ADD TO MINLISTE */

const minListe = [];

const minListeBtn = document.querySelectorAll(".minlist");

minListeBtn.forEach((btns) => {
  console.log(btns);
  btns.addEventListener("click", (e) => {
    const movieId = e.target.getAttribute("movieid");
    console.log(movieId);
    removeAndAddToList(movieId);
  });
});

const removeAndAddToList = (id) => {
  const movieID = Object.values(movies).find(
    (movies) => movies.id === parseInt(id)
  );

  console.log("Movie ID:", movieID);
  const movieInList = minListe.findIndex((movie) => movie.id === parseInt(id));

  if (movieInList === -1) {
    minListe.push(movieID);
  } else {
    minListe.splice(movieInList, 1);
  }

  renderlist();
};

const renderlist = () => {
  const minListeContainer = document.querySelector(".min-liste");
  if (minListeContainer) {
    minListeContainer.innerHTML = "";

    if (minListe.length > 0) {
      minListe.forEach((element) => {
        minListeContainer.insertAdjacentHTML(
          "beforeend",
          movieTmplMinList(element)
        );
        /* tilføj så den smider den ind i min liste siden */
      });
    }
  }

  removeFromTopFilm();
};

const removeFromTopFilm = () => {
  const movieIcons = document.querySelectorAll(
    ".min-liste .fa-regular.fa-circle-check"
  );

  movieIcons.forEach((icon) => {
    const movieId = icon.getAttribute("movieid");
    icon.addEventListener("click", () => {
      removeAndAddToList(movieId);
    });
  });
};

removeFromTopFilm();

const changeIcon = () => {
  const square = document.querySelectorAll(".fa-square-plus");
  const check = document.querySelectorAll(".fa-circle-check");

  square.forEach((sq, index) => {
    sq.addEventListener("click", () => {
      sq.classList.toggle("active");
      check[index].classList.toggle("active");
    });
  });

  check.forEach((ch, index) => {
    ch.addEventListener("click", () => {
      ch.classList.toggle("active");
      square[index].classList.toggle("active");
    });
  });
};

changeIcon();

/* MODAL */

const openModalBtn = document.querySelectorAll(".fa-circle-down");

const modal = document.querySelector(".modal");

const modalWithId = (id) => {
  const movieID = movies.find((movie) => movie.id === parseInt(id));

  console.log("Movie ID:", movieID);
  modal.innerHTML = "";
  modal.insertAdjacentHTML("beforeend", modalTmpl(movieID));
};

openModalBtn.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

function openModal(event) {
  const modalid = event.target.getAttribute("movieid");
  console.log("Movie ID:", modalid);
  modalWithId(modalid);
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  const closeModalBtn = document.querySelector(".fa-circle-xmark");
  console.log("closeModalBtn:", closeModalBtn);
  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  });
}
