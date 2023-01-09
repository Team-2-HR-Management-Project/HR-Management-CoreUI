import RestApis from './RestApiUrls'

const leaveService = {
  leavecreate: RestApis.leaveService + '/create',
  leaveupdate: RestApis.leaveService + '/update',
  findallbymanager: RestApis.leaveService + '/findallbymanager/',
  findallbyemployee: RestApis.leaveService + '/findallbyemployee/',
  findallleaves: RestApis.leaveService + '/findallleaves/',
  findmyleaves: RestApis.leaveService + '/findmyleaves/',
  seedetailleave: RestApis.leaveService + '/seedetailleave',
  seeleavedetails: RestApis.leaveService + '/seeleavedetail',
  rejectleave: RestApis.leaveService + '/rejectleave/',
  approveleave: RestApis.leaveService + '/approveleave/',
}

export default leaveService
