import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpleadoService } from '../../services/empleado.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class MiModalComponent {
  constructor(
    private empleadoService: EmpleadoService,
    public dialogRef: MatDialogRef<MiModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { empleado: any }
  ) {}

  guardarCambios() {
    this.empleadoService
      .editarEmpleado(this.data.empleado._id, this.data.empleado)
      .subscribe(
        (empleadoEditado) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Actualizado correctamente',
            showConfirmButton: false,
            timer: 1500,
          });
          this.dialogRef.close(empleadoEditado);
        },
        (error) => {
          console.error('Error al editar empleado:', error);
        }
      );

    console.log('Cambios guardados:', this.data.empleado);
  }

  cerrarModal() {
    this.dialogRef.close();
  }
}
