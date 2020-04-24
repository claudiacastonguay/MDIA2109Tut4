export var data = {
    lastaction:"",
    numBlicks: 0
}

// setTimeout(()=>{
//     sessionStorage.getItem("data").then((val)=>{
//         ChangeData(JSON.parse(val));
//     })
// }, 1000);

if(process.browser){
    var sessiondata = sessionStorage.getItem("data");
    ChangeData(JSON.parse(sessiondata));
}


export function ChangeData(d){
    data = d;
    sessionStorage.setItem("data", JSON.stringify(data));
}