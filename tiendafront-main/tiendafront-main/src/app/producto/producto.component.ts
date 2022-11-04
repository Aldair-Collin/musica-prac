import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos:Producto[];

  constructor(private productoServicio:ProductoService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }
  

  
  actualizarProducto(id:number){
    this.router.navigate(['productos/actualizar',id]);
  }
  private obtenerProductos(){
    this.productoServicio.obtenerListaDeProductos().subscribe(dato => {
      this.productos = dato;
    });
  }

eliminarProducto(id:number){
  this.productoServicio.eliminarProducto(id).subscribe(dato=>{
    console.log(dato);
    this.obtenerProductos();
  })
}
  
  verDetallesDelProducto(id:number){
    this.router.navigate(['productos/detalles',id]);
  }




}

