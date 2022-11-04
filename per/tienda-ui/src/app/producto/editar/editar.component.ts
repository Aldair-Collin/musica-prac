import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  producto :Producto=new Producto();
  constructor(private router:Router,private service:ProductoService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let idproducto=localStorage.getItem("idproducto");
    this.service.getProductoId(+idproducto)
    .subscribe(data=>{
      this.producto=data;
    })

  }
  Actualizar(producto:Producto){
    this.service.updateProducto(producto)
    .subscribe(data=>{
      this.producto=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
