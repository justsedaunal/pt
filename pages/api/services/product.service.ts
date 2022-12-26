import { BaseApiService } from "../base-api.service";
export class ProductService extends BaseApiService {
  constructor() {
    super();
  }
  async getAll(token: string) {
    var ss = sessionStorage.getItem("token");
    console.error(ss);
    return await this.baseAxios.get("product/all", {
      headers: {
        accept: "application/json",
        "access-token": token,
      },
    });
  }
  async getById(id: number, token: string) {
    return await this.baseAxios.get(`product/get/${id}`, {
      headers: {
        accept: "application/json",
        "access-token": token,
      },
    });
  }

  async like(id: number, token: string) {
    return await this.baseAxios.post(
      "product/like",
      {
        productId: id,
      },
      {
        headers: {
          accept: "application/json",
          "access-token": token,
          "Content-Type": "application/json"
          
        },
      }
    );
  }

  async unLike(id: number, token: string) {
    return await this.baseAxios.post(
      "product/unlike",
      {
        productId: id,
      },
      {
        headers: {
          accept: "application/json",
          "access-token": token,
          "Content-Type": "application/json"
          
        },
      }
    );
  }


}
