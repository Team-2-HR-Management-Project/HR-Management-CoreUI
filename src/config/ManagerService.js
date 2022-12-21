import RestApis from './RestApiUrls'

const managerService = {
  findall: RestApis.userService + '/user/findallmanager',
  findbyid: RestApis.userService + '/user/finduserbyid{id}',
  managerregister: RestApis.authService + '/auth//registerbymail',
  managerseedetail: RestApis.userService + '/user/seedetail/',
}

export default managerService
