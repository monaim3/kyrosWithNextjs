import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
const Quatation = () => {
    return (
        <div className='quatation mt-12 p-6 lg:p-48'>
            <div><FontAwesomeIcon className='text-[#AC8D6D] text-5xl ml-4' icon={faQuoteRight}/></div>
             <p className='text-2xl text-white mt-6'>In matters of truth and justice, there is no difference between large and small problems, for issues concerning the treatment of people are all the same.</p>
             <h6 className='text-base text-white mt-4'>Albert Einstein</h6>
        </div>
    );
};

export default Quatation;