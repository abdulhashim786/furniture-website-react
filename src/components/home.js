import Features from "../components/Features";
import FeaturesSecond from "../components/FeaturesSecond";
import Hero from "../components/Hero";
import NewItems from "../components/NewItems";
import NewsLetters from "../components/NewsLetters";
import Products from "../components/Products";
import Testimonial from "../components/Testimonial";
import Header from "../components/Header";

function Home() {
	return (
		<div className='w-full mx-auto bg-white'>
           <Header />
			<Hero />
			<Features />
			<NewItems />
			<FeaturesSecond />
			<Products />
			<Testimonial />
			<NewsLetters />
		</div>
	);
}

export default Home;
