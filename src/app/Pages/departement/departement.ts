import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DepartementModel } from '../../Models/DepartementModel';
import { DepartementService } from '../../Services/departement-service';

@Component({
  selector: 'app-departement',
  standalone: false,
  templateUrl: './departement.html',
  styleUrl: './departement.scss',
})
export class Departement implements OnInit {
  departements: DepartementModel[] = [];
  isLoading = true; // ← ajoute un état de chargement

  constructor(
  private departementService: DepartementService,
  private cdr: ChangeDetectorRef
) {
  console.log('API URL:', this.departementService['apiUrl']); // ← ajoute ça
}

  ngOnInit(): void {
    this.getAllDepartments();
  }

  
getAllDepartments() {
  this.departementService.getDepartements().subscribe({
    next: (data) => {
      this.departements = [...data];
      this.isLoading = false;
      this.cdr.detectChanges(); // ← nécessaire dans ton cas
    },
    error: (err) => {
      console.error('ERREUR HTTP:', err);
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  });
}  

}