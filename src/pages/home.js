import '../assets/css/main.css';

// import HeaderImg from '../assets/images/Frame 1567.png';
// import HeaderImg2 from '../assets/images/Frame 1659.png';

// components
import Nav from '../sections/nav.jsx';
import Header2 from '../sections/header2';
// import Header from '../sections/header1.jsx';
import Welcome from '../sections/welcome.jsx';
// import PicText  from "../sections/pic_text.jsx";
import Connect from '../sections/connect';
import Messages from '../sections/messages.jsx';
// import Service from '../sections/serving.jsx';
import Contact from './contact.jsx';

import Testimonial from '../sections/testimonial.jsx';
import Footer from '../sections/footer.jsx';


function Home() {
    return (
        <div>
            <Nav />
            <Header2 />
            <Welcome />
            <Messages />
            <Connect />
            <Contact />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default Home;
