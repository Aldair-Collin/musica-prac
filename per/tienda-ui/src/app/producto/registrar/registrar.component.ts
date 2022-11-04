import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import Swal from 'sweetalert2';
import { ProductoService } from '../producto.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html'
})
export class RegistrarComponent implements OnInit {
  titulo:String = "Registrar producto";
  producto: Producto = new Producto();

  constructor(private productoService: ProductoService,
    private router: Router,
    private activeRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  public registrarProducto(): void{
    this.productoService.registrarProducto(this.producto).subscribe(
      // response => this.router.navigate(['/productos'])
      producto => {
        this.router.navigate(['/productos'])
        Swal.fire('registro satisfactoriamente')
      }
    )
  }

}
