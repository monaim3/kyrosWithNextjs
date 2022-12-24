import Image from "next/image";
import Link from "next/link";
// import blog1 from '../public/9.jpg'
// import blog2 from '../public/blog1.jpg'
// import blog3 from '../public/blog1.jpg'
import Carousel from 'react-grid-carousel'
import { BlogData } from "./BlogData";
const Blog = () => {
    return (
        <>
            <div className="mt-12 px-16">
                <h3 className="text-2xl font-bold text-white text-center">Recent Blog
                </h3>
                <div className='w-24 flex justify-between mx-auto mt-2 pb-8'>
                    <hr className='mx-auto w-6 h-0.5 bg-[#AD8E6D]' />
                    <hr className='mx-auto w-6 h-0.5 bg-[#AD8E6D]' />
                    <hr className='mx-auto w-6 h-0.5 bg-[#AD8E6D]' />

                </div>
                <Carousel loop cols={3} rows={1} gap={15} showDots={true} hideArrow={true}>
                  
                    {
                        BlogData.map((ele, ind) => <Carousel.Item key={ind}>
                            <div className="hover:scale-105 duration-700">
                                <Image className="rounded-md" src={ele.image} width='500' height='400' alt='team-membar'></Image>
                            </div>

                            <div className="text-center mt-2">
                                <h4 className="text-base text-white font-semibold">{ele.title}</h4>
                                <h4 className="text-sm text-[#807A73]">
                                    {ele.shortDes}
                                </h4>
                                <Link href={`BlogDeatils/${ele.id}`}>
                                <button  className="btn-sm text-white rounded-md mt-4 bg-[#AD8E6D] px-2 py-0">Read More</button>
                                </Link>
                            </div>
                           
                        </Carousel.Item>)
                    }
                </Carousel>
            </div>

        </>
    );
};

export default Blog;