import React, { useState } from "react";
import Card from "./Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [musicalGenre, setMusicalGenre] = useState("");
  const [nameSong, setNameSong] = useState("");

  const onChangeUser = (e) => setUser(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeMusicalGenre = (e) => setMusicalGenre(e.target.value);
  const onChangeNameSong = (e) => setNameSong(e.target.value);

  const validateUser = (user) => { 
      const withoutSpaces = user.trim();

      if (withoutSpaces.length > 2) {
          return true;
      } else {
          return false;
      }
  }

  const validatePassword = (password) => {

    let withoutSpaces = password.trim();

      if (withoutSpaces > 5) {
          return true;
      } else {
          return false;
      }
  }

  const validateMusicalGenre = (genre) => { 

    if (genre != "") {
        return true;
    } else {
        return false;
    }
}

const validateNameSong = (song) => { 

  if (song != "") {
      return true;
  } else {
      return false;
  }
}

  const onSubmitForm = (e) => {
      e.preventDefault();

      const isUserValid = validateUser(user);
      const isPasswordValid = validatePassword(password);
      const isGenreValid = validateMusicalGenre(musicalGenre);
      const isSongValid = validateNameSong(nameSong);

      if(isUserValid && isPasswordValid && isGenreValid && isSongValid) {
        return <Card />;
      } else {
        alert('Por favor chequea que la información sea correcta')
      }

  };

  return (
      <div>
      <form onSubmit={onSubmitForm}>
      <input
      type="text"
      placeholder="Usuario"
      value={user}
      onChange={onChangeUser}
      />
      <input
      type="text"
      placeholder="Password"
      value={password}
      onChange={onChangePassword}
      />
      <input
      type="text"
      placeholder="Género Musical preferido"
      value={musicalGenre}
      onChange={onChangeMusicalGenre}
      />
      <input
      type="text"
      placeholder="Canción favorito"
      value={nameSong}
      onChange={onChangeNameSong}
      />
      <button type="submit">Enviar</button>
      </form>
      </div>
      );
}

export default App;
