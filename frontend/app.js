
//Upon clicking submit button, a request is sent to the backend where the string is cut, and returned as a new string
document.getElementById("submit").addEventListener("click", function(){
    //empty response-phrase tag
    //document.getElementById("response-phrase").innerHTML = ""

    var input = document.getElementById("string-to-cut").value;
    //POST method
    var data = {
        "string_to_cut": input
    }

    fetch('http://localhost:2020/test', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (data){
        return data.json()
    }).then(function (data) {
        document.getElementById("return-string").innerHTML = data.return_string
    } )

    //empty input box
    document.getElementById("string-to-cut").value = ""
})

//allows user to press enter as a way to submit text
document.getElementById("string-to-cut")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
});