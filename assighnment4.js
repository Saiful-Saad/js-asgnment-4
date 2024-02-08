
function caculateMoney(customer){
    if(typeof customer !== 'number'){
        return 'please enter integer number'
    }
    else{

        const ticketPrice = 120;
        const gourd = 500;
        const staff = 8;
        const lunchCost = 50;
    
        const ticketSale = customer * ticketPrice;
        const cost = gourd + (staff * lunchCost);
       
        const balance = ticketSale - cost;
        return balance;
    }

}

function checkName(String) {
    if(typeof String !=='string'){
        return 'Please input valid Name '
    }
    const words = ['A', 'y', 'i', 'e', 'o', 'u', 'w'];
    for(const word of words ){
        if(word.toLowerCase() === String.toLowerCase().slice(-1)){
            return 'Good Name'
        }
        else{
            return 'Bad Name'
        }
    }
}

function deleteInvalids(array){
    if(!Array.isArray(array)){
        return 'Invalid Array'
    }
   
       const newArray = [];
    for(const arr of array){
        if(typeof arr === 'number' && !isNaN(arr) ){
            newArray.push(arr)
        }
        }
    return newArray;
    
}


function password(inputs){

 
  
    const password = input.siteName.toUpperCase() +'#' +inputs.name + '@'+inputs.birthYear;
    console.log(password)
   
  }
 
  

    


const input ={ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }
const object = password(input)
// console.log(object)



function monthlySavings( incomes, Cost){
    if(!Array.isArray(incomes) && typeof livingCost !== 'number' ){
        return 'Invalid Array'
    }
    let totalIncome = 0;
    let tax = 0;
    for(const income of incomes ){
        totalIncome = totalIncome + income;
      
        if(income >= 3000){
            tax= tax + income*20/100;
        }
       
    }
    const monthlySavings = totalIncome - tax - Cost;
    console.log(monthlySavings)

    if(monthlySavings>0){
        return "total saving"
    }
    else{
        return "earn more"
    }

}
// console.log(monthlySavings(100, [ 900 , 2700 , 3400]))
    
    




