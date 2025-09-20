import { ReactTyped as Typed } from "react-typed";

export const Hero = () => {
  return (
    <div>
      <h2 className="hero-greeting">Hello, I'm</h2>
      <h1 className="hero-name">
        <Typed
          strings={["Harriet Odhiambo", "a Software Engineer", "a Developer"]}
          typeSpeed={100}
          backSpeed={50}
          loop
        />
      </h1>
    </div>
  );
};
