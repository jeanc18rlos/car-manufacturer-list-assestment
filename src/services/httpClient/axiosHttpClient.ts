import { from, Observable } from 'rxjs';
import axios from 'axios';
import { HttpClient } from './httpClient';

export class AxiosHttpClient implements HttpClient {
  private axiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  get<T = any>(url: string, params?: any): Observable<T> {
    return from(this.axiosInstance.get<T>(url, { params }).then(response => response.data));
  }
}