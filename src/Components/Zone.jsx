import classimg from '../assets/class.png';
import swimimg from '../assets/swimming.png';
import playimg from '../assets/playground.png';

const Zone = () => {
    return (
        <div className='bg-base-200'>
            <h1 className='font-semibold m-3'>Q-zone</h1>
            <img src={swimimg} alt="" />
            <img src={classimg} alt="" />
            <img src={playimg} alt="" />
        </div>
    );
};

export default Zone;