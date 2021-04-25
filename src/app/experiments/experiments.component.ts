import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = [ 'Mars soil sample', 'Plant growth in habitat', 'Human bone density' ];

  experimentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(exp: string) {
    this.experiments.push(exp);
  }
  remove(exp: string) {
    let index = this.experiments.indexOf(exp);
    this.experiments.splice(index, 1);
  }
  edit(experiments: string) {
    this.experimentBeingEdited = experiments;
 }
 save(exp: string) {
  this.experiments['name'] = exp;
  this.experimentBeingEdited = null;
  }
}
