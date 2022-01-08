const dec1 = () => {
    return (
        
<div className="bg-gray-900 p-20  text-white text-3xl w-[100%] h-[100%]">
            <pre className="bg-blue-900 p-4 rounded-2xl drop-shadow-lg mx-[auto]">
             {`'use strict';

`}<code className="text-green-500 px-1 py-1">function</code>{` `}<code className="text-lime-300 px-1 py-1">DescriptionDecorator(fn) </code>{`{

    `}<code className="text-red-500 px-1 py-1">return</code>{` `}<code className="text-green-500 px-1 py-1">function() </code>{`{

        console.log('The name of this Function is : ' + fn.name);

        console.time('fn');
        fn();
        console.timeEnd('fn');

        console.log(' ms was its time of execution');

    }

}

`}<code className="text-green-500 px-1 py-1">function</code>{` `}<code className="text-lime-300 px-1 py-1">myFunction(valuePassed) </code>{`{

    let value = 1;

    for(let i = 0; i < valuePassed; i++)
    {
        value = value + 5;
    }

}

`}<code className="text-purple-500 px-1 py-1">const</code>{` Decorator = `}<code className="text-green-500 px-1 py-1">myFunction(<span className="text-gray-300">DescriptionDecorator</span>);</code>{`

    `}
    <pre className="text-gray-300 ml-20">
        /*    
        Now. <br />
        Calling Decorator will give us the output of myFunction <br />
        along with its Decorator. <br />
        */
    </pre>
    
    {`

`}<code className="text-green-500 px-1 py-1">Decorator();</code>{` 

`}
    <pre className="text-gray-300 ml-20">
        /*    
        Result: <br />
        The name of this function is: myFunction, <br />
        0.456345346 ms was its execution time.
        */
    </pre>
    
    {`



`}
            
            </pre>
        </div>

    );
}
 
export default dec1;