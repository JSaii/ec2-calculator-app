const inputs = document.querySelectorAll(".input")
const result = document.querySelector(".result")

const add_button = document.querySelector(".add");
const subtract_button = document.querySelector(".subtract");
const multiply_button = document.querySelector(".multiply");
const divide_button = document.querySelector(".divide");

async function calculate(num1, num2, op) {
    try{
        const data_struct = {
            num1: num1,
            num2: num2,
            operation: op
        };

        const response = await fetch("http://127.0.0.1:5000/calculate", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data_struct)
        });

        if(!response.ok){
            throw new Error("Something went wrong.")
        }

        const data = await response.json();
        return data;

    }
    catch (error) {
        console.error("Server not reachable:", error);
        alert("Something went wrong or the server is offline or unreachable.");
        return null;
    }
}

function getNums(){
    return [inputs[0].value, inputs[1].value]
}

add_button.addEventListener("click", () => {
    calculate(...getNums(), "add").then(data=>{
        result.textContent = data.result;
    })
})

subtract_button.addEventListener("click", () => {
    calculate(...getNums(), "subtract").then(data=>{
        result.textContent = data.result;
    })
})

multiply_button.addEventListener("click", () => {
    calculate(...getNums(), "multiply").then(data=>{
        result.textContent = data.result;
    })
})

divide_button.addEventListener("click", () => {
    calculate(...getNums(), "divide").then(data=>{
        result.textContent = data.result;
    })
})


