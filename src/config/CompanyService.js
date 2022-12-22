import RestApis from './RestApiUrls'

const companyService = {

    companycreate: RestApis.companyService + '/company/create',
    companyupdate: RestApis.companyService + '/company/update',
    findbyid: RestApis.companyService + '/company/findbyid/{id}',
    findall: RestApis.companyService + '/company/findall',
    companydetail: RestApis.companyService + '/company/seedetail/',
    companydeletebyid: RestApis.companyService + '/company/delete/{id}',    
}

export default companyService