import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css'],
})
export class AgregarEmpleadoComponent {
  @Output() empleadoAgregado = new EventEmitter<void>();
  nuevoEmpleado: any = {
    nombre: '',
    cargo: '',
    departamento: '',
    sueldo: 0,
  };

  constructor(private empleadoService: EmpleadoService) {} // Inyecta el servicio

  agregarEmpleado() {
    // Llama al servicio para agregar el nuevo empleado al servidor
    this.empleadoService.agregarEmpleado(this.nuevoEmpleado).subscribe(
      (empleado) => {
        console.log('Empleado agregado:', empleado);
        // Puedes realizar otras acciones después de agregar el empleado, como cerrar el modal o mostrar un mensaje de éxito.
        // Por ejemplo, aquí puedes mostrar un SweetAlert2 de éxito.
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El empleado se ha agregado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.empleadoAgregado.emit();
      },
      (error) => {
        console.error('Error al agregar el empleado:', error);
        // Puedes manejar errores aquí, como mostrar un mensaje de error.
        // Por ejemplo, aquí puedes mostrar un SweetAlert2 de error.
        Swal.fire('Error', 'No se pudo agregar el empleado', 'error');
      }
    );
  }
}
