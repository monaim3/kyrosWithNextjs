import CountUp from 'react-countup';


const Counter = () => {
   
    return (
        <div className='counter px-32 py-12 lg:px-16 lg:py-24'>
            <div className="counter-wrapper lg:grid grid-cols-4 gap-5">
                <div className="">
                    <h2 className='text-white text-2xl font-bold'>
                        <CountUp start={8200} end={8240} >
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>

                    </h2>
                    <p className='text-xs text-[#79746C] mt-2'>HOURS OF WORKS
                    </p>
                </div>
                <div className="">
                    <h2 className='text-white text-2xl font-bold'>
                        <CountUp start={290} end={315} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>

                    </h2>
                    <p className='text-xs text-[#79746C] mt-2'>CASES DONE
                    </p>
                </div>
                <div className="">
                    <h2 className='text-white text-2xl font-bold'>
                        <CountUp start={200} end={250} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>

                    </h2>
                    <p className='text-xs text-[#79746C] mt-2'>SATISFIED CUSTOMERS
                    </p>
                </div>
                <div className="">
                    <h2 className='text-white text-2xl font-bold'>
                        <CountUp start={0} end={32} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>

                    </h2>
                    <p className='text-xs text-[#79746C] mt-2'>AWARDS WINNING

                    </p>
                </div>

            </div>
        </div>
    );
};

export default Counter;