import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import './LikedShows.css'
const LikedShows = () => {
    const { likedShows } = useSelector((state) => state.tvShows);

    return (
        <div className="liked-shows-container">
            <Navbar />
            <h1>Liked Shows</h1>
            {likedShows.length > 0 ? (
                <Card showIds={likedShows} />
            ) : (
                <p>No liked shows available.</p>
            )}
            <Footer />
        </div>
    );
};

export default LikedShows;
