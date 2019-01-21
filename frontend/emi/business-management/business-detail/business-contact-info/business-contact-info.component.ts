////////// ANGULAR //////////
import { Component, OnInit, Input, EventEmitter, Output, } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

//////////// ANGULAR MATERIAL
import { MatDialog, MatSnackBar } from '@angular/material';
import { TableDataSource, ValidatorService } from 'angular4-material-table';

////////// RXJS ///////////
import { first, filter, map } from 'rxjs/operators';

////////// COMPONENTS AND SERVICES //////////
import { BusinessDetailService } from '../business-detail.service';

export class Attribute {
  key: string;
  value: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'business-contact-info',
  templateUrl: './business-contact-info.component.html',
  styleUrls: ['./business-contact-info.component.scss']
})
export class BusinessContactInfoComponent implements OnInit {

  ////////////// TABLE //////////////
  dataSource: TableDataSource<Attribute>;
  displayedColumns = ['key', 'value', 'actionsColumn'];

  ////////////// BUSINESS ATTRIBUTES //////////////
  @Input() businessAttributeList = [] ;
  @Output() businessAttributesListChange = new EventEmitter<Attribute[]>();


  businessForm: FormGroup;
  _businessId: String;
  _businessDetailAction: String;
  selectedBusiness: any;
  addNewBusiness: Boolean;

  constructor(
    private formBuilder: FormBuilder,
    private businessDetailService: BusinessDetailService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}


  ngOnInit() {

  }


}
