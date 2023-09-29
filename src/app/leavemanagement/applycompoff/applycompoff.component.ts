import { Component, Injectable } from '@angular/core';
import { UserService } from 'src/app/Service/UserService';

@Injectable()
@Component({
  selector: 'app-applycompoff',
  templateUrl: './applycompoff.component.html',
  styleUrls: ['./applycompoff.component.css']
})
export class ApplycompoffComponent {

  constructor(private service:UserService){}

  leaveHistory = [];

  openModal() {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      modalElement.style.display = 'block';
    }
  }

  closeModal() {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      modalElement.style.display = 'none';
    }
  }

  }

