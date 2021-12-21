import "./singlestory.css";
import User from "../../design/personal-3149976_960_720.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const SingleStory = () => {
	let { id } = useParams();
	let navigate = useNavigate();

	const [singleStory, setSingleStory] = useState([]);

	useEffect(() => {
		const getSingleStory = async () => {
			const { data } = await axios.get(
				`http://localhost:4300/api/v1/story/${id}`
			);
			setSingleStory(data.rows);
		};
		getSingleStory();
	}, [id]);

	const deleteStory = async (id) => {
		const { data } = await axios.delete(
			`http://localhost:4300/api/v1/story/${id}`
		);
		console.log(data);
		navigate("/stories");
	};

	return (
		<div className='single-story'>
			<Link to='/stories' className='home-link'>
				<i className='fas fa-chevron-left'></i>
				<p>All Stories</p>
			</Link>
			{singleStory.map((story) => {
				return (
					<section key={story.id}>
						<img src={User} alt='' />
						<h3>{story?.title}</h3>
						<div className='writer_details'>
							<div className='writer'>
								<img src={User} alt='' className='user' />
								<span>
									{story?.first_name} {story?.last_name}
								</span>
								<span>12/19/2021</span>
							</div>
							<div className='writer-message'>
								<p>{story?.story}</p>
							</div>
						</div>
						<p className='read-more'>
							Read more stories by {story?.first_name} {story?.last_name}
						</p>
						<div className='button-container'>
							<Link to={`/update/${id}`}>Update</Link>
							<button onClick={() => deleteStory(story?.id)}>Delete</button>
						</div>
					</section>
				);
			})}
		</div>
	);
};

export default SingleStory;
