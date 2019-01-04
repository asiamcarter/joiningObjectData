import cardHTML from "./cardHTML"
import data from "./data"

let DOMappend = {
    appendToDOM () {
        data.fetchData()
        .then(parsedData => parsedData.forEach (item => {
            let test = cardHTML.buildHTML(item)
        }))
    }
}


export default DOMappend