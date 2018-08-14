import { Component, OnInit } from '@angular/core';
import { PatientRestService } from '../../../@fhir/patient-rest.service';
import { ObservationRestService } from '../../../@fhir/observation-rest.service';
import notify from '../../../../../node_modules/devextreme/ui/notify';
import DataSource from '../../../../../node_modules/devextreme/data/data_source';

@Component({
  selector: 'ngx-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  patient;
  dataSet = [];
  loadingVisible = false;
  dataSource: DataSource;

  constructor(private patientRestService: PatientRestService,
              private observationRestService: ObservationRestService) {
  }

  ngOnInit() {
    const patient = localStorage.getItem('myPatient');
    if (patient !== null) {
      this.patient = JSON.parse(patient);
      this.loadingVisible = true;
      this.fetchData();
    }
  }

  findPatient(identifier) {
    console.info(identifier);
    this.patient = null;
    this.patientRestService.fetchAll({
      'identifier': identifier,
    }).subscribe(next => {
      console.info(next);
      this.patient = next[0];
      localStorage.setItem('myPatient', JSON.stringify(this.patient));
    }, error => {
      notify('查詢失敗');
    }, () => {
      this.fetchData();
    });
  }

  logout() {
    localStorage.removeItem('myPatient');
    this.patient = null;
    this.dataSource = null;
    this.dataSet = [];
  }

  fetchData() {
    this.observationRestService.fetchAll({}, this.patient.id).subscribe(next => {
      this.dataSet = this.dataSet.concat(next);
    }, error => {
      notify('調閱資料失敗');
    }, () => {
      this.loadingVisible = false;
      this.dataSource = new DataSource(this.dataSet);
    });
  }
}
