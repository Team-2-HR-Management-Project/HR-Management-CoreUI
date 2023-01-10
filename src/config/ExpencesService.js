import RestApis from './RestApiUrls'

const expencesService = {
  expencescreate: RestApis.expencesService + '/create',
  expencesdetail: RestApis.expencesService + '/seedetail/',
  findmyexpences: RestApis.expencesService + '/findmyexpences/',
}

export default expencesService
