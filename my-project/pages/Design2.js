const design2 = () => {
    return (
        
        <div>

                <i><div className="text-center text-white pt-20 text-8xl mx-auto bg-gray-900">
                Singelton Pattern.

                </div></i>

<div className="bg-gray-900 p-20  text-white text-3xl w-[100%] h-[100%]">
        
            <pre className="bg-blue-900 p-4 rounded-2xl drop-shadow-lg mx-[auto]">
    
    {`
    
    'use strict';

    class singelton {
    
        constructor() {
            if(singelton.instance instanceof singelton){
                return singelton.instance;
            };
    
            this.singularity = {
    
                "name" : "shahab",
                "unique" : Math.random() * 500
    
            };
    
            Object.freeze(this.singularity);
            Object.freeze(this);
            singelton.instance = this;
    
        }
    
        getVal(key)
        {
    
            return this.singularity[key];
    
        }
    

        let first = new singelton();
        let second = new singelton();

        /*
        To make sure its really not allowing
        different copies.
        */

        console.log(first === second)    // true.
        
    }
    
    `}
            
            </pre>
        </div>

        <i><div className="text-center text-white pt-20 text-8xl mx-auto bg-gray-900">
                Factory Pattern.

                </div></i>

<div className="bg-gray-900 p-20  text-white text-3xl w-[100%] h-[100%]">
        
            <pre className="bg-blue-900 p-4 rounded-2xl drop-shadow-lg mx-[auto]">
    
    {`
    'use strict';

    function Attacker(name) {

        this.name = name;
        this.member = 'Attacker';
    
    }
    
    function Defender(name) {
    
        this.name = name;
        this.member = 'Defender';
    
    }
    
    function Team() {
    
        this.form = (name, member) => {
    
            switch(member) {
                case 1:
                    return new Attacker(name);
                case 2:
                    return new Defender(name);
                
    
            }
    
        }
    
    }
    
    function teamCaller() {
    
        console.log('I am ' + this.name + ' and i am a ' + this.member);
    
    }
    
    const footballTeam = new Team();
    const database = [];
    
    database.push(footballTeam.form('Bassam', 2));
    database.push(footballTeam.form('Salik', 1));
    database.push(footballTeam.form('Sohail', 1));
    database.push(footballTeam.form('Razeem', 2));
    database.push(footballTeam.form('Fahad', 2));
    
    database.forEach( (names) =>  teamCaller.call(names) );

    /* 
    Players Sorted according 
    to their assigned number
    1 = Attacker, 2 = Defender.
    */
    `}
            
            </pre>
<i>These are some common examples of Design Pattern Types.</i>
        </div>




        </div>
    );
}
 
export default design2;