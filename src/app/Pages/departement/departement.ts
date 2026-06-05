import { Component, OnInit } from '@angular/core';
import { DepartementModel } from '../../Models/DepartementModel';
import { DepartementService } from '../../Services/departement-service';

@Component({
  selector: 'app-departement',
  standalone: false,
  templateUrl: './departement.html',
  styleUrl: './departement.scss',
})
export class Departement implements OnInit{
  departements:DepartementModel[]=[];
  
  constructor(private departementService: DepartementService) {
  }


  ngOnInit(): void {

this.getAllDepartments();  
}

getAllDepartments(){
  this.departementService.getDepartements().subscribe((data) => {
    this.departements = data;
    
  });

}

}
