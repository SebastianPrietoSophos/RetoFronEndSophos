import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewChecked, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Appointments , Affiliates, AffiliatesOrganized} from 'src/app/core/models/affiliatesGetList.model';
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
export class TablaHomeComponent implements OnChanges{

  @Input() dataSourceTable : Array<Appointments> = [];
  
  columnsToDisplay = ['Id Afiliado', 'Nombre', 'Edad', 'Correo', " + "];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  organizedAppointments : Array<AffiliatesOrganized> = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.organizeAppointments();
    console.log("Un cambio fue hecho en data source table")
    console.log(this.organizedAppointments)
  }  


  getCitasPorAfiliado(afiliadoId: number): any[]{
   return this.dataSourceTable.filter(cita => cita.affiliates.id === afiliadoId); 
  }


    organizeAppointments(): void {
        const appointmentsByAffiliate: { [key: number]: any } = {};
        this.dataSourceTable.forEach(appointment => {
          const affiliateId = appointment.affiliates.id;
          if (appointmentsByAffiliate[affiliateId]) {
            appointmentsByAffiliate[affiliateId].appointments.push(appointment);
          } else {
            appointmentsByAffiliate[affiliateId] = {
              ...appointment.affiliates,
              appointments: [appointment],
              showAppointments: false //Propiedad para controlar la vista
            };
          }
        }); 
        this.organizedAppointments = Object.values(appointmentsByAffiliate);
      }
  
    toggleAffiliate(affiliate: AffiliatesOrganized){
      // affiliate.citas = affiliate.citas ? null : this.getCitasPorAfiliado(affiliate.id);
      affiliate.showAppointments = !affiliate.showAppointments;
    }
    
}
