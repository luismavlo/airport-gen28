import User from "./user.model.js";

export class AuthService {

  async createUser(data){
    return await User.create(data);
  }

}