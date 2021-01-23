import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';


@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {


  usuario: Usuario;

  constructor(
    private service: UsuarioService,
    private router: Router) { }

  ngOnInit() {
      this.usuario = new Usuario();
  }

  public salvar() {
    this.service.create(this.usuario).subscribe(() => {
      this.router.navigate(['/list']);
    });

  }

  public onCancel() {
    this.router.navigate(['/list']);
  }

}
