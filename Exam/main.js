const nameInp = document.getElementById('name-input');
const dateInp = document.getElementById('date-input');
const priorInp = document.getElementById('prior-input');
const tagInp = document.getElementById('tag-input');
const discrInp = document.getElementById('discr-input');
const submitBtn = document.getElementById('addTask');
const clearBtn = document.getElementById('clearBtn1');
const sortBtn = document.getElementById('sortBtn');

let tasks = [];

submitBtn.onclick = () => {

    if (nameInp.value != "" && dateInp.value != "" && priorInp.value != "" && tagInp.value != "" && discrInp.value != "") {
        let newTask = {
        id: tasks.length + 1,
        name: nameInp.value,
        date: dateInp.value,
        prior: priorInp.value,
        tag: tagInp.value,
        discr: discrInp.value
    }

    tasks.push(newTask);
    addTask(tasks);
    }
};

const tableBody = document.getElementById('table-body');

function dod() {
if (tasks == "") tableBody.innerHTML = `<tr><td colspan="8" class="dod" style = "background-color: #ffffff8e;">Додайте справу щоб побачити її тут!</td></tr>`
};
dod();

function addTask(tasks) {
    tableBody.innerHTML = "";
    for (let i = 0; i < tasks.length; i++)
    {
        let task = tasks[i] ;
        tableBody.innerHTML += `
        <tr>
            <th scope="row"><div class="checkbox">
            <input type="checkbox" id="check7" class="check" />
            <label for="check7" class="label">
              <svg width="50" height="50" viewbox="0 0 100 100">
                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none" />
                <g transform="translate(0,-952.36218)">
                  <path d="m 13,983 c 33,6 40,26 55,48 " stroke="black" stroke-width="3" class="path1" fill="none" />
                  <path d="M 75,970 C 51,981 34,1014 25,1031 " stroke="black" stroke-width="3" class="path1" fill="none" />
                </g>
              </svg>
            </label>
          </div>
        </div></th>
            <td>${task.name}</td>
            <td>${task.date}</td>
            <td>${task.prior}</td>
            <td>${task.tag}</td>
            <td>${task.discr}</td>
            <td>
                <button onClick="del(${i})" id="clearBtn" type="button">Видалити</button>
            </td>
            <td>
                <button onClick="edit(${i})" id="editBtn" type="button">Редагувати</button>
            </td>
        </tr>`;
    }
    
};

function del(i) {
tasks.splice(i, 1);
addTask(tasks);
dod();
};

function ok(i, newname,newdate,newprior,newtag,newdiscr) {
    tasks[i].name = newname;
    tasks[i].date = newdate;
    tasks[i].prior = newprior;
    tasks[i].tag = newtag;
    tasks[i].discr = newdiscr;
    addTask(tasks);
};

function edit(i) {
tasks[i].name = `<input type="text" id="newname-input" value="${tasks[i].name}" placeholder = "Введіть нову назву">`;
tasks[i].date = `<input type="date" id="newdate-input" value="${tasks[i].date}" placeholder = "Введіть новий термін">`;
tasks[i].prior = `<input type="number" id="newprior-input" value="${tasks[i].prior}" placeholder = "Оновіть пріоритет">`;
tasks[i].tag = `<input type="text" id="newtag-input" value="${tasks[i].tag}" placeholder = "Введіть нові теги">`;
tasks[i].discr = `<textarea rows="3" id="newdiscr-input" value="${tasks[i].discr}" placeholder="Змініть опис"></textarea>`;
addTask(tasks);
tasks[i].discr +=`<button onClick="ok(${i}, ${document.getElementById('newtag-input').value},
 ${document.getElementById('newprior-input').value}, ${document.getElementById('newdate-input').value}, 
 ${document.getElementById('newname-input').value}, ${document.getElementById('newdiscr-input').value})" 
 id="ok" type="button">OK</button>`;
addTask(tasks);
};

function sortName(a,b){
    if(a.name>b.name)return 1;
    if(a.name<b.name)return -1;
    return 0;
  }
sortBtn.onclick = () => {
    tasks.sort(sortName);
    addTask(tasks);
    dod();
 };

clearBtn.onclick = () => {
    tasks = [];
    addTask(tasks);
    dod();
     };

     document.querySelector('#table1').oninput = function () {
        let val = this.value.trim().toLowerCase();
        let tableItem = document.querySelectorAll("table tr");
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
     };
