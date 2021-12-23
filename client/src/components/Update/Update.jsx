import "./update.css";
import BackgroundImage from "../../design/camera-1130731_960_720.webp";
import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

// const initialState = {
// 	first_name: "",
// 	last_name: "",
// 	location: "",
// 	cost: "",
// 	story: "",
// 	title: "",
// };

const Update = () => {
	let { id } = useParams();
	let navigate = useNavigate();
	const [input, setInput] = useState({});
	const isMounted = useRef(true);

	const handleInput = (event) => {
		const { name, value } = event.target;

		setInput({
			...input,
			[name]: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { data } = await axios.put(
			`http://localhost:4300/api/v1/story/${id}`,
			{
				location: input.location,
				cost: input.cost,
				story: input.story,
				first_name: input.first_name,
				last_name: input.last_name,
				title: input.title,
			}
		);
		setInput({});
		navigate("/stories");
		console.log(data);
	};

	useEffect(() => {
			if (isMounted.current) {
		const getStory = async () => {
			const { data } = await axios.get(
				`http://localhost:4300/api/v1/story/${id}`
			);
			setInput({
				title: data.rows[0].title,
				cost: data.rows[0].cost,
				location: data.rows[0].location,
				first_name: data.rows[0].first_name,
				last_name: data.rows[0].last_name,
				story: data.rows[0].story,
			});
		};
		getStory();
		return () => {
			isMounted.current = false;
		};
	}
	}, [id, input]);

	return (
		<>
			<img src={BackgroundImage} alt='' />

			<form
				action='/create'
				className='form-horizontal'
				onSubmit={handleSubmit}
			>
				<h3>Update Your Story</h3>
				<input
					type='text'
					name='title'
					value={input?.title}
					placeholder='Title'
					onChange={handleInput}
				/>
				<input
					type='text'
					name='first_name'
					value={input?.first_name}
					placeholder='First Name'
					onChange={handleInput}
				/>
				<input
					type='text'
					name='last_name'
					value={input?.last_name}
					placeholder='Last Name'
					onChange={handleInput}
				/>
				<input
					type='text'
					name='location'
					value={input?.location}
					placeholder='Location'
					onChange={handleInput}
				/>

				<input
					type='text'
					name='cost'
					value={input?.cost}
					placeholder='Cost of Travel'
					onChange={handleInput}
				/>
				<label htmlFor='story'>Tell your story :</label>
				<textarea
					name='story'
					id='story'
					value={input?.story}
					onChange={handleInput}
				></textarea>
				<button>Update</button>
			</form>
		</>
	);
};

export default Update;
