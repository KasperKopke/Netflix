export const movieTmpl = (movie) => `
  <div class="movie-container">
    <img src="${movie.image}" alt="" />
    <div class="movie-hover-content">
      <div class="movie-top">
        <ul class="movie-btns">
          <li><a href="#"><i class="fa-solid fa-circle-play"></i></a></li>
          <li><a href="javascript:void(0)" class="minlist"><i movieid="${movie.id}" class="fa-solid fa-square-plus"></i><i movieid="${movie.id}" class="fa-regular fa-circle-check active"></i></a></li>
          <li><a href="#"><i class="fa-regular fa-thumbs-up"></i></a></li>
          <li><a href="javascript:void(0)"><i movieid="${movie.id}" class="fa-regular fa-circle-down"></i></a></li>
        </ul>
      </div>
      <div class="movie-middle">
        <div class="age"><p>${movie.age}</p></div>
        <div class="length"><p>${movie.time}</p></div>
        <div class="hd"><p>HD</p></div>
      </div>
      <div class="movie-bottom">
        <p>${movie.category}</p>
      </div>
    </div>
  </div>
`;

export const movieTmplMinList = (movie) => `
  <div class="movie-container">
    <img src="${movie.image}" alt="" />
    <div class="movie-hover-content">
      <div class="movie-top">
        <ul class="movie-btns">
          <li><a href="#"><i class="fa-solid fa-circle-play"></i></a></li>
          <li><a href="javascript:void(0)" class="minlist"><i movieid="${movie.id}" class="fa-regular fa-circle-check"></i></a></li>
          <li><a href="#"><i class="fa-regular fa-thumbs-up"></i></a></li>
          <li><a href="javascript:void(0)"><i class="fa-regular fa-circle-down"></i></a></li>
        </ul>
      </div>
      <div class="movie-middle">
        <div class="age"><p>${movie.age}</p></div>
        <div class="length"><p>${movie.time}</p></div>
        <div class="hd"><p>HD</p></div>
      </div>
      <div class="movie-bottom">
        <p>${movie.category}</p>
      </div>
    </div>
  </div>
`;

/* linje 59 med src 
<img
        src="${modal.logo}"
        alt=""
      /> */

export const modalTmpl = (modal) => `
<div class="modal-box">
<div class="imgtag">
  <div class="ex"><i class="fa-regular fa-circle-xmark"></i></div>
  <img src="${modal.image}" alt="" />
  <div class="overlay-shadow">
    <div class="overlay-shadow-content">
      <img
        src=""
        alt=""
      />
      <div class="modal-btns">
        <ul>
          <li>
            <a class="play" href="#"
              ><i class="fa-solid fa-play"></i>
              <p>Afspil</p></a
            >
          </li>
          <li>
            <a href="javascript:void(0)" class="minlist"
              ><i
                movieid="${modal.id}"
                class="fa-solid fa-square-plus"
              ></i
              ><i
                movieid="${modal.id}"
                class="fa-regular fa-circle-check active"
              ></i
            ></a>
          </li>
          <li>
            <a href="#"><i class="fa-regular fa-thumbs-up"></i></a>
          </li>
          <li>
            <a href="javascript:void(0)"></a
            ><i class="fa-solid fa-volume-high"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="text-content">
  <div class="movie-middle2">
    <div class="length2"><p>${modal.time}</p></div>
    <div class="hd2"><p>HD</p></div>
    <div class="age2"><p>${modal.age}</p></div>
  </div>
  <div class="description">
    <p>
    ${modal.description}
    </p>
  </div>
  <div class="omfilmen">
    <h2>Om <strong> ${modal.title} </strong></h2>
    <ul>
      <li>
        <h3>Genere:</h3>
        <p>${modal.category}</p>
      </li>
      <li>
        <h3>Aldersgrænse:</h3>
        <p>Egnet til personer over ${modal.age}</p>
      </li>
    </ul>
  </div>
</div>
</div>

`;
