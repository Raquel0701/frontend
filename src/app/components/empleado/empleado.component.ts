import { Component, OnInit} from '@angular/core';
import { Empleado } from '../../models/empleado.model';
import { EmpleadoService } from '../../services/empleado.service'
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { MiModalComponent } from '../mi-modal/mi-modal.component';

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
}
