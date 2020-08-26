
let code = "b0fb564f310868e884e0"
let state = "abc123"
let client_id = "Iv1.375ef10b37e2d7a3"
let client_secret = "805c21cca14b8916bc9ea80c3ca0933d8dc36e97"
let redirect_uri = encodeURIComponent("http://localhost:8000")

let params = `code=${code}&state=${state}&client_secret=${client_secret}&client_id=${client_id}&redirect_uri=${redirect_uri}`

let xhr = new XMLHttpRequest;
xhr.open("POST", `https://github.com/login/oauth/access_token?${params}`, true);
xhr.send(null);

xhr.addEventListener("readystatechange", function(event){
    if(this.readystate === 4){
        console.log(event.responseText);
        debugger;
        console.log(event.responseText)
    }
})

