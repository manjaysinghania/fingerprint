import { FaHome } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { BsFingerprint } from "react-icons/bs";
import { Link } from "react-router-dom";


function Heading(){
   return(
    <div>
      
              <header class="text-gray-600 body-font bg-[#8AAAE5]">
              <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <p className="text-xl  flex items-center gap-x-2"><BsFingerprint className="text-[#1995AD] text-3xl"/> Fingerprint Detection</p>   
            <nav class="md:ml-auto flex flex-wrap items-center gap-x-4 text-base justify-center ">
              <Link  to="/" class="mr-5 text-white flex items-center gap-x-2 text-lg hover:text-gray-900  "> <FaHome /> Home
              </Link>
              <Link to="About" class="mr-5 text-white  flex items-center gap-x-2 text-lg hover:text-gray-900"> <GrContactInfo /> About us </Link>
              
            </nav>
          
          </div>
          </header>
    </div>
   )
}
export default Heading