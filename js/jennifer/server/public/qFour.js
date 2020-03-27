// 1 and 2

async function getUsers() {
    const res = await fetch('/messages')
    const data = await res.json()

    data.map((user) => {
        let output =
            `<ul>
            <li>Author: ${user.author}</li>
            <li>Message: ${user.message} - there are ${user.message.length} charactors in this message</li>
            <li>Date: ${user.date}</li>
            </ul>`
        document.getElementById('output').innerHTML += output
        console.log(user.message)
    })
}
getUsers()



// 3 and 4

let addAuthor= document.getElementById('addAuthor')
addAuthor.addEventListener('submit', addPostFunction)

function addPostFunction(e) {
    e.preventDefault();
    let author = document.getElementById('author').value
    let message = document.getElementById('message').value
    let date = new Date()
    fetch('/message', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ author, message,date})
    })
        .then(res =>{res.json()})

        .then(data => {
            console.log(data)
         //don't know why this doesn't work!!!

            // document.getElementById('output').innerHTML = `
            // <ul class='ul-post'>
            // <li class='li-post'>Author: ${data.author}</li>
            // <li class='li-post'>Message: ${data.message}</li>
            // <li class='li-post'>Date: ${data.date}</li>
            // </ul>`

        })
        .catch((err) => console.error(err))

}
