import { useLocation } from "react-router-dom";

export default function Counrty() {
  const {
    state: { state },
  } = useLocation();
  return (
    <div className="wrapper">
      {state && (
        <div className="country">
          <h1>{state.common}</h1>
          <h2>Capital: {state.capital}</h2>
          <h2>Population: {state.population}</h2>
          <img
            style={{ width: "18rem", height: "12rem" }}
            src={state.svg}
          ></img>
        </div>
      )}
    </div>
  );
}
