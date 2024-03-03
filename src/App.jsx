import "./App.css";
import Header from "./components/Header";
import AddModals from "./components/Modals";
import Table from "./components/Table";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
	return (
		<div className='container text-center py-4 '>
			<h1 className='mx-auto w-50 border border-2 p-3 rounded-3 mb-5'>Students App</h1>
			<Header />
			<Table />
		</div>
	);
}

export default App;
