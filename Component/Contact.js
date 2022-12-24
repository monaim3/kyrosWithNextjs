
import {toast} from 'react-toastify';

const Contact = () => {
    const handleSubmit = async (event) => {
        event.preventDefault()
    

        const data= {
          first: event.target.first.value,
          last: event.target.last.value,
          phone: event.target.phone.value,
          Message: event.target.Message.value,
        }
    
        const JSONdata = JSON.stringify(data)
    
        const endpoint = '/api/form'
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSONdata,
        }
        const response = await fetch(endpoint, options)
        const result = await response.json()
        // alert(`Is this your full name: ${result.data}`)
        toast(`Your Data is submit: ${result.data}`, {autoClose: 500,});
        event.target.reset();

      }
    return (
        <div className='contact p-12'>
        <div className='w-3/4 mx-auto'>
            <h3 className="text-2xl font-bold text-white text-center">Contact
            </h3>
            <div className='w-24 flex justify-between mx-auto mt-2 pb-8'>
                <hr className='mx-auto w-6 h-0.5 bg-[#AD8E6D]' />
                <hr className='mx-auto w-6 h-0.5 bg-[#AD8E6D]' />
                <hr className='mx-auto w-6 h-0.5 bg-[#AD8E6D]' />

            </div>
            <form onSubmit={handleSubmit}>
                <div className='lg:grid grid-cols-3 gap-x-4 '>
                <div className='py-4 lg:py-0'>
              
                <input className='bg-transparent border rounded-md py-1 text-white' type="text" id="first" name="first" required  placeholder='First Name'/>
                </div>
                 <div className='py-4 lg:py-0'>
                 
                 <input className='bg-transparent border rounded-md py-1 text-white ' type="text" id="last" name="last" required placeholder='Last Name'/>
                 </div>
                 <div className='py-4 lg:py-0'>
                
                 <input className='bg-transparent border rounded-md py-1 text-white' type="text" id="phone" name="phone" required  placeholder='Your Phone'/>
                 </div>
                </div>
                 <div className='mt-6'>
                 <input className=' lg:w-full py-14 lg:py-20 bg-transparent border rounded-md py-1 text-white' type="text" id="Message" name="Message" required  placeholder='Message'/>
                 </div>
              <div className='flex justify-center text-white'>
              <button type="submit" className='mr-6 lg:mr-0 py-1 px-2 rounded-md mt-6  bg-[#AD8E6D]'>Submit Message</button>
              </div>
            </form>
        </div>
        </div>
    );
};

export default Contact;