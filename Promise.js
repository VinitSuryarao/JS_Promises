

// Function which has promise
function GetData(flag)
{
    return new Promise(function(resolve, reject){
        if(flag){
            resolve("Sucess");
        }
        else{
            reject("Failed");
        }
    });
}

// Call then and catch function base on condition
GetData(true).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});