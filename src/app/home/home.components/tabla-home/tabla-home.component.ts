import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { AffiliatesList } from 'src/app/core/models/affiliatesGetList.model';
import { affiliateGetList } from 'src/app/core/services/affiliateGetList.service';


@Component({
  selector: 'app-tabla-home',
  templateUrl: './tabla-home.component.html',
  styleUrls: ['./tabla-home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class TablaHomeComponent {
  
  @Input() dataSourceTable : Array<AffiliatesList> = [];
  
  
  columnsToDisplay = ['Id Afiliado', 'Nombre', 'Edad', 'Correo'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: AffiliatesList | null | undefined;

}
