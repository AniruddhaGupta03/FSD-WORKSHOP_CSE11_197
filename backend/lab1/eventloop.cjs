console.log("this is starting point of my code");
process.nextTick(()=>{
    console.log("this is process.nextTick operation");//asynchronus non blocking
})
setImmediate(()=>{
    console.log("this is set immediate operation");
})

setTimeout(() => {
    console.log("this is setTimeout operation")
}, 10000);
console.log("this is end point of my code");//synchronus blocking

setTimeout(() => {
    console.log("this is second timeout" )
}, 5000);
new Promise((resolve,reject)=>{//priority depend on environment in commonjs nextrick has high priority in module promise has high priority
    let success=false;
    if(success)
        resolve("data loaded successfully");
    else
        reject("data loading failed")
}).then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
});

button.addEventListener("hover", (event) => {
  console.log("hovering...");
});

button.dispatchEvent("hover", { x: 100, y: 200 });

