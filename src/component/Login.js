import { useNavigate } from "react-router-dom";
import fingerprint1 from '../Login.json'
import Lottie from 'lottie-react'
import toast from 'react-hot-toast';

function Login()
{
  const navigate=useNavigate();

  function handler(){
   toast.success('Login Successfully....')
      navigate('/')
  }
  
  return(
          <div className="bg-gray-50 h-screen ">
            <div className="flex max-w-5xl mx-auto justify-between items-center flex-wrap ">
               <div> 
                  <Lottie className="max-w-[500px]" animationData={fingerprint1}/>
                </div>
               <div className=" max-w-[400px] border rounded-3xl p-8 flex flex-col items-center justify-center shadow">
                    <h1 class="text-2xl font-semibold mb-4 underline text-slate-600">LOGIN PAGE</h1>
                    <form action="#" method="POST">
                    
                      <div class="mb-4 mt-6">
                        <label for="username" class=" text-gray-600 text-xl">Username : </label>
                        <input type="text" id="username" name="username" class=" border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                      </div>
                    
                      <div class="mb-4  mt-6">
                        <label for="file" class=" text-gray-600 text-xl">Upload file :</label>
                        <input type="file" id="file" name="file" class=" w-[210px] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                      </div>
            
                    
                      <button  onClick={handler} type="submit" class="bg-blue-500  mt-6 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                    </form>
                  
                    <div onClick={()=>{navigate("/Register")}} class="mt-6 text-blue-500 text-center">
                      <a href="#" class="hover:underline">Register Here</a>
                    </div>
                  </div>
                  
                                
                                            
            </div>
            
            
          </div>
          
  )
       
}
export default Login