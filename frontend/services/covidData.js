export async function getCovidStatesData() {
    return new Promise((resolve, reject) => {
        fetch('/api/rtcovid/states')
        .then(response => response.json())
        .then(data => {
            resolve(data)
        })
        .catch(err=>{reject(err)})
    })
}

export async function getCovidCountryData() {
    return new Promise((resolve, reject) => {
        fetch('/api/rtcovid/country')
        .then(response => response.json())
        .then(data => {
            resolve(data)
        })
        .catch(err=>{reject(err)})
    })
}

export async function getCovidUpdationDate() {
    return new Promise((resolve, reject) => {
        fetch('/api/rtcovid/updationDate')
        .then(response => response.json())
        .then(data => {
            resolve(data)
        })
        .catch(err=>{reject(err)})
    })
}