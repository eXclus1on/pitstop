function PokeList() {
    function getPokemon (){
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(function () {
            console.log("resposta voltou");
        });
        console.log("Hello");
    }
  return (
    <>
    <button onClick={getPokemon}>Get Pokemon</button>
      <ul>
        <li>Pikachu</li>
        <li>Squirtel</li>
        <li>Charmander</li>
      </ul>
    </>
  );
}

export default PokeList;
