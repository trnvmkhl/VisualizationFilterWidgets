import getData from "./getData.js";

// Рисуем фильтры
async function tableFilter() {
  let data = await getData();
  let divForWidget = document.createElement('div');
  for (let i = 0; i < data.columns.length; i++) {
    let filterInput = document.createElement("input");
    filterInput.setAttribute("id", data.columns[i].code);
    filterInput.setAttribute("type", data.columns[i].type);

    filterInput.setAttribute(
      "placeholder",
      `Поиск по ${data.columns[i].label}`
    );
    divForWidget.classList.add('visualize');
    divForWidget.appendChild(filterInput);
    document.body.appendChild(divForWidget);
  }

  let inputs = document.querySelectorAll("input");

  for (let j = 0; j < inputs.length; j++) {
    document
      .getElementById(inputs[j].id)
      .addEventListener("keyup", function () {
        let input = document.getElementById(inputs[j].id);
        let filter = input.value.toUpperCase();
        document.querySelectorAll("table").forEach((item) => {
          const tr = item.getElementsByTagName("tr");
          for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[j];
            if (td) {
              let txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
          }
          });
      });
  }
}

tableFilter();
