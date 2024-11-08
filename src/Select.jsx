import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import heroes from './heroes.json'; 

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// Filtra solo los héroes de Marvel
const marvelHeroes = heroes.filter(hero => hero.publisher === "Marvel Comics").map(hero => hero.superhero);

function getStyles(name, selectedHeroes, theme) {
  return {
    fontWeight: selectedHeroes.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function MarvelHeroSelect() {
  const theme = useTheme();
  const [selectedHeroes, setSelectedHeroes] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedHeroes(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="marvel-multiple-select-label">Heroes de Marvel</InputLabel>
        <Select
          labelId="marvel-multiple-select-label"
          id="marvel-multiple-select"
          multiple
          value={selectedHeroes}
          onChange={handleChange}
          input={<OutlinedInput label="Marvel Heroes" />}
          MenuProps={MenuProps}
        >
          {marvelHeroes.map((hero) => (
            <MenuItem
              key={hero}
              value={hero}
              style={getStyles(hero, selectedHeroes, theme)}
            >
              {hero}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
