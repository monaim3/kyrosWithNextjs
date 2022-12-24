import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import '../styles/Follow.module.css'
const Follow = () => {
    return (
        <div className='w-8	fixed z-30 top-1/3 left-4 follower hidden lg:block'>
            <div className="flex justify-between gap-3 text-white  flex-col ">
                     <FontAwesomeIcon icon={faFacebookF} className='text-[#AD8E6D] text-sm' />
                     <FontAwesomeIcon icon={faTwitter} className='text-[#AD8E6D] text-sm' />
                     <FontAwesomeIcon icon={faLinkedinIn} className='text-[#AD8E6D] text-sm' />
                     <FontAwesomeIcon icon={faPinterest} className='text-[#AD8E6D] text-sm' />
                     </div>
                     <div className="text-follow mt-4 text-center ml-2">
                        <h2 className='text-xs text-[#AD8E60] follows'>Follow Me</h2>
                     </div>
        </div>
    );
};

export default Follow;