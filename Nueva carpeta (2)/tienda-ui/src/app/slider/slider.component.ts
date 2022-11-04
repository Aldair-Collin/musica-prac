import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from '../producto/producto';
import { ProductoService } from '../producto/producto.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  productos:Producto[];
  constructor(private productoServicio:ProductoService,private _config:NgbCarouselConfig) { 
_config.interval = 3000;
_config.pauseOnHover=true;
_config.showNavigationArrows=false;

  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  private obtenerProductos(){
    this.productoServicio.obtenerListaDeProductos().subscribe(dato => {
      this.productos = dato;
    });
  }

}
