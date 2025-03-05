
import Footer from "./components/Footer";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/contactUs";
import Home from "./components/home";

function App() {
	return (
		<div className='w-full mx-auto bg-white'>
			{/* <Header /> */}
			<Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
			<Footer />
		</div>
	);
}

export default App;
