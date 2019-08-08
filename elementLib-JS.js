/* create an object library that you can create 
html elements quickly, minimal of boilerplate required.    
 */


let elementLib = {
    fullWindow: document ,
    

   /*
        WILL BE USED TO NAVIGATE.    
   typeDirectory: function(element) { 
        element = prompt('Which type of element do you want to create?'); 
        element = element.toLowerCase(); 
        console.log(element); 
        
    },  */


        // chooses which selector is needed, then prepares a string to use.  
    getSelector: function(location) {   
    location = prompt('Are you creating a new class or id?' , 'Enter CLASS or ID.'); 
            // if class, create new obj prop class.  
        if(location.toLowerCase() === 'class') { 
            console.log('Class selector needed.');
            this.selectorString = "ClassName" ;
            return this.selectorString;  
            // same with ID.  
    } else {
        console.log('ID selector needed')
        const selectorString = 'Id' ;
            this.idSelector = selectorString ; 
            return selectorString; 
        }
},

        // runs the selector function to grab class or id and assign.  then gets, assigns and returns user defined value.  
    nameElement: function (selector) { 
        selector = this.getSelector(); 
        elementName = prompt(`What do you want to name this ${selector}?`); 
        console.log(`${selector} was assigned <strong>${elementName}</strong> as it\'s name`);
        return elementName; 
    }, 


    createElement: function(selector, name) { 
        selector = this.getSelector; 
        name = this.nameElement; 

        let newElement = document.createElement()
    } 
    
    // create a new paragraph and append it to container.
    newP: function(location, name) {
        selectorType = this.getSelector() ; 
        let pName = prompt('Give the element a name?', 'Enter an appropriate name.'); 
        let newSelectorElement = (this.fullWindow).createElement('p'); 
        let appendTo = document.getElementBy + selectorType + `('${pName})`;
        appendTo.append(newSelectorElement);  
},  

    newDiv: function() { 
        let divElement = document.createElement('div');  
        let hasProp = prompt("Will the div have a property?", "Enter YES or NO.");
        if(hasProp === '' || hasProp === undefined || hasProp === null) { 
            // basically if the return value is empty, or hasn't been created yet. 
            console.log('Error:  Incorrect or non-existant value ((Did you enter a string or number?))'); 

        } else { 
            alert(`You entered ${hasProp}`);
        }
        
        
    }
};
