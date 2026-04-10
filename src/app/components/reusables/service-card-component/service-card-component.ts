import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-service-card-component',
  imports: [RouterLink],
  templateUrl: './service-card-component.html',
  styleUrl: './service-card-component.css',
})
export class ServiceCardComponent implements OnInit {
  protected tags: any[] | undefined;


  ngOnInit(){
this.tags= [
      {label: 'وسم', color: '#ECFDF3'},
      {label: 'وسم', color: '#EFF8FF'},
  {label: 'وسم', color: '#F9FAFB'}
  ];
}
}
