import getData from "./getData.js";




function formatDate(unixtimestamp) {
  let date = new Date(unixtimestamp * 1000);
  let fullDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}` 
  return fullDate;
}


// Рисуем таблицу
async function createTable() {

  let divForWidget = document.createElement('div');
  let table = document.createElement("table");
  let data = await getData();
  var row = table.insertRow();

  // Заголовки
  for (let i = 0; i < data.columns.length; i++) {
    let header = data.columns[i].label;
    let th = document.createElement("th");
    th.innerHTML = header;
    row.appendChild(th);
  }

  // Данные
  for (let j = 0; j < data.data.length; j++) {
    let tr = table.insertRow();
    data.data[j].map((item) => {
      if (item === data.data[j][3]) {
        tr.insertCell().innerHTML = formatDate(item);
      } else {
        tr.insertCell().innerHTML = item
      }
      
      });

  }

  table.setAttribute('id', 'myTable')
  divForWidget.classList.add('table');
  divForWidget.appendChild(table);
  document.body.appendChild(divForWidget);
}

createTable();

