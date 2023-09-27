import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado.model';
import { EmpleadoService } from '../../services/empleado.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { MiModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  empleados: Empleado[] = [];
  modalAbierto = false;
  constructor(
    private empleadoService: EmpleadoService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    this.empleadoService.obtenerEmpleados().subscribe(
      (data) => {
        this.empleados = data;
      },
      (error) => {
        console.error('Error al obtener la lista de empleados:', error);
      }
    );
  }
  onEmpleadoAgregado() {
    this.obtenerEmpleados();
  }
  abrirModal(empleado: Empleado) {
    const dialogRef = this.dialog.open(MiModalComponent, {
      data: { empleado: empleado },
    });
    console.log('datos eme', empleado);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`El resultado del modal es:`, result);
      if (result) {
        this.obtenerEmpleados();
      }
    });
  }
  eliminarEmpleado(id: string) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará al empleado.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoService.eliminarEmpleado(id).subscribe(
          () => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'El empleado ha sido eliminado correctamente.',
              showConfirmButton: false,
              timer: 1500,
            });
            this.obtenerEmpleados();
          },
          (error) => {
            console.error('Error al eliminar el empleado:', error);
            Swal.fire('Error', 'No se pudo eliminar al empleado.', 'error');
          }
        );
      }
    });
  }
}
