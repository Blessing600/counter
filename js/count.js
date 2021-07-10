
        // Initialize all variables
        var counterTag = document.getElementById("counter");
        var low = document.getElementById('low');
        var add = document.getElementById("add");
       
    // add event listener to buttons 
    low.addEventListener('click', lowCount);
    add.addEventListener('click', addCount);
    
    // this function get the current counter value
    function  getCurrentCount(){
        return parseInt(counterTag.innerText)
    }
    // Increament Counter by 1    
     function addCount(){


    if(validateCount(getCurrentCount(),"add")){
    var count = getCurrentCount() + 1
    counterTag.innerHTML = count
    }

   }

// Decreament Counter by 1
function lowCount(){
    if(validateCount(getCurrentCount(), "low")){
        var count = getCurrentCount() - 1
        counterTag.innerHTML = count
    }
}

// Set counter in a range 0 -> 50
function validateCount(count, action){
   
    if(action == "add"){
        if( count < 50){
            return true
        }
    }

    if(action == "low"){
        if(count > 0){
            return true
        }
    } 
        
   return false

   }
