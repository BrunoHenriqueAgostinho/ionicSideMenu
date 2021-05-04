import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  nome: String;
  idade: Number;
  sexo: String;
  s: String;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      let state = this.router.getCurrentNavigation().extras.state;
      if (state) {
        this.nome = state.nome;
        this.idade = state.idade;
        this.s = state.sexo;
        if(this.s == "m"){
          this.sexo = "Masculino";
        } else {
          this.sexo = "Feminino";
        }
      }
    });
   }

  ngOnInit() {
  }

}
