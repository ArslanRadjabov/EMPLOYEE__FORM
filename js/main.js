let bodytable = document.querySelector('.body__result')


function show() {
    let content = ``
    object.forEach(el => {
        content += `
        <tr>
        <th scope="row">${el.username}</th>
        <td>${el.userEmail}</td>
        <td>${el.userMobile}</td>
        <td>${el.department}</td>
        <td>
        <button class=" btn btn-edit btn-primary"><i class='bx bx-edit-alt'></i></button>
        <button class="${el.id} btn btnyopil btn-danger" onclick="remove(event)"><i class='bx bx-x'></i></button></td>
        </tr>`
    });

    bodytable.innerHTML = content;
}

show()