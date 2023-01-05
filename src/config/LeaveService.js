import RestApis from './RestApiUrls'

const leaveService = {
  leavecreate: RestApis.leaveService + '/leave/create',
  leaveupdate: RestApis.leaveService + '/leave/update',
  findallbymanager: RestApis.leaveService + '/leave/findallbymanager/',
  findallbyemployee: RestApis.leaveService + '/leave/findallbyemployee/',
  findallleaves: RestApis.leaveService + '/leave/findallleaves/',
  findmyleaves: RestApis.leaveService + '/leave/findmyleaves/',
  seedetailleave: RestApis.leaveService + '/leave/seedetailleave',
  seeleavedetails: RestApis.leaveService + '/seeleavedetail',
}

export default leaveService
