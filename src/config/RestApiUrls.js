const authPort = '8090'
const userPort = '8091'
const companyPort = '8093'
const leavePort = '8094'
const version = '/api/v1'

const RestApis = {
  authService: 'http://localhost:' + authPort + version,
  userService: 'http://localhost:' + userPort + version,
  companyService: 'http://localhost:' + companyPort + version,
  leaveService: 'http://localhost:' + leavePort + version,

}

export default RestApis
