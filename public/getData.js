// Получаем данные из JSON
async function getData() {
  const response = await fetch("data.json");
  return await response.json();
}

export default getData;