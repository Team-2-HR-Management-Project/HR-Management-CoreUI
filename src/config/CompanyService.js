import RestApis from './RestApiUrls'

const companyService = {
  companycreate: RestApis.companyService + '/create',
  companyupdate: RestApis.companyService + '/update',
  findbyid: RestApis.companyService + '/findbyid/{id}',
  findall: RestApis.companyService + '/findall',
  companydetail: RestApis.companyService + '/seedetail/',
  companydeletebyid: RestApis.companyService + '/delete/{id}',
}

export default companyService
