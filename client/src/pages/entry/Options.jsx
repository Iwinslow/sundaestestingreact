import axios from 'axios';
import { useEffect, useState } from 'react';

import { Container } from '@mui/material';

import ScoopOptions from './ScoopOptions';
import ToppingOption from './ToppingOption';
import AlertBanner from '../../components/AlertBanner';

function Options({ optionType }) {
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setOptions(res.data))
      .catch((error) => {
        setError(true);
      });
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOption;

  const optionItems = options.map((opt, i) => (
    <ItemComponent name={opt.name} imagePath={opt.imagePath} key={i} />
  ));
  if (error) {
    return <AlertBanner />;
  } else {
    return <Container maxWidth="sm">{optionItems}</Container>;
  }
}

export default Options;
