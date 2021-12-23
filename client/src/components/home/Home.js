import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<main className='main'>
			<div className='main__wrapper'>
				<section className='section-first'>
					<header>
						<i className='fas fa-search    '></i>
						<Link to='/'>Explore</Link>
						<Link to='/'>Stories</Link>
					</header>
					<article>
						<h1>It is never too late to try something new</h1>
						<p>
							For me, it’s travel. For others, it may be a business venture, a
							lifestyle change, or even just a big life decision. Whatever you
							are passionate about, pursue it relentlessly.
						</p>
						<button>Book Now</button>
					</article>
				</section>
				<section className='section-second'>
					<div className='explore division'>
						<Link to='/explore'>
							<h1>Explore</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
								commodi exercitationem nobis expedita,
							</p>
						</Link>
					</div>
					<div className='stories division'>
						<Link to='/stories'>
							<h1>Stories</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
								commodi exercitationem nobis expedita,
							</p>
						</Link>
					</div>
					<div className='about division'>
						<Link to='/'>
							<h1>About</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
								commodi exercitationem nobis expedita,
							</p>
						</Link>
					</div>
					<div className='help division'>
						<Link to='/'>
							<h1>Help</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
								commodi exercitationem nobis expedita,
							</p>
						</Link>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Home;
