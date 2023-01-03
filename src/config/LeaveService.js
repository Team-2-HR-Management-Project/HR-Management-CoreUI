import RestApis from './RestApiUrls'

const leaveService = {
    leavecreate: RestApis.leaveService + 'leave/create',
    leaveupdate: RestApis.leaveService + 'leave/update',
    findallbymanager : RestApis.leaveService + 'leave/findallbymanager/',
    findallbyemployee: RestApis.leaveService +'leave/findallbyemployee/'
}

export default leaveService