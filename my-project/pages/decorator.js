const decorator = () => {
   return (
       <div>
           <div className="text-blue-900 w-[1200px] text-6xl my-14 mx-14">
            <img className="float-right" src="task.png"/>
               What are Decorators?  
           </div>


           <div className="text-gray-600 text-4xl my-14 mx-28">
               As simple as function wrapping other <br /> functions to provide
               additional functionaliy. <br /><i>By the name {"\'to decorate \'"} </i>

           </div>

            <div className="w-[200px] h-[100px]"></div>
            <hr className="mx-auto opacity-20 w-1/2"  />
       
           <div className="text-center text-blue-900 text-6xl mt-20 mx-14">
               Types of decorators!  
           </div>

           <div className="text-gray-600 text-white text-2xl my-14 mx-28 text-center ">
               There are two main types of Decorators! <i>the old-function wrap</i> <br />
               decorators and the ES7 <code className="bg-gray-200 text-red-500 px-1 py-1">@decorator</code> decorators.

           </div>

           <hr className="mx-auto opacity-20 w-1/2 my-20"  />


           <div className="text-center">
           <a href="http://localhost:3000/dec1"><button className="rounded-2xl mx-20 text-black bg-gray-200 px-6 py-6 text-4xl hover:text-blue-600">the old-function wrap <br /> Example</button></a>
            <a href="http://localhost:3000/dec2"><button className=" rounded-2xl mx-20 text-black bg-gray-200 px-6 py-6 text-4xl hover:text-blue-600">@decorator <br />Example</button></a>

           </div>


           <hr className="mx-auto opacity-20 w-1/2 mt-40 br-8"/>

       </div>

   );
}

export default decorator;