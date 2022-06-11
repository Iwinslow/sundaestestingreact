import axios from 'axios';
import { useEffect, useState } from 'react';

import { Container } from '@mui/material';
import ScoopOptions from './ScoopOptions';

function Options({ optionType }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setOptions(res.data))
      .catch((error) => console.error(error));
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOptions : null;

  const optionItems = options.map((opt, i) => (
    <ItemComponent name={opt.name} imagePath={opt.imagePath} key={i} />
  ));

  return <Container maxWidth="sm">{optionItems}</Container>;
}

export default Options;
