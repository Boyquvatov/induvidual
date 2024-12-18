document.getElementById("research-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const teacher = document.getElementById("teacher").value;
    const researchTitle = document.getElementById("research-title").value;
    const publicationDate = document.getElementById("publication-date").value;

    const table = document.getElementById("teachers-list").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${teacher}</td>
        <td>${researchTitle}</td>
        <td>${publicationDate}</td>
        <td>0</td>
    `;
});
