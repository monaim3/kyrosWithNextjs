
const Resume = () => {
    return (
        <>
            <div className="mt-12">
                <h3 className="text-2xl font-bold text-white text-center">My Resume
                </h3>
                <div className='w-24 flex justify-between mx-auto mt-2'>
                    <hr className='mx-auto w-6 h-0.5 bg-[#AD8E6D]' />
                    <hr className='mx-auto w-6 h-0.5 bg-[#AD8E6D]' />
                    <hr className='mx-auto w-6 h-0.5 bg-[#AD8E6D]' />

                </div>
                <div className="resume-wrapper">
                    <div className="Experience mt-6">
                        <h3 className="text-2xl font-bold text-white ml-24">Experiences</h3>


                    </div>
                    <div className="Education">

                    </div>
                </div>
            </div>

            <div className="container  mx-auto w-full h-full mt-12">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-[#AD8E6D] h-full border" style={{ left: "50%" }}></div>

                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>

                        <div className="z-20 flex  order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                        </div>
                        <div className="order-1 bg-[#434349] rounded-lg shadow-xl w-5/12 px-6 py-4">

                            <h3 className="mb-3 font-bold text-xl bg-[#2D3032] p-2 text-white rounded-md">2014 - now
                            </h3>
                            <h3 className="mb-3 font-bold text-white text-xl">Director of Kyros & Co
                            </h3>
                            <h3 className="mb-3 font-semibold text-[#AD8E6D] text-base">Kyros & Co Law Firm
                            </h3>
                            <p className="hidden lg:block text-sm leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>


                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                        </div>
                        <div className="order-1 bg-[#434349] rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-xl bg-[#2D3032] p-2 text-white rounded-md">2008 - 2010
                            </h3>
                            <h3 className="mb-3 font-bold text-white text-xl">Junior Lawyer
                            </h3>
                            <h3 className="mb-3 font-semibold text-[#AD8E6D] text-base">Smith Law Firm
                            </h3>
                           
                            <p className="hidden lg:block text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>


                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                        </div>
                        <div className="order-1 bg-[#434349] rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-xl bg-[#2D3032] p-2 text-white rounded-md">2008 - 2014
                            </h3>
                            <h3 className="mb-3 font-bold text-white text-xl">Law of College
                            </h3>
                            <h3 className="mb-3 font-semibold text-[#AD8E6D] text-base">University of Sydney
                            </h3>
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                            <p className="hidden lg:block text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>


                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                        </div>
                        <div className="order-1 bg-[#434349] rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-xl bg-[#2D3032] p-2 text-white rounded-md">2004 - 2016
                            </h3>
                            <h3 className="mb-3 font-bold text-white text-xl">Senior Lawyer

                            </h3>
                            <h3 className="mb-3 font-semibold text-[#AD8E6D] text-base">Morgan Law Firm

                            </h3>
                            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                            <p className="hidden lg:block text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resume;