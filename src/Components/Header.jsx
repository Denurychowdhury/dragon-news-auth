import moment from 'moment';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2  py-2'>
            <div className="logo ">
                <img className='w-[300px] animate__animated animate__rubberBand' src={logo} alt="" />
            </div>
            <h2 className='text-gray-400 animate__animated animate__bounce'>jounalism without Fear and Favour</h2>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;