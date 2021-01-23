import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuario: Usuario;
  usuarios: Usuario[] = [];

  constructor(
    private service: UsuarioService,
    private router: Router ) {  }


  ngOnInit() {
    this.listar();
  }


  listar(){
   this.service.findAll().subscribe((dados)=>{
    this.usuarios = dados;
   })


  }
   editar(usuario: Usuario){ 
   this.router.navigate([`/usuario/edit/${usuario.id}`]); 
        
  }
  deletar (usuario: Usuario){ 
    // this.router.navigate(['/usuario/delete/${usuario.id}']); 
    this.router.navigate([`/usuario/delete/${usuario.id}`]); 
   }
   
} 

