import { Component, OnInit } from '@angular/core';
import { Cliente} from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  /* Se inicializa la lista de clientes */
  listaClientes: Cliente[];

  /* Se recibe el objeto de la clase de servicio con acceso private*/ 
  constructor(private clienteService:ClienteService) {
  }

  ngOnInit(): void {
    /* Se define la lista de clientes mediante el objeto de la clase de servicio */

    /* El método suscribe recibe como parametro una función anonima */
    this.clienteService.getClientes().subscribe(
      (response) => this.listaClientes = response
    );
  }

  delete(cliente: Cliente): void{
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-1',
        cancelButton: 'btn btn-danger m-1'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estás seguro?',
      text: `Seguro que desea eliminar al cliente ${cliente.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, deseo eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        /* Elimar cliente */
        this.clienteService.deleteCliente(cliente.id).subscribe(
          (response) => {
            this.listaClientes = this.listaClientes.filter(client => client!==cliente);
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              `El cliente ${cliente.nombre} ha sido eliminado con éxito`,
              'success'
            )
          }
        );
      }
    })
  }

}
