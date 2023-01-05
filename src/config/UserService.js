import RestApis from './RestApiUrls'

const userService = {
  findbytoken: RestApis.userService + '/user/findbytoken',
  findbytoken2: RestApis.userService + '/user/findbytokenn/',
  findall: RestApis.userService + '/user/findall',
  findbyid: RestApis.userService + '/user/finduserbyid/',
  usercreate: RestApis.userService + '/user/create',
  userupdate: RestApis.userService + '/user/update',
  userdeletebyid: RestApis.userService + '/user//delete/{authid}',
  userseedetail: RestApis.userService + '/user/seedetail/',
  findallmanager: RestApis.userService + '/user/findallmanager',
  findallemployee: RestApis.userService + '/user/findallemployee/',
  findallmanagerbycompanyid: RestApis.userService + '/user/findallmanagerbycompanyid/',
  userupdateall: RestApis.userService + '/user/updateall/',
  findallcolleague: RestApis.userService + '/user/findallcolleague/',
}

export default userService
