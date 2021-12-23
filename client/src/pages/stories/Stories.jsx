import "./stories.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Story from "../../components/story/Story";
import StoryImage from "../../design/pexels-roman-odintsov-4553618.jpg";
import axios from "axios";

const Stories = () => {
	const [stories, setStories] = useState([]);
	const isMounted = useRef(true);

	const initialComponent = () => {
		return <img className='story-image' src={StoryImage} alt='' />;
	};

	useEffect(() => {
		if (isMounted.current) {
			const getStories = async () => {
				const { data } = await axios.get("http://localhost:4300/api/v1/story");
				setStories(data.rows);
			};
			getStories();
			return () => {
				isMounted.current = false;
			};
		}
	}, []);
	return (
		<section className='story-container-section'>
			<Link to='/' className='home-link'>
				<i className='fas fa-chevron-left'></i>
				<p>home</p>
			</Link>
			<div
				className={`${
					stories.length < 1 ? "story-telling centered" : "story-telling "
				}`}
			>
				<Link to='/create'>Tell Your Story</Link>
			</div>
			{stories.length < 1 ? (
				initialComponent()
			) : (
				<>
					{stories.map((story) => {
						return (
							<Story
								key={story.id}
								id={story.id}
								title={story.title}
								first_name={story.first_name}
								last_name={story.last_name}
								story={story.story}
							></Story>
						);
					})}
				</>
			)}
		</section>
	);
};

export default Stories;
