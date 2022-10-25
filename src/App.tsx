import Carousel from "react-bootstrap/Carousel";
import { arrayItem } from "./utils";
import type { ArrayItem } from "./utils";

const App: React.FC = () => {
  return (
    <div
      style={{
        height: "100vh",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Carousel
        style={{
          maxWidth: "500px",
          maxHeight: "500px",
        }}
      >
        {arrayItem.map((item: ArrayItem, index: number) => {
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.image}
                alt={"item No." + { index }}
              />
              <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default App;
