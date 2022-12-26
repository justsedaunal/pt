import { BaseApiService } from "../base-api.service";

export class AuthService extends BaseApiService {
  constructor() {
    super()
  }
  async register(value: any) {
    return (await this.baseAxios.post("user/register", value)).data;
  }
  async login(value: any) {
    return (await this.baseAxios.post("user/login", value)).data;
  }

}

