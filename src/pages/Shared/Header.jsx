import moment from 'moment';
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10 gap-1'>
            <div>
                <img src={logo} alt="" />
            </div>
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;