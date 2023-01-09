import RestApis from './RestApiUrls'

const managerService = {
  findall: RestApis.userService + '/findallmanager',
  findbyid: RestApis.userService + '/finduserbyid{id}',
  managerregister: RestApis.authService + '/registerbymail',
  managerseedetail: RestApis.userService + '/seedetail/',
}

export default managerService
