import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from 'src/environments/environment';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

    //Esta URL obtiene el listado de todos los productos en el backend
  private baseURL = "http://localhost:8080/producto";
  
  api = URL_SERVICIOS;
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

   //este metodo nos sirve para obtener los productos
   obtenerListaDeProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseURL+"/lista"}`);
  }

   //este metodo sirve para obtener o buscar un producto
   obtenerProductoPorId(id:number):Observable<Producto>{
    return this.http.get<Producto>(`${this.baseURL}/${id}`);
  }

  //este metodo sirve para registrar un producto
  registrarProducto(producto: Producto): Observable<any>{
    console.log(producto);

    return this.http.post<Producto>(this.api+"/producto/registrar",producto,{headers: this.httpHeaders})
  }

   //este metodo sirve para actualizar el producto
   actualizarProducto(id:number,producto:Producto) : Observable<Object>{
    return this.http.put(`${this.baseURL+"/actualizar"}/${id}`,producto);
  }

  //este metodo sirve para eliminar el producto
  eliminarProducto(id:number): Observable<Object>{
    return this.http.delete(`${this.baseURL+"/eliminar"}/${id}`);
  }
  
   
  listarProductos(): Observable<any>{
    return this.http.get<any>(this.api+"/producto/lista")
  }


  eliminarProductos(id:number): Observable<Producto>{
    console.log(id);
    return this.http.delete<Producto>(this.api+"/producto/eliminar/"+id,{headers: this.httpHeaders})
  }
}
