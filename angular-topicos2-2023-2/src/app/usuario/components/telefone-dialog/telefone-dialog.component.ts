import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Telefone } from 'src/app/models/telefone.model';

@Component({
  selector: 'app-telefone-dialog',
  templateUrl: './telefone-dialog.component.html',
  styleUrls: ['./telefone-dialog.component.css']
})
export class TelefoneDialogComponent {

  formGroup: FormGroup;

  constructor (private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute) {

      const telefone: Telefone = this.activatedRoute.snapshot.data['telefone'];
      this.formGroup = formBuilder.group({
        id:[(telefone && telefone.id)? telefone.id : null],
        codigoArea:[(telefone && telefone.codigoArea)? telefone.codigoArea : '', Validators.required],
        numero:[(telefone && telefone.numero)? telefone.numero : '', Validators.required]
      })
  }

  salvar() {

    if (this.formGroup.valid) {

      const novoTelefone = this.formGroup.value;

      return novoTelefone;
    }
  }
}
