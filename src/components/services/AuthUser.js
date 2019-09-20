
const METHODS = {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

export function AuthUser(type, userdata) {

    let headers = new Headers();
    

    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000/login');
    headers.append('Access-Control-Allow-Credentials', 'true');


    let BaseUrl = "https://localhost:44339/api/auth/login/" + userdata.username + "/" + userdata.password;
    return new Promise((resolve, reject) => {

        fetch(BaseUrl, {
            mode: "cors",
            headers: headers,
            method: METHODS.POST,
            body: JSON.stringify(userdata)
        })
            .then((resp) => {
              if(resp.ok){
                 resp.json().then((token)=>{
                   return resolve(token.token);
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
                reject(error);
            })
    });
}