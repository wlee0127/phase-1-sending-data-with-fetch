// Add your code here
function submitData(name, email){
    return  fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                name: name,
                email: email,
                }),
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (object) {
                console.log(object);
                let div = document.createElement("div");
                let p = document.createElement("p");
                p.textContent = object.id;
                document.body.appendChild(div);
                div.appendChild(p);
            })
            .catch(function (error) {
                alert("Bad things! Ragnarők!");
                console.log(error);
                let div = document.createElement("div");
                let p = document.createElement("p");
                let errorMessage = error;
                p.textContent = errorMessage.toString();
                document.body.appendChild(div);
                div.appendChild(p);
            });

   
}
submitData("test", "test")