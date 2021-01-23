import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit {
  
   usuario: Usuario;

  constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: UsuarioService
  ) { }

  ngOnInit() {

    this.usuario = new Usuario;
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.findById(id).subscribe((dado) => {
      this.usuario = dado;

      console.log(this.usuario);
    })
 }
  onCancel(){
    this.router.navigate(['/list']);
}
  deletar() {
      this.service.delete(this.usuario.id).subscribe(() => {
        this.router.navigate(['/list']);
      })
  }

  }