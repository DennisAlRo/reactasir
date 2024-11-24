import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjeta1() {
  const [pokemon, setPokemon] = useState(null);

 
  const fetchRandomPokemon = async () => {
    try {
      const randomId = Math.floor(Math.random() * 100) + 152; 
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = await response.json();
      setPokemon({
        name: data.name,
        image: data.sprites.front_default,
        stats: data.stats.map((stat) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        })),
      });
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <Card style={{ width: '10rem', fontSize: '0.5rem', padding: '0.5rem', backgroundColor:'green', border:'solid darkgreen 5px'}}>
      <Card.Img
        variant="top"
        src={pokemon.image}
        alt={pokemon.name}
        style={{ height: '8rem', objectFit: 'contain', border:'solid darkgreen 5px'}}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: '1rem' }}>{pokemon.name.toUpperCase()}</Card.Title>
        <Card.Text>
          <strong>Stats:</strong>
          <ul style={{ padding: '0.5rem' }}>
            {pokemon.stats.map((stat, index) => (
              <li key={index}>
                {stat.name}: {stat.value}
              </li>
            ))}
          </ul>
        </Card.Text>
        <Button
          variant="primary"
          size="sm"
          onClick={fetchRandomPokemon}
          style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
        >
          Otro Pokemon
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta1;
