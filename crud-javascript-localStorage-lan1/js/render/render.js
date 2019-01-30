class render {
    static showListOfUsers(item, parentNodes) {
        const URL = {
            protocol: window.location.protocol,
            pathName: window.location.pathname,
            hostName: window.location.hostname
        }
        
        let display = document.createElement('tr');
        display.id = item.id;
        parentNodes.appendChild(display);
        console.log(parentNodes.appendChild(display))
        let content = "";
        content += `<td class="text-center">${item['id']}</td>`;
        content += `<td>${item['name']}</td>`;
        content += `<td>${item['birth']}</td>`;
        // content += `<td>${item['home']}</td>`;
        // content += `<td>${item['email']}</td>`;
        // content += `<td>${item['phone']}</td>`;
        content += `<td><a href="${URL.pathName}edit?id=${item['id']}" class="btn btn-primary mr-5">Edit</a><button id="btnDelete" class="btn btn-danger">Delete</button></td>`;
        display.innerHTML = content;

        const btnDelete = document.getElementById("btnDelete")
        btnDelete.addEventListener('click', e => {
            alert('Chac chu')
        })
        return display;
    }
}
