import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = [ 'Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks' ];

  equipmentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }
  add(equipmentName: string) {
    this.equipment.push(equipmentName);
  }
  remove(name: string) {
    let index = this.equipment.indexOf(name);
    this.equipment.splice(index, 1);
  }
  edit(equipment: string) {
    this.equipmentBeingEdited = equipment;
 }
 save(name: string) {
  let index = this.equipment.indexOf(name);
  this.equipment.splice(index, 0, name);
  this.equipmentBeingEdited = null;
}

}
