import RestApis from './RestApiUrls'

const expensesService = {
  expensescreate: RestApis.expensesService + '/create',
  expensesdetail: RestApis.expensesService + '/seedetail/',
  findmyexpenses: RestApis.expensesService + '/findmyexpenses/',
}

export default expensesService
