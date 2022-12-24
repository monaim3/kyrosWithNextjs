import ReactTyped from 'react-typed';
import Man from '../public/5.png';
import Image from 'next/image';
const Banner = () => {
    return (
        <div className=" banner lg:flex justify-evenly">
            <div className="banner-left lg:flex flex-col  lg:justify-center pl-4 lg:pl-28 py-4 lg:py-0">
                <h3 className='lg:text-4xl font-bold text-white'>Hi, <span className='lg:text-4xl font-bold text-[#92785E]'>I'm Alberto Kyros</span>
                </h3>
                <ReactTyped
                    strings={["a Corporate Lawyer", "a Personal Lawyer", "a Business Lawyer"]}
                    typeSpeed={50}
                    backSpeed={50}
                    backDelay={1}
                    loop
                    smartBackspace
                    className='lg:text-4xl font-bold text-white mt-2'
                />

                <p className='w-46 text-[#92785E] mt-6 text-xs lg:text-base'>In quis amet ex veniam in irure est culpa veniam velit fugiat <br/> cupidatat duis anim commodo elit in occaecat cupidatat eu et sunt commodo voluptate ullamco magna nulla amet. Lorem ipsum officia.</p>
                <button className='btn  bg-[#92785E] w-24 px-12 mt-6' > Contact</button>
            </div>
            <div className="banner-right">
                <Image src={Man} width='100%' height='100%' alt='man'></Image>
            </div>
        </div>
    );
};

export default Banner;