import Countries from './Countries';
import Loading from './Loading';
import Regions from './Regions';
import Search from './Search';
import { useState, useEffect } from 'react';

const BASE_URL = 'https://restcountries.com/v3.1';

let countriesArr = [];


function App() {
	const [notFound, setNotFound] = useState(false);
  const [countries, setCountries] = useState(null);
  const [regions, setRegions] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getCountries = async () => {
    setLoading(true);
    const response = await fetch(`${BASE_URL}/all`);
    const countries = await response.json();
    return countries;
  }

  const filter = (region) => {
    setCountries(region === 'All' ? countriesArr : countriesArr.filter(country => country.region === region));
	setNotFound(false);
  }

  useEffect(() => {
    getCountries()
      .then(countries => {
        countriesArr = [...countries];
        setCountries(countriesArr);
        setRegions(['All', ...new Set(countries.map(country => country.region))]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {isLoading && <Loading/>}
	  {!isLoading && <Search setCountries={setCountries} setNotFound={setNotFound} countriesArr={countriesArr}/>}
      {regions && <Regions regions={regions} filter={filter} />}
	  {notFound && <div className='not-found'>Not Found!</div>}
      {countries && <Countries countries={countries} />}
    </div>
  )
}

export default App;
