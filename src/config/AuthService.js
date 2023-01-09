import RestApis from './RestApiUrls'

const authService = {
  register: RestApis.authService + '/register',
  login: RestApis.authService + '/login',
  registerbymail: RestApis.authService + '/registerbymail',
  activatebypassword: RestApis.authService + '/createpassword',
  forgetpassword: RestApis.authService + '/forgetpasswordmail', //mail yazıyormus javada
}

export default authService
