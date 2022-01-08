const impvdec = () => {
    return (
        <div>
            <div className="text-blue-900 w-[1200px] text-6xl my-14 mx-14">
                What is Imperative Style?  
            </div>

            <div className="text-gray-600 text-2xl my-14 mx-28">
                <b>Imperative</b>, as the word states, is a much more descriptive <br />
                style of coding, Imperative style of coding describes the code <br />
                a lot more than Declarative style, its a lot more verbose and <br />
                if new conditions are required, they can be easily implemented if <br />
                the code is written in Imperative style of coding. <br />
                For example, Writing a code that takes an array <br />
                and returns all the numbers that are greater <br />
                than 5, It will be written as.

            </div>

        <div className="bg-blue-900 rounded-2xl px-4 py-4 mx-40 my-[-140px]  float-right shadow-xl">
            <code className="text-gray-200 w-[800px] h-[300px] text-2xl">
                {`for (let index = 0; index < Arr.length; index++) { `}<br/>{`
                       --->if(Arr[i] > 5) {`}<br/>{`
                       ------>newArr.push(Arr[i]);`}<br/>{`
                       ------>}`}<br/>{`
                       --->} `}<br/>{`
                    console.log(newArr);

                `}
            </code>
        </div>

        <div className=" bg-blue-900 h-[640px] mt-40 ">
 
        <div className="text-blue-900 w-auto text-6xl mr-28 my-40 text-right ">
                What is Declarative Style?  
            </div>
            <div className="absolute text-white w-auto text-6xl left-[780px] top-[680px] text-right ">
                What is Declarative Style?  
            </div>

            <div className="text-white text-2xl my-14 mx-28 text-right ">
                <b>Declarative</b>, on the other hand, is much less descriptive <br />
                than Imperative Style, Declarative style mostly use build-in <br />
                functions, Generally reading Declarative code might give some <br />
                hint as to what is going on, but their down side is that <br />
                Declarative code can't be easily changed according to new. <br />
                requirements, For example, Writing the same code that  <br />
                takes an array and returns all the numbers that<br />
                are greater than 5, It will be written as.

            </div>

            <div className="bg-white rounded-2xl px-4 py-4 mx-12 my-[-140px]  float-left shadow-xl">
            <code className="text-blue-900 w-[800px] h-[300px] text-2xl ">
                {`let finder = Arr => Arr.filter(index => index < 5)`}<br/>
                {`console.log(finder(Arr));`}
            </code>
        </div>

        </div>




        </div>
    );
}
 
export default impvdec;