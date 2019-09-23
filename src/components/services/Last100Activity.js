const METHODS = {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

export function Last100Activity(token) {
    
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Authorization','Bearer '+token);
    let BaseUrl = "https://localhost:44339/api/activitylist/GetLastActivity";
    return new Promise((resolve, reject) => {

        fetch(BaseUrl, {
            mode: "cors",
            headers:headers,
            method: METHODS.GET
        })
            .then((resp) => {
               
              if(resp.ok){
                 resp.json().then((data)=>{
                    //  console.clear();
                    // console.log("Last-100 ");
                    // console.log(data.value);
                     
                   return resolve(data.value);
                 })
              }
              else if(resp.status==401){
                  return resolve("Not identitified user");
              }
              else{
                  return resolve("Error");
              }
            })
            .catch((error) => {
                console.log(error)
                reject(error);
            })
    });
}