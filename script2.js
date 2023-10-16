// Первый вариант

// const wrapper = document.querySelector('.wrapper');
// const arr = [];
// for (let i = 1; i <= 100; i++) {
//     arr.push(i);
// }
// arr.forEach((item) => {
//     const li = document.createElement('li');
//     li.textContent = item;
//     wrapper.append(li);
// })

//Второй вариант

const tbody = document.querySelector('table tbody');
for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');
    for (let j = 1; j <= 10; j++) {
        const cell = document.createElement('td');
        const cellValue = (i - 1) * 10 + j;
        cell.textContent = cellValue;
        row.appendChild(cell);
    }
    tbody.appendChild(row);
}