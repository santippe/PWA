function callServer(method, url, someToSend, success, fail, timeout) {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.timeout = 30000
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                success()
            } else {
                fail()
            }
        }
    }
    xhr.ontimeout = timeout
    xhr.send(someToSend)
}

async function callServerFecth(url, options) {
    let response = await fetch(url, options)
    let result = await response.json()
    return result;
}

function addElements(container, list, callBackItems) {
    let data = [
        { name: 'John', age: 25 },
        { name: 'Emily', age: 30 },
        { name: 'Adam', age: 28 },
    ];

    // Get reference to the parent div element
    let parentDiv = container; //document.getElementById('parent');

    // Loop through the data array to create child div elements
    data.forEach(item => {
        let childItem = callBackItems(item)
        // Append the child div element to the parent div element
        parentDiv.appendChild(childItem);
    });
}

function createAnchorsWithData(classNames) {
    return (item) => {
        // Create a new div element for each item in the data array
        let childDiv = document.createElement('div');

        // Add a custom class to the child div element based on the item's name property
        classNames.forEach(className => {
            childDiv.classList.add(className);
        })

        // Add the item's data as text content to the child div element
        //childDiv.textContent = `${item.name} - ${item.age}`;
        childDiv.textContent = `${item.name}`;

        return childDiv
    }
}