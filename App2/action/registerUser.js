export function submitData(data) { 
    console.log(data) 
    fetch('http://192.168.8.103:3000/registerUser', {
        method: 'POST',
        body: JSON.stringify({
          user: data
        }),
        headers: {"Content-Type": "application/json"}
      })
      .then(function(response){
      return response.json()
      }).catch(error => console.log(error));
       
}