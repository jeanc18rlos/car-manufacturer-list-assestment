import { Observable } from "rxjs"

export interface HttpClient {
  get<T = any>(url: string, params?: any): Observable<T>
}
