import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("displays image for each scoop option from server", () => {
  render(<Options optionType="scoops" />);
  //find images regext $=match is on the end of the string
  const scoopImages = screen.getAllByRole("img", { name: /scoop$/i });
  console.log("HERE !", scoopImages)
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);

  expect(altText).toEqual(["Mint chip", "Vanilla"]);
});
