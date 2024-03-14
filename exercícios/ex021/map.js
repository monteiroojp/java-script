const dates = ["2024-1-10", "2025-2-20", "2026-3-30"]


const formateDates = (element) =>{
    let date = element.split("-")
    return `${date[2]}/${date[1]}/${date[0]}`
}


const formuledDates = dates.map(formateDates)
console.log(formuledDates)


