const authPort = '8090'
const userPort = '8091'
const companyPort = '8093'
const version = '/api/v1'

const RestApis = {
  authService: 'http://10.80.4.19:' + authPort + version,
  userService: 'http://10.80.6.168:' + userPort + version,
  companyService: 'http://10.80.7.101:' + companyPort + version,
  //authService: 'http://localhost:' + authPort + version,
  //userService: 'http://localhost:' + userPort + version,
  //companyService: 'http://localhost:' + companyPort + version,
}

export default RestApis
