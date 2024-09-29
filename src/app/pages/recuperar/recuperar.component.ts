import { Component, inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.scss'],
})
export class RecuperarComponent  implements OnInit {

  isVisible = false
  isModalOpen = false;

  private router= inject(Router);

  constructor() { }

  ngOnInit() {
    this.isModalOpen = false;
  }

  validarCampo(inputElement: HTMLInputElement){
    let inputValue = inputElement.value;
    if(inputValue === ''){
      this.isVisible = true
    }else{
      this.openModal();
      this.isVisible = false;
      inputElement.value = '';
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  handleModalDismiss() {
    this.router.navigate(['/login']);
  }

}
