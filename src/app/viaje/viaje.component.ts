import { Component } from '@angular/core';
import { ViajeDTO } from '../viaje-dto';
import { ViajeServiceService } from '../viaje.service';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent {

    listaViaticos: ViajeDTO[];

    constructor(private viajeServicio: ViajeServiceService){ }

    ngOnInit(){
      this.obtenerViaticos();
    }

    private obtenerViaticos(){
      this.viajeServicio.obtenerViaticosLista().subscribe(
        (datos => {
          this.listaViaticos = datos;
        })
      )
    }
}
