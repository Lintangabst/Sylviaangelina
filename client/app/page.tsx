import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Mainpage from '@/components/Mainpage';

const LandingPage: React.FC = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <hr className="my-2 w-3/4 mx-auto border-gray-300 pt-14" />
    <Mainpage/>
      <hr className="my-2 w-3/4 mx-auto border-gray-300 mt-14 " />
      <Footer/>
    </div>
  );
};

export default LandingPage;
