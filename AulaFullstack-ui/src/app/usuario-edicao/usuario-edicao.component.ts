import { UsuarioService } from './../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-usuario-edicao',
  templateUrl: './usuario-edicao.component.html',
  styleUrls: ['./usuario-edicao.component.css']
})
export class UsuarioEdicaoComponent implements OnInit {


  usuario: Usuario;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: UsuarioService
  ) { }

  ngOnInit() {

    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.findById(id).subscribe((dado) => {
      this.usuario = dado;
    })
  }

 salvar() {
    this.service.update(this.usuario.id, this.usuario).subscribe(() => {
      this.router.navigate(['/list']);
    })
  }

  onCancel() {
    this.router.navigate(['/list']);
  }

}
