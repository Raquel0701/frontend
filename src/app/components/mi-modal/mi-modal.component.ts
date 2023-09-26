// mi-modal.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpleadoService } from 'src/app/services/empleado.service';
@Component({
  selector: 'app-mi-modal',
  templateUrl: './mi-modal.component.html',
  styleUrls: ['./mi-modal.component.css'],
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
          console.log('Cambios guardados:', empleadoEditado);
          // Cierra el modal después de guardar cambios
          this.dialogRef.close(empleadoEditado);
          // this.dialogRef.close(this.data.empleado);
        },
        (error) => {
          console.error('Error al editar empleado:', error);
          // Maneja el error aquí si es necesario
        }
      );

    console.log('Cambios guardados:', this.data.empleado);
  }

  cerrarModal() {
    this.dialogRef.close();
  }
}
