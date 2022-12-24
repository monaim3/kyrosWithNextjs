import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='bg-[#171A1D] lg:flex justify-between border-t py-4 px-8'>
            <div><h3 className='text-white'>© Copyright 2022 - Kyros by Monaim Mukul</h3></div>
            <div className="flex  gap-2 lg:gap-5 ml-24 mt-4 lg-mt-0 lg:ml-0  text-white rounded-md pr-12 ">
                     <FontAwesomeIcon icon={faFacebookF} />
                     <FontAwesomeIcon icon={faTwitter} />
                     <FontAwesomeIcon icon={faLinkedinIn} />
                     <FontAwesomeIcon icon={faPinterest} />
                     </div>
        </div>
    );
};

export default Footer;