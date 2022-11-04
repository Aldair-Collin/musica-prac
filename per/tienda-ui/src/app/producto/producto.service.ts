import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from 'src/environments/environment';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  api = URL_SERVICIOS

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  listarProductos():Observable<any>{
    return this.http.get<any>(this.api+"/producto")
  }

  registrarProducto(producto: Producto): Observable<any>{
    console.log(producto);
    return this.http.post<Producto>(this.api+"/producto/registrar", producto,{headers:this.httpHeaders})
  }
  getProductoId(idproducto:number): Observable<any>{
    console.log(idproducto);
    return this.http.get<Producto>(this.api+"/producto"+idproducto);
  }

   updateProducto(producto:Producto): Observable<any>{
    console.log(producto);
    return this.http.put<Producto>(this.api+"/producto/actualizar"+producto.idproducto,producto);
  }
}
