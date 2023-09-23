import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: any[] = []; // Inicialización en el constructor

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Llamamos a la función obtenerUsuarios() cuando el componente se inicia.
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    // Realizamos una solicitud HTTP GET para obtener la lista de usuarios desde la API.
    this.http.get<any[]>('http://localhost:3000/api/empleados').subscribe(
      (data: any[]) => {
        this.usuarios = data; // Asignamos los datos obtenidos a la variable 'usuarios'
      },
      (error) => {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    );
  }

  // Puedes agregar más funciones y lógica aquí según tus necesidades.
}
