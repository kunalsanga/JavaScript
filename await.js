async function fetchData(){
    let data = await new Promise((resolve)=>{
        setTimeout(()=>resolve("async/await data"),2000);
    });
    console.log(data);
}   
fetchData();