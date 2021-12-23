import Home from "./components/home/Home";
import Stories from "./pages/stories/Stories";
import SingleStory from "./components/SingleStory/SingleStory";
import Create from "./components/Create/Create";
import Update from "./components/Update/Update";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Country from "./pages/Country/Country";
import CountryDetail from "./pages/CountryDetail/CountryDetail";

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/stories' element={<Stories />} />
					<Route exact path='/story/:id' element={<SingleStory />} />
					<Route exact path='/create' element={<Create />} />
					<Route exact path='/update/:id' element={<Update />} />
					<Route exact path='/explore' element={<Country />} />
					<Route exact path='/explore/:id' element={<CountryDetail />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
