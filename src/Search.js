import {useState} from 'react';

const Search = ({countriesArr, setCountries, setNotFound}) => {
	const [searchTerm, setSearchTerm] = useState('');
	
	const search = (searchTerm) => {
	  if (searchTerm) {
		let result = countriesArr.filter(country => {
			const names = [ ...country.altSpellings, country.name.common, country.name.official];
			return names.some(name => name.toLowerCase().includes(searchTerm.toLowerCase()));
		});
		
		setNotFound(result.length === 0 ? true : false);
		
		setCountries(result);
		
	  }
  }
	
	return (
		<div className='search'>
			<form onSubmit={(e) => {
				e.preventDefault()
				search(searchTerm)
			}}>
				<input 
					type='search' 
					name='search' 
					placeholder='Search for a country...' 
					value={searchTerm} 
					onChange={(e) => setSearchTerm(e.target.value)} 
				/>
			</form>
		</div>
	)
}

export default Search;