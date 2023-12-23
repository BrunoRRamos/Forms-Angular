import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ConsultaCepService {
  url_API = "http://viacep.com.br/ws/";

  constructor(private http: HttpClient) {}

  getConsultaCep(cep: string) {
    return this.http.get(`${this.url_API}/${cep}/json`);
  }
}
