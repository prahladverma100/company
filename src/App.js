import './App.css';
import Hero_section from './component/Hero_section';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section2 from './component/Section2';
import Process from './component/Process';
import Brands from './component/Brands';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Start_work from './component/Start_work';
import Last_section from './component/Last_section';
import { useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import Backtotop from './component/common1/Backtotop';
import Preloader from './component/common1/Preloader';

function App() {
   useEffect(() => {
     Aos.init({
       duration: 1500,
     });
   }, [])
  return (
    <div className=' overflow-hidden' >
    <Hero_section/>
    <Section2/>
    <Process/>
    <Brands/>
    <Start_work />
      <Last_section />
      <Backtotop />
      < Preloader/>
    </div>
  );
}

export default App;