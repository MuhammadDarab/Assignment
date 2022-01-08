const designs = () => {
    return (
        <div>
            <div className="text-blue-900 w-[1200px] text-6xl my-14 mx-14">
                What are Design patterns?  
            </div>

            <div className="text-gray-600 text-4xl my-14 mx-28">
            Design patterns are reusable solutions to <br /> commonly occurring problems <br /> in software design. <br /> Let’s take a look at some of the <br />  categories of design patterns.

            </div>

        <div className="bg-blue-900 rounded-2xl mr-[180px] px-4 py-4 mx-40 my-[-140px]  float-right shadow-xl">
            <code className="text-gray-200 w-[800px] h-[300px] text-2xl">
                {`

                    -> `} Creational Design patterns <br />  {`
                    -> `} Structural Design patterns <br /> {`
                    -> `} Behavioral Design patterns <br /> {`
                    -> `} Concurrency Design patterns <br />  {`
                    -> `} Architectural Design patterns <br /> {`

                `}
            </code>
        </div>

        <div className=" bg-blue-900 h-[540px] mt-40 ">
 
        <div className="text-white w-auto text-6xl pt-16 mx-auto mt-40 mb-10 text-center ">
                Creational Pattern
            </div>
        <hr className="mx-auto text-white opacity-20 w-1/2 my-10"/>
            
        <div className="text-gray-200 text-center text-2xl mx-auto w-[45%]">These patterns deal with object creation mechanisms which optimize object creation compared to a basic approach. The basic form of object creation could result in design problems or in added complexity to the design. Creational design patterns solve this problem by somehow controlling object creation.
        <br /> One of the most common method is singelton. 
        </div>
        <hr className="mx-auto text-white opacity-20 w-1/2 my-10"/>

        </div>

        <div className="text-blue-900 w-auto text-6xl pt-16 mx-auto mt-20 mb-10 text-center ">
        Architectural Pattern
            </div>
        <hr className="mx-auto text-blue-900 opacity-20 w-1/2 my-10"/>
            
        <div className="text-gray-600 text-center text-2xl mx-auto w-[45%]">Simply, Design patterns that are used for architectural purposes. Examples are: <br />
        MVC (Model-View-Controller)<br />
        MVP (Model-View-Presenter)<br />
        MVVM (Model-View-ViewModel)
        </div>
        <hr className="mx-auto text-blue-900 opacity-20 w-1/2 my-10"/>
        
{/* -------------------------=========================+++++++++======================-------------------- */}

<div className=" bg-blue-900 h-[480px] mt-40 ">
 
        <div className="text-white w-auto text-6xl pt-16 mx-auto mt-40 mb-10 text-center ">
                Concurrency Pattern
            </div>
        <hr className="mx-auto text-white opacity-20 w-1/2 my-10"/>
            
        <div className="text-gray-200 text-center text-2xl mx-auto w-[45%]">Concurrency pattern can be simply described as patterns that deals with multi-threading or multi-threaded programming paradigms
        </div>
        <hr className="mx-auto text-white opacity-20 w-1/2 my-10"/>

        </div>

        <div className="text-blue-900  w-auto text-6xl pt-16 mx-auto mt-20 mb-10 text-center ">
        Behavioural Patterns
            </div>
        <hr className="mx-auto text-blue-900  opacity-20 w-1/2 my-10"/>
            
        <div className="text-gray-900 text-center text-2xl mx-auto w-[45%]">These types of patterns recognize, implement, and improve communication between disparate objects in a system. They help ensure that disparate parts of a system have synchronized information.
        <br /> Example discussed in exapmle section</div>
        <hr className="mx-auto text-blue-900  opacity-20 w-1/2 my-10"/>



        </div>
    );
}
 
export default designs;