import RestApis from './RestApiUrls'

const authService = {
  register: RestApis.authService + '/auth/register',
  login: RestApis.authService + '/auth/login',
  registerbymail: RestApis.authService + '/auth/registerbymail',
  activatebypassword: RestApis.authService + '/auth/createpassword',
  forgetpassword: RestApis.authService + '/auth/forgetpassword',
}

export default authService
