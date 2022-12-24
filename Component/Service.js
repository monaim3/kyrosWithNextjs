import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGavel } from '@fortawesome/free-solid-svg-icons'
const Service = () => {
    return (
        <div className='mt-6'>
            <h3 className="text-2xl font-bold text-white text-center">My Services
             </h3>
             <div className='w-24 flex justify-between mx-auto mt-2'>
                <hr className='mx-auto w-6 h-0.5 bg-[#AD8E6D]'/>
                <hr className='mx-auto w-6 h-0.5 bg-[#AD8E6D]'/>
                <hr className='mx-auto w-6 h-0.5 bg-[#AD8E6D]'/>

             </div>
             <div className="box-wrapper lg:grid grid-cols-3 gap-5 p-6 lg:px-16 mt-12">
                <div className="">
                <FontAwesomeIcon icon={faBriefcase} className='text-[#AC8D6D] text-3xl'/>
                  <h2 className='mt-2 text-2xl font-semibold text-white'>Commercial Services
                   </h2>
                   <p className='mt-2 text-[#79746C] '>Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.</p>
                </div>
                <div className="">
                <FontAwesomeIcon icon={faUser} className='text-[#AC8D6D] text-3xl'/>
                  <h2 className='mt-2 text-2xl font-semibold text-white'>Employment Services

                   </h2>
                   <p className='mt-2 text-[#79746C] '>Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.</p>
                </div>
                <div className="">
                <FontAwesomeIcon icon={faGavel} className='text-[#AC8D6D] text-3xl'/>
                  <h2 className='mt-2 text-2xl font-semibold text-white'>Civil Litigation
                   </h2>
                   <p className='mt-2 text-[#79746C] '>Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.</p>
                </div>
              
             </div>
        </div>
    );
};

export default Service;