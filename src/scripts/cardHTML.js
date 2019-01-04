
let cardHTML = {
    buildHTML(value) {
        let outputArticle = document.querySelector(".output");
        let employeeCard =document.createElement("article");
        employeeCard.classList.add("employee");
        outputArticle.appendChild(employeeCard);
        let employeeHeader =document.createElement("header");
        employeeHeader.classList.add("employee__name")
        employeeHeader.innerHTML = `<h1>${value.name}</h1>`
        employeeCard.appendChild(employeeHeader);
        let employeeSection=document.createElement("section");
        employeeSection.classList.add("employee__department");
        employeeSection.innerHTML= `Works in the ${value.department.name}`
        employeeCard.appendChild(employeeSection);
        let employeeComputerSection = document.createElement("section");
        employeeComputerSection.classList.add("employee__computer");
        employeeComputerSection.innerHTML = `Currently using a ${value.computer.name}`
        employeeCard.appendChild(employeeComputerSection);
    }
}

export default cardHTML

