
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";
import logo from '../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { current } from "daisyui/src/colors";
const Header = () => {
    const { data: session ,status } = useSession()
    const [loading,setLoading]=useState(false)
   const handleNavIcon=()=>{
      setLoading(current=>!current)
      console.log('wrikng');
   }
    if(!session){
        return(<>
            <div className="navbar bg-[#171A1D] text-white">
            {/* responsive navbar */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleNavIcon} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                  {
                    loading && <ul tabIndex={0} className=" text-white hover:shadow-lg text-2xl font-semibold menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#171a1d] rounded-box w-52">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="blog">Blog</Link></li>
                    <li><Link href="review">Work</Link></li>
                    <li><Link href="/addservice"> Service</Link></li>
                    <li><Link href="/api/auth/signin">Login</Link></li>
                </ul>
                  }
                </div>
                <Link href="/" className="btn btn-ghost normal-case text-xl"><Image className='w-12' src={logo} alt="logo" width='150' height='150' /></Link>
            </div>


            <div className="flex-1">

            </div>
            <div className="flex-none">
                <ul className='hover:shadow-lg hidden lg:flex gap-3 mr-10'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="review">Work</Link></li>
                    <li><Link href="/addservice">Service</Link></li>
                   <li><Link href="/api/auth/signin">Login</Link></li>
                  
                </ul>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <FontAwesomeIcon className='mt-3' icon={faUser} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-500 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                               
                            <li><Link href="/api/auth/signin">Login</Link></li>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        </>
      )
        }
    
       if(session){
       return(
            <div className="navbar bg-[#171A1D] text-white">
            {/* responsive navbar */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleNavIcon} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                   {
                    loading && <ul tabIndex={0} className="text-white bg-[#171a1d] text-2xl menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="blog">Blog</Link></li>
                    <li><Link href="review">Work</Link></li>
                    <li><Link href="/addservice"> Service</Link></li>
                   

                </ul>
                   }
                </div>
                <Link href="/" className="btn btn-ghost normal-case text-xl"><Image className='w-12' src={logo} alt="logo" width='150' height='150' /></Link>
            </div>


            <div className="flex-1">

            </div>
            <div className="flex-none">
                <ul className=' hidden lg:flex gap-3 mr-10'>
                    <li className=""><Link href="/">Home</Link></li>
                    <li className=""><Link href="/blog">Blog</Link></li>
                    <li className=""><Link href="review">Work</Link></li>
                    <li className=""><Link href="/addservice">Service</Link></li>
                   {/* <li><Link href="/api/auth/signin">Login</Link></li> */}
                  
                </ul>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image src={session.user.image} width='100' height='100' alt="profile"/>
                          

                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-white bg-[#171a1d] rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                {session.user.name}

                            </a>
                        </li>
                        
                        <li ><a onClick={()=>signOut()}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
      )
    
    } 
        
      }
export default Header;