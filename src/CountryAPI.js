export const searchForCountries = async (search) => {
  const data = await fetch(
    `https://restcountries.com/v3.1/name/${search}?fields=name,capital,flags,population`
  )
    .then((res) => res.json())
    .then((data) => data);

  let dataFormatted = [];

  if (data.length > 0) {
    dataFormatted = data.map((d) => {
      let {
        flags: { svg },
        name: { common },
        capital,
        population,
      } = d;
      capital = capital[0];
      return { svg, common, capital, population };
    });
  } else {
    dataFormatted = [];
  }

  return dataFormatted;
};
