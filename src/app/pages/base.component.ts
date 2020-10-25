import { ActivatedRoute, Router } from '@angular/router';
import { MASKS } from 'ng-brazil';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

export abstract class BaseComponent{

    public MASKS = MASKS;

    public submetido: boolean = false;

    constructor(){ 
    }

    protected configurarToast(){
        return {
            timeOut: 3000,
            positionClass:'toast-top-right',
            toastClass: 'alert alert-success alert-dismissible fade show',
            progressBar: true,
            closeButton:true
        };
    }

    protected configurarToastErro(){
        return {
            timeOut: 3000,
            positionClass:'toast-top-right',
            toastClass: 'alert alert-danger alert-dismissible fade show fade show',
            progressBar: true,
            closeButton:true
        };
    }
     
}