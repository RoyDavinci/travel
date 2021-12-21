import "./story.css";

import { Link } from "react-router-dom";
import Kayak from "../../design/kayak-5543935_960_720.jpg";
import User from "../../design/personal-3149976_960_720.jpg";

const Story = ({ id, title, first_name, last_name, user, date, story }) => {
	return (
		<>
			<div className='story'>
				<img src={Kayak} alt='' className='hero-img' />
				<section className='section-center'>
					<h3 className='title'>{title}</h3>
					<div className='details'>
						<img src={User} alt='' className='user' />
						<div className='detail'>
							<span>
								{first_name}, {last_name}
							</span>
							<span>12/19/2021</span>
						</div>
					</div>
					<div className='message'>
						<p>
							{story}
							<Link to={`/story/${id}`} className='continue'>
								Continue Reading...
							</Link>
						</p>
					</div>
				</section>
			</div>
		</>
	);
};

export default Story;
