import React, { useState, useEffect, useRef } from "react";
import "./country.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Country = () => {
	const [countries, setCountries] = useState([]);
	const [input, setInput] = useState("");
	const [singleCountry, setSingleCountry] = useState([]);
	const isMounted = useRef(true);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { data } = await axios.post(`http://localhost:4300/api/v2/country`, {
			name: input,
		});
		console.log(data);
		setSingleCountry(data);
	};

	const singleCountryDetail = () => {
		return (
			<>
				<Link to='/'>
					{singleCountry.map((country, index) => {
						const { name, population, region, capital, flags } = country;
						return (
							<Link to={`/explore/${index}`} key={index}>
								<div className='detailContainer'>
									<img src={flags.svg} alt='' />
									<div className='details'>
										<h3 className='title'>{name.common}</h3>
										<p>
											Population: <span>{population}</span>
										</p>
										<p>
											Region: <span>{region}</span>
										</p>
										<p>
											Capital: <span>{capital}</span>
										</p>
									</div>
								</div>
							</Link>
						);
					})}
				</Link>
			</>
		);
	};

	useEffect(() => {
		if (isMounted.current) {
			const getCountries = async () => {
				const { data } = await axios.get(
					"http://localhost:4300/api/v2/countries"
				);
				setCountries(data);
			};
			getCountries();
			return () => {
				isMounted.current = false;
			};
		}
	}, []);

	return (
		<div className='country__container'>
			<header>
				<p>Where in the world?</p>
				<p>Explore</p>
			</header>
			<div className='country__itemContainer'>
				<form className='search__formContainer' onSubmit={handleSubmit}>
					<i className='fas fa-search    '></i>
					<input
						type='text'
						placeholder='Search for a country...'
						name='country'
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button>search</button>
				</form>
				<div className='country__detailContainer'>
					{singleCountry.length > 1 ? (
						singleCountryDetail()
					) : (
						<>
							{countries.map((country, index) => {
								const { name, population, region, capital, flags } = country;
								return (
									<Link to={`/explore/${name.common}`} key={index}>
										<div className='detailContainer'>
											<img src={flags.svg} alt='' />
											<div className='details'>
												<h3 className='title'>{name.common}</h3>
												<p>
													Population: <span>{population}</span>
												</p>
												<p>
													Region: <span>{region}</span>
												</p>
												<p>
													Capital: <span>{capital}</span>
												</p>
											</div>
										</div>
									</Link>
								);
							})}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Country;
