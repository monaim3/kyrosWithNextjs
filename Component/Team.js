import Image from "next/image";
import team1 from '../public/1.jpg'
import team2 from '../public/2.jpg'
import team3 from '../public/3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
const Team = () => {
    return (
        <div className="mt-12">
            <h3 className="text-2xl font-bold text-white text-center">Meet The Team
            </h3>
            <div className='w-24 flex justify-between mx-auto mt-2'>
                <hr className='mx-auto w-6 h-0.5 bg-[#AD8E6D]' />
                <hr className='mx-auto w-6 h-0.5 bg-[#AD8E6D]' />
                <hr className='mx-auto w-6 h-0.5 bg-[#AD8E6D]' />

            </div>
            <div className="team-wrapper p-12 lg:px-24 mt-12 lg:grid grid-cols-3 gap-5">
                {/* team one */}
                <div className="pb-4 lg:pb-0">
                     <div className="relative hover:scale-105 duration-700">
                     <Image className="rounded-md " src={team1} width='100%' height='300' alt='team-membar'></Image>
                     </div>
                     
                     <div className="social-manage flex justify-evenly bg-[#AD8E6D] text-white p-2 w-28 rounded-md absolute  mt-[-18%]  ml-[22%] lg:mt-[-5%] lg:ml-[8%]">
                     <FontAwesomeIcon icon={faFacebookF} />
                     <FontAwesomeIcon icon={faTwitter} />
                     <FontAwesomeIcon icon={faLinkedinIn} />
                     <FontAwesomeIcon icon={faPinterest} />
                     </div>
                    <div className="text-center mt-2">
                        <h4 className="text-1xl text-white font-semibold">Fynley Wilkinson</h4>
                        <h4 className="text-base text-[#807A73]">Managing Partner
                        </h4>
                    </div>
                </div>
                {/* team two */}
                <div className="pb-4 lg:pb-0">
                     <div className="relative hover:scale-105 duration-700">
                     <Image className="rounded-md " src={team2} width='100%' height='300' alt='team-membar'></Image>
                     </div>
                     
                     <div className="social-manage flex justify-evenly bg-[#AD8E6D] text-white p-2 w-28 rounded-md absolute  mt-[-18%]  ml-[22%] lg:mt-[-5%] lg:ml-[8%]">
                     <FontAwesomeIcon icon={faFacebookF} />
                     <FontAwesomeIcon icon={faTwitter} />
                     <FontAwesomeIcon icon={faLinkedinIn} />
                     <FontAwesomeIcon icon={faPinterest} />
                     </div>
                    <div className="text-center mt-2">
                        <h4 className="text-1xl text-white font-semibold">Sasha Welsh</h4>
                        <h4 className="text-base text-[#807A73]">Senior Partner
                        </h4>
                    </div>
                </div>
                {/* team-three */}
                <div className="pb-4 lg:pb-0">
                     <div className="relative hover:scale-105 duration-700">
                     <Image className="rounded-md " src={team3} width='100%' height='300' alt='team-membar'></Image>
                     </div>
                     
                     <div className="social-manage flex justify-evenly bg-[#AD8E6D] text-white p-2 w-28 rounded-md absolute mt-[-18%]  ml-[22%] lg:mt-[-5%] lg:ml-[8%]">
                     <FontAwesomeIcon icon={faFacebookF} />
                     <FontAwesomeIcon icon={faTwitter} />
                     <FontAwesomeIcon icon={faLinkedinIn} />
                     <FontAwesomeIcon icon={faPinterest} />
                     </div>
                    <div className="text-center mt-2">
                        <h4 className="text-1xl text-white font-semibold">John Shepard</h4>
                        <h4 className="text-base text-[#807A73]">Associate
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;