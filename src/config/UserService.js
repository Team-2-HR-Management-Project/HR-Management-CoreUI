import RestApis from './RestApiUrls'

const userService = {
  findbytoken: RestApis.userService + '/user/findbytoken',
  findall: RestApis.userService + '/user/findall',
  findbyid: RestApis.userService + '/user/finduserbyid{id}',
  usercreate: RestApis.userService + '/user/create',
  userupdate: RestApis.userService + '/user/update',
  userdeletebyid: RestApis.userService + '/user//delete/{authid}',
  userseedetail: RestApis.userService + '/user/seedetail/',
}

export default userService
