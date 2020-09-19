import React from "react";
import Search from "../components/Search";
import Pokemon from "../components/Pokemon";
import { fetchPokemon } from "../services/getPokemon";
import { Alert, Spinner } from "react-bootstrap";

const spinnerStyle = {
  width: "5rem",
  height: "5rem",
  borderWidth: "8px",
};

const spinnerWrapperStyle = {
  textAlign: "center",
  marginTop: "10rem",
};

export default function HomePage() {
  const [pokemon, setPokemon] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const getPokemon = async (query) => {
    if (!query) {
      setErrorMsg("You must enter something, To find Pokemon.");
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    // console.log(query);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        // console.log(response);
        const results = await response.json();
        // console.log(results);
        setPokemon(results);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
        setErrorMsg(
          "Ooops, It seems that the Pokemon name you are looking for is wrong."
        );
      }
    }, 2000);
  };

  return (
    <div>
      {error ? <Alert variant="danger text-center">{errorMsg}</Alert> : null}
      <Search getPokemon={getPokemon} />
      {loading ? (
        <div style={spinnerWrapperStyle}>
          <Spinner variant="primary" animation="border" style={spinnerStyle} />
        </div>
      ) : null}
      {!loading && pokemon ? (
        <Pokemon
          name={pokemon.name}
          sprite={pokemon.sprites.back_default}
          sprite_front={pokemon.sprites.front_default}
          abilities={pokemon.abilities}
          stats={pokemon.stats}
          types={pokemon.types}
        />
      ) : null}
    </div>
  );
}
