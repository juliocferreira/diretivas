import { Usuario } from './../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Endereco } from '../models/endereco';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  usuario: Usuario = {
    endereco: {
    } as Endereco
  } as Usuario;

  usuarios: Usuario[] = [];

  constructor() { }

  ngOnInit() { }

  salvarUsuario(usuario: Usuario) {
    let usuarioExistente = this.usuarios.find(u => u.nome == usuario.nome);

    if (usuarioExistente) {
      alert("Usuário já cadastrado");
      return;
    }

    this.usuarios.push(usuario);
  }



}
