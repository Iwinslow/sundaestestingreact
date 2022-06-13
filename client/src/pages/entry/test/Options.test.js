import { render, screen } from '@testing-library/react';

import Options from '../Options';

describe('Options container for scoops and toppings', () => {
  test('displays image for each scoop option from server', async () => {
    render(<Options optionType="scoops" />);
    //Here we use findAllByRole becouse its a asynchronous method of RTL. This is the answer to situations where you must find a solution to an async server fetching (This specific component use axios to make an API Fetch on useEffect hook)
    //find images regext $=match is on the end of the string
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });

    expect(scoopImages).toHaveLength(2);

    //confirm alt text of images
    const altText = scoopImages.map((element) => element.alt);

    expect(altText).toEqual(['Mint chip scoop', 'Vanilla scoop']);
  });

  test('displays image for each topping option from server', async () => {
    render(<Options optionType="toppings" />);
    const toppingImg = await screen.findAllByRole('img', { name: /topping$/i });

    expect(toppingImg).toHaveLength(3);
    const toppingImgAlts = toppingImg.map((img) => img.alt);
    expect(toppingImgAlts).toEqual([
      'M&Ms topping',
      'Hot fudge topping',
      'Peanut butter cups topping',
    ]);
  });
});
