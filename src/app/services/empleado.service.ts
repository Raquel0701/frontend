import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private apiUrl = 'http://localhost:3000/api/empleados';

  constructor(private http: HttpClient) {}

  obtenerEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl);
  }
  agregarEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiUrl, empleado);
  }
  editarEmpleado(id: string, empleado: Empleado): Observable<Empleado> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Empleado>(url, empleado);
  }
  eliminarEmpleado(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
