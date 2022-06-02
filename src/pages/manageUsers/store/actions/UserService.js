import axios from 'axios'
import Constants from '../../../../utils/Constants'

class UserService {
  saveUser(user) {
    return axios.post(Constants.API_BASE_URL + '/addUser', user)
  }
  getUserList() { 
    return axios.get(Constants.API_BASE_URL + '/getUserList')
  }
  updateUser(updatedUser){
    return axios.post(Constants.API_BASE_URL + '/updateUser',updatedUser)
  }

  deleteUser() {
    return axios.get(Constants.API_BASE_URL + '/deleteUser')
  }

  // saveOrUpdateDoctor(doctor) {
  //   return axios.post(Constants.API_BASE_URL, doctor)
  // }





}

export default new UserService()
