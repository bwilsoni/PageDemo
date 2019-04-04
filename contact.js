console.log("loaded contact.js")

function display() {
    console.log("hello world")


    let elements = document.getElementById("wow").elements;

    let data = {}

    for (let field of elements) {
        if (field.name) {
            data[field.name] = field.value
        }
    }

    console.log(data)


    alert(JSON.stringify(data))

    // console.log(data.elements)
}