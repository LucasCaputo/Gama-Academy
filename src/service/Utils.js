const Utils = {
    parseRequestURL: () => {
        let url = location.hash.slice(1).toLocaleLowerCase() || '/'
        let r = url.split('/')
        let request = {
            resource: null,
            id: null,
            verb: null
        }

        request.resource = r[1]
        request.id = r[2]
        request.verb = r[3]

        return request
    },
    sleep: (ms) => {
        return new Promise( resolve => setTimeout(resolve, ms))
    }
}

function convertData(data) {
    return moment(data).format('DD/MM/YYYY')
  }

export default Utils