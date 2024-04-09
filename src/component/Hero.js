import { MdOutlineLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import fingerprint from '../Hero.json'
import Lottie from 'lottie-react'

function Hero()
{
  const navigate=useNavigate();
  return(
    <div >
          <section class="text-gray-600 body-font bg-[#EDF4F2] h-screen overflow-hidden">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center flex-wrap">
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
                  <Lottie className="w-[550px]" animationData={fingerprint}/>
              </div>
              <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class=" sm:text-4xl text-xl mb-4  text-gray-900 uppercase">Fingerprint Recoginition System....
                  
                </h1>
                <p class="mb-8 leading-relaxed">Unlock a world of possibilities with our Fingerprint Recognition System. Embrace the future of security and convenience – get started now!</p>
                <div class="flex justify-center">
                  <button  onClick={()=>{navigate("/Login")}} class="flex items-center gap-x-2 justify-center text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Login <MdOutlineLogin /></button>
                  <button onClick={()=>{navigate("/Register")}} class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Register Now</button>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}
export default Hero