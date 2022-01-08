const Event1 = () => {
    return (
        <div>

            <div className="bg-blue-900 text-6xl py-10 px-10 text-white">
                what are synthetic events?
            </div>
            <div className="text-6xl py-10 px-10 text-blue-900 ml-6 mt-10">
               <i> In Simple Terms : </i>
            </div>

            <pre className="text-4xl text-gray-600 ml-6 mt-10">

            {`     A synthetic event is a 
     cross-browser wrapper
     around the browser's
     native event`}
 <div className="float-right mt-[-350px] mr-[200px]">
                <img src="bb.png" alt="" />
            </div>
            </pre>
        
<div className="bg-blue-900 h-[500px] ">

            <div className="pt-8 text-right mt-60 mr-60 text-6xl text-white">
                Advantages?

                <div className="text-2xl mt-8">
                 <b>They are there </b> to provide a common interface <br /> between browser inconsistencies and large <br /> amounts of events ultimately <br /> perform better because of event pooling.
                </div>

                <div className="text-2xl mt-8">
                 <b>Synthetic Events</b> are much more optimized <br /> than regular events. Synthetic functions do <br />improve the overall performance
                </div>
            </div>
            
        <div className="text-2xl bg-white absolute top-[870px] left-[100px] p-10 rounded-2xl">
            <pre>
{`.onCopy={}
.onCut={}
.onPaste={}
.onClickCapture={}
.onCompositionEnd={}

etc..
`}
            </pre>
        </div>


</div>           

           


        </div>
    );
}
 
export default Event1;