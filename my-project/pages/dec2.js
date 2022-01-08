const dec2 = () => {
    return (
        
        <div className="bg-gray-900 p-20  text-white text-3xl w-[100%] h-[100%]">
            <pre className="bg-blue-900 p-4 rounded-2xl drop-shadow-lg mx-[auto]">
             {`'use strict';

`}<code className="text-green-500 px-1 py-1">function</code>{` `}<code className="text-lime-300 px-1 py-1">elderlyDiscount(target) </code>{`{

    if(age > 50)
    target.price = 70; 

}

class Blueprint {

    constructor(name, age, item, qty) {
    
        this.price = 150; //one dollar store.
        this.name = name; 
        this.age = age; 
        this.item = item;
        this.qty = qty;

    }

    `}<code className="text-red-500 px-1 py-1">@elderlyDiscount</code>{`
    getRecipt(){
        return this.qty * this.price;
    }


}

let account = new Blueprint("darab", 51, "Soap", 4);
console.log(account.getRecipt());`}
            

            <hr className="mx-auto opacity-20 w-1/2 my-20 br-8"/>

            <b><i className="pl-96 text-gray-200">Note: You Need Babel to compile this NEW feature!</i></b> <br />
            <div className="pl-96 text-xl text-gray-500">Also as this feature is'nt yet in Js, information online MAY differ.</div>
            
            </pre>
        </div>

    );
}
 
export default dec2;