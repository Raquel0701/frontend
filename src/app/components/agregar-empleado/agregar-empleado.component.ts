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

  constructor(private empleadoService: EmpleadoService) {}

  agregarEmpleado() {
    this.empleadoService.agregarEmpleado(this.nuevoEmpleado).subscribe(
      (empleado) => {
        console.log('Empleado agregado:', empleado);
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
        Swal.fire('Error', 'No se pudo agregar el empleado', 'error');
      }
    );
  }
}
