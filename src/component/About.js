import { FaInstagramSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { BsTwitterX } from "react-icons/bs";

function About()
{
  return(
    <div>
         <section class="text-gray-600 bg-gray-100 body-font">
  <div class="container px-5 py-24 mx-auto ">
    <div class="flex flex-col text-center w-full mb-20 flex-wrap ">
      <h1 class="text-3xl font-medium title-font mb-4 text-gray-900 underline">OUR TEAM</h1>
    </div>
    <div class="flex flex-wrap -m-4 justify-between">
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="Rahul.jpg"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Kotha Rahul</h2>
            <h3 class="text-gray-500 mb-3">Data Analysis</h3>
            <span className="flex items-center justify-center gap-x-[40px]">
               <a href="#"><FaInstagramSquare className="text-2xl text-pink-400 "/></a>
               <a href="#"><CgMail  className="text-2xl text-white-200 "/></a>
               <a href="#"><BsTwitterX className="text-2xl" /></a>
            </span>
           
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="vaibhav.jpg"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Vaibhav Mahant</h2>
            <h3 class="text-gray-500 mb-3">Web Developer</h3>
            <span className="flex items-center justify-center gap-x-[40px]">
               <a href="#"><FaInstagramSquare className="text-2xl text-pink-400"/></a>
               <a href="#"><CgMail className="text-2xl" /></a>
               <a href="#"><BsTwitterX className="text-2xl"/></a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="Ganesh.jpg"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Ganesh Kumhar</h2>
            <h3 class="text-gray-500 mb-3">Ai Expert</h3>
            <span className="flex items-center justify-center gap-x-[40px]">
               <a href="#"><FaInstagramSquare className="text-2xl text-pink-400"  /></a>
               <a href="#"><CgMail className="text-2xl" /></a>
               <a href="#"><BsTwitterX className="text-2xl"/></a>
            </span>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>
    </div>
  )
}
export default  About