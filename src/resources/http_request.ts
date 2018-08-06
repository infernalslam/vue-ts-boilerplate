import axios from 'axios';

interface IHttpRequest {
  fetch(methodName: string, data: object): Promise<any>;
  post(methodName: string, data: object): Promise<any>;
  put(methodName: string, data: object): Promise<any>;
  put(methodName: string, data: object): Promise<any>;
  delete(methodName: string, id: number): Promise<any>;
  request(type: string, url: string, data: object): Promise<any>;
}

class HttpRequest implements IHttpRequest {
  public axios: any;
  private http: any;
  constructor(url) {
    this.axios = axios;
    this.http = axios.create({
      baseURL: url,
      timeout: 120000,
    });
    this.http.interceptors.request.use((request): Promise<any> => {
      return request;
    }, (error) => {
      return Promise.reject(error);
    });
    this.http.interceptors.response.use((response): Promise<any> => {
      return response;
    }, (error) => {
      return Promise.reject(error);
    });
  }

  public fetch(methodName: string, data: object): Promise<any> {
    return this.http.get(methodName, {
      params: data,
    });
  }

  public post(methodName: string, data: object): Promise<any> {
    return this.http.post(methodName, data);
  }

  public put(methodName: string, data: object): Promise<any> {
    return this.http.put(methodName, data);
  }

  public patch(methodName: string, data: object): Promise<any> {
    return this.http.put(methodName, data);
  }

  public delete(methodName: string, id: number): Promise<any> {
    return this.http.delete(methodName, { params: {id} });
  }

  public request(type: string, url: string, data: object): Promise<any> {
    let promise: any = null;
    switch (type) {
      case 'GET': promise = axios.get(url, { params: data }); break;
      case 'POST': promise = axios.post(url, data); break;
      case 'PUT': promise = axios.put(url, data); break;
      case 'DELETE': promise = axios.delete(url, data); break;
      default : promise = axios.get(url, { params: data }); break;
    }
    return promise;
  }
}

export default HttpRequest;
