export class SimpleGridTable {
    constructor({ columns, data, containerId }) {
        this.columns = columns;
        this.data = data;
        this.containerId = containerId;
    }

    render() {
        const container = document.getElementById(this.containerId);
        const table = document.createElement("table");
        table.className = "table table-striped table-bordered";

        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");

        this.columns.forEach(col => {
            const th = document.createElement("th");
            th.innerText = col;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement("tbody");

        this.data.forEach(row => {
            const rowElement = document.createElement("tr");
            this.columns.forEach(col => {
                const cell = document.createElement("td");
                cell.innerText = row[col];
                rowElement.appendChild(cell);
            });
            tbody.appendChild(rowElement);
        });

        table.appendChild(tbody);
        container.appendChild(table);
    }
}
