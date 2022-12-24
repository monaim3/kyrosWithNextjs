
import Image from 'next/image';
import aboutImg from '../public/6.png'
import SkillBar from 'react-skillbars';

const About = () => {
    const skills = [
        { type: 'Business ', level: 100 },
        { type: 'Corporate ', level: 85 },
        { type: 'Personal ', level: 75 },
        { type: 'Family ', level: 50 },
        { type: 'State ', level: 25 },
        
      ];
      const colors = {
        bar: "#AD8E6D",
        title: {
          text: "#fff",
          background: "#303030"
        }
      };
    return (
        <div className='lg:grid grid-cols-5 gap-5 mt-12 px-4 lg:px-12'>
            <div className="about-img col-span-2">
            <Image className=''  src={aboutImg} width='100%' height='80%' alt='man'></Image>
            </div>
            <div className="about-skill col-span-3 ">
          <h1 className='text-2xl font-bold text-white'>About Me
          </h1>
          <p className='text-[#79746C] mt-4'>In quis amet ex veniam in irure est culpa veniam velit fugiat cupidatat duis <br/> anim commodo elit in occaecat cupidatat eu et sunt commodo voluptate <br/>ullamco magna nulla amet. Lorem ipsum officia veniam enim sit culpa velit <br/> proident enim ea officia aute non in mollit culpa anim magna sit veniam irure <br/> eiusmod.</p>
          <div className='mt-12 leading-6 '>
          <SkillBar className='py-12' skills={skills} height={10} colors={colors}/>
          </div>
            </div>
        </div>
    );
};

export default About;