import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";

export type ArrayItem = { image: string; name?: string; description?: string };

export const arrayItem: ArrayItem[] = [
  {
    image: img1,
    name: "scene1",
    description: "This is scene1",
  },
  {
    image: img2,
    name: "scene2",
    description: "This is scene2",
  },
  {
    image: img3,
    name: "scene3",
    description: "This is scene3",
  },
  {
    image: img4,
    name: "scene4",
    description: "This is scene4",
  },
  {
    image: img5,
    name: "scene5",
    description: "This is scene5",
  },
];
