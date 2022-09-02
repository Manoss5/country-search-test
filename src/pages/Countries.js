import { useState } from "react";
import { Link } from "react-router-dom";
import { searchForCountries } from "../CountryAPI";

export default function Countries() {
  const [search_r, setSearch_r] = useState([]);

  const handleInputChange = async (e) => {
    if (e !== "") {
      const results = await searchForCountries(e);
      setSearch_r(results);
    } else {
      setSearch_r([]);
      setTimeout(() => {
        if (e === "") {
          setSearch_r([]);
        }
      }, 500);
    }
  };

  const showResults = search_r.map((r) => (
    <Link
      key={r.common}
      className="link"
      state={{ state: r }}
      to={`/${r.common}`}
    >
      {r.common}
    </Link>
  ));

  return (
    <div className="wrapper">
      <div className="flex-box">
        <input
          placeholder="search for a country..."
          onChange={(e) => handleInputChange(e.target.value)}
        ></input>
        <div className="flex-box1">{showResults}</div>
      </div>
    </div>
  );
}
