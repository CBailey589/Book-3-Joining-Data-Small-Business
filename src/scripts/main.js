import getEmployeeData from "./getEmployeeData"
import turnDataToHTMLString from "./turnDataToHTMLString"
import putHTMLOnDOM from "./putHTMLOnDOM"

getEmployeeData()
    .then((employees)=>turnDataToHTMLString(employees))
    .then((HTMLString) => putHTMLOnDOM(HTMLString))