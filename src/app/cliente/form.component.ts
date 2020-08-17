import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public titulo: string = 'Crear Cliente';
  public cliente: Cliente = new Cliente();

  constructor(
    private clienteService: ClienteService, 
    private router: Router,
    private activatedRouter: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  public create(): void{
    this.clienteService.createCliente(this.cliente).subscribe(
      (response) => { 
        this.router.navigate(['/clientes']);
        swal.fire(
          'Nuevo cliente', 
          `Cliente ${response.nombre} creado con éxito`,
          'success'
        );
      }
    )
  }

  public cargarCliente():void{
    this.activatedRouter.params.subscribe(
      (params) => {
        let id = params['id'];
        if(id){
          this.clienteService.getCliente(id).subscribe(
            (cliente) => this.cliente = cliente
          )
        }
      }
    )
  }

  public update(): void{
    this.clienteService.updateCliente(this.cliente).subscribe(
      (response) => {
        this.router.navigate(['/clientes']);
        swal.fire('Cliente actualizado', `Cliente ${this.cliente.nombre} actualizado con éxito`, 'success');
      }
    );
  }
  
}
