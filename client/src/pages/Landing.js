import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import {Logo} from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
    <nav>
 <Logo/>
    </nav>
<div className="container page">
  <div className='info'>

<h1>job <span>tracking</span> app</h1>
<p>
I'm baby thundercats YOLO paleo air plant DSA copper mug. 
Meditation ennui tousled, shoreditch actually freegan everyday carry 
pickled tote bag helvetica chartreuse air plant hell of. Lo-fi leggings 
authentic readymade helvetica drinking vinegar portland
 gochujang hoodie vaporware. Umami swag tousled ramps pitchfork celiac.
</p>
<Link to="/register" className="btn btn-hero">Login Register</Link>
</div>
<img src={main} alt="job hunt" className="img main-img"/>
</div>
    </Wrapper>
  )
}






export default Landing