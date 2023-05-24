import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewChecked, ChangeDetectorRef, Component, Input } from '@angular/core';
import { AffiliatesList , Affiliates} from 'src/app/core/models/affiliatesGetList.model';
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
export class TablaHomeComponent implements AfterViewChecked {
  
  @Input() dataSourceTable : Array<AffiliatesList> = [];
  
  columnsToDisplay = ['Id Afiliado', 'Nombre', 'Edad', 'Correo', " + "];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: AffiliatesList | null | undefined;
  afiliadosMostrados : Array<number> = [0];
  wasntShown : boolean = true;

  constructor(private cdRef : ChangeDetectorRef){}
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  toggleAffiliate(affiliate: Affiliates){
    affiliate.citas = affiliate.citas ? null : this.getCitasPorAfiliado(affiliate.id);
  }

  getCitasPorAfiliado(afiliadoId: number): any[]{
   return this.dataSourceTable.filter(cita => cita.affiliates.id === afiliadoId); 
  }
}
