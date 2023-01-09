import RestApis from './RestApiUrls'

const userService = {
  findbytoken: RestApis.userService + '/findbytoken',
  findbytoken2: RestApis.userService + '/findbytokenn/',
  findall: RestApis.userService + '/findall',
  findbyid: RestApis.userService + '/finduserbyid/',
  usercreate: RestApis.userService + '/create',
  userupdate: RestApis.userService + '/update',
  userdeletebyid: RestApis.userService + '/delete/{authid}',
  userseedetail: RestApis.userService + '/seedetail/',
  findallmanager: RestApis.userService + '/findallmanager',
  findallemployee: RestApis.userService + '/findallemployee/',
  findallmanagerbycompanyid: RestApis.userService + '/findallmanagerbycompanyid/',
  userupdateall: RestApis.userService + '/updateall/',
  findallcolleague: RestApis.userService + '/findallcolleague/',
}

export default userService
