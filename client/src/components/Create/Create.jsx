import "./create.css";
import BackgroundImage from "../../design/camera-1130731_960_720.webp";
import { useState } from "react";
import axios from "axios";

const initialState = {
	first_name: "",
	last_name: "",
	location: "",
	cost: "",
	story: "",
	title: "",
};

const Create = () => {
	const [input, setInput] = useState(initialState);

	const handleInput = (event) => {
		const { name, value } = event.target;

		setInput({
			...input,
			[name]: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { data } = await axios.post("http://localhost:4300/api/v1/story", {
			location: input.location,
			cost: input.cost,
			story: input.story,
			first_name: input.first_name,
			last_name: input.last_name,
		});
		setInput(initialState);
		console.log(data);
	};

	return (
		<>
			<img src={BackgroundImage} alt='' />

			<form
				action='/create'
				className='form-horizontal'
				onSubmit={handleSubmit}
			>
				<h3>Create Your Own Story</h3>
				<input
					type='text'
					name='title'
					value={input.title}
					placeholder='Title'
					onChange={handleInput}
				/>
				<input
					type='text'
					name='first_name'
					value={input.first_name}
					placeholder='First Name'
					onChange={handleInput}
				/>
				<input
					type='text'
					name='last_name'
					value={input.last_name}
					placeholder='Last Name'
					onChange={handleInput}
				/>
				<input
					type='text'
					name='location'
					value={input.location}
					placeholder='Location'
					onChange={handleInput}
				/>

				<input
					type='text'
					name='cost'
					value={input.cost}
					placeholder='Cost of Travel'
					onChange={handleInput}
				/>
				<label htmlFor='story'>Tell your story :</label>
				<textarea
					name='story'
					id='story'
					value={input.story}
					onChange={handleInput}
				></textarea>
				<button>Create</button>
			</form>
		</>
	);
};

export default Create;
