class render {
    static showListOfUsers(item, parentNodes) {
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
        content += `<td><a href="http://localhost:5000/Downloads/assignment-master/crud-javascript-localStorage/edit?id=${item['id']}" class="btn btn-primary mr-5">Edit</a><a href="delete.html" class="btn btn-danger">Delete</a></td>`;
        display.innerHTML = content;
        return display;
    }
}
