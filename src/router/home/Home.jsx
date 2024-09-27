import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Card from '../../components/card/Card';
import Main from '../../components/main/Main';
const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
            <Navbar setSearchTerm={setSearchTerm} />
            <Main />
            <Card searchTerm={searchTerm} />
            <Footer />
        </>
    )
}

export default Home