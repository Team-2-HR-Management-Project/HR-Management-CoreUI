const authPort = '8090'
const userPort = '8091'
const companyPort = '8093'
const version = '/api/v1'

const RestApis = {
  authService: 'http://10.80.2.247:' + authPort + version,
  userService: 'http://10.80.5.244:' + userPort + version,
  companyService: 'http://10.80.13.28:' + companyPort + version,
}

export default RestApis
