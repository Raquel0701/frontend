// components/empleado/empleado.component.ts
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado.model';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  empleados: Empleado[] = [];
  constructor(private empleadoService: EmpleadoService) {}

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
}
