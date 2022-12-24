
import { getSession, signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

import { BlogData } from "../../Component/BlogData";
const blogDeatils = () => {
    const [loding,setLoading]=useState(true)
    useEffect(()=>{
        const securepage=async()=>{
          const session=await getSession()
          if(!session){
            signIn()
          }
          else{
              setLoading(false)
          }
        }
        securepage()
    },[])
    const router = useRouter()
    const { blogDeatils } = router.query
     let singleItem=BlogData.find((ele)=>ele.id==blogDeatils)
   
     if(loding){
        return <h2> Loding Please Wait.....</h2>
     }
  if(singleItem){
    return (
        <div className="w-2/4 mx-auto shadow-lg mt-6">
           <Image className="rounded-md" src={singleItem.image} width='500' height='400' alt='Blog'></Image>
           <h2 className='text-2xl text-white mt-2'>{singleItem.title}</h2>
           <p className=' text-sm text-[#807A73] mt-4'>{singleItem.fullDes}</p>
        </div>
    );
  }
};

export default blogDeatils;

// export const getStaticProps =async(context)=>{
//     const {params}=context;
//     console.log('params',params)
    
//     // const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
//     // const singleItem= await res.json()

//     return{
//         props:{
        
//         }
//     }
// }
// export const getStaticPaths =async()=>{
//     const res=BlogData
 
//     const paths=res.map((post)=>{
//     return{
//        params:{
//            postId:`${post.id}`
//        }
//     }
//    })
//    return{
//        paths,
//        fallback: false,
//    }
// }    