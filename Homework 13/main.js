const nameInp = document.getElementById('name-input');
const priceInp = document.getElementById('price-input');
const sizeInp = document.getElementById('size-input');
const submitBtn = document.getElementById('addProduct');
const clearBtn = document.getElementById('clear');

let products = [];

submitBtn.onclick = () => {

    if (nameInp.value != "" && priceInp.value != "") {
        let newProduct = {
        id: products.length + 1,
        name: nameInp.value,
        price: priceInp.value,
        size: sizeInp.value
    }

    products.push(newProduct);
    addProduct(newProduct);
    }
};

const tableBody = document.getElementById('table-body');

function addProduct(product) {
    tableBody.innerHTML += `
        <tr class="table-light align-middle">
            <th scope="row">${product.id}</th>
            <td>${product.name}</td>
            <td>${product.price}$</td>
            <td>${product.size}</td>
            <td>
                <button id="deleteBtn" type="button" class="btn btn-outline-danger">Delete</button>
            </td>
        </tr>`;
};

clearBtn.onclick = () => {
    tableBody.innerHTML = "";
     };

     document.querySelector('#table1').oninput = function () {
        let val = this.value.trim().toLowerCase();
        let tableItem = document.querySelectorAll('table tr');
        if (val != '') {
            tableItem.forEach(function(elem) {
                if (elem.innerText.toLowerCase().search(val) == -1) {
                    elem.classList.add('hide');
                }
                else {
                    elem.classList.remove('hide');
                }
            } );
        }
        else tableItem.forEach(function(elem) {
            elem.classList.remove('hide');
        });
     }
