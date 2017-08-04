import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { JobService } from '../../services/job.service';
import { AuthService } from '../../services/auth.service';
import { ToastComponent } from '../../shared/components/toast/toast.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  //providers: [NgbPopoverConfig]
})
export class JobsComponent implements OnInit {

  job = {};
  jobs = [];
  isLoading = true;
  isEditing = false;
  isCleaner = false;
  isOwner = false;
  isAdmin = false;
  canAdd = false;

  addJobForm: FormGroup;
  name = new FormControl('', Validators.required);
  detail = new FormControl('', Validators.required);
  priority = new FormControl('', Validators.required);

  constructor(private jobService: JobService,
    private formBuilder: FormBuilder,
    private http: Http,
    public auth: AuthService,
    public toast: ToastComponent,
    private modalService: NgbModal) {
    }

  ngOnInit() {
    this.canAdd = this.auth.currentUser.role !== 'cleaner';
    this.isCleaner = this.auth.currentUser.role === 'cleaner';
    this.isOwner = this.auth.currentUser.role === 'owner';
    this.isAdmin = this.auth.currentUser.role === 'admin';
    this.getJobs();
    this.addJobForm = this.formBuilder.group({
      name: this.name,
      detail: this.detail,
      priority: this.priority
    });
  }

  closeResult: string;
  addDlg: NgbModalRef
  // options: NgbModalOptions = {
  //   size: 'lg'
  // };
  open(content) {
    this.addDlg = this.modalService.open(content);
    this.addDlg.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ////////////////////////////////////

  getJobs() {
    console.log(this.auth.currentUser);
    const sub = this.auth.currentUser.role === 'owner'?
    this.jobService.getJobsByOwner(this.auth.currentUser.email) :
    this.jobService.getJobs();
    console.log(sub);
    sub.subscribe(
      data => {
        this.jobs = Array.isArray(data)? data:[data];
        //console.log("jobs: " + this.jobs);
      },
      error => {
        //console.log("Error..." + error);
        this.isLoading = false
      },
      () => {
        //console.log("loading complete...")
        this.isLoading = false
      }
    );
  }

  addJob() {
    this.jobService.addJob(this.addJobForm.value).subscribe(
      res => {
        const newJob = res.json();
        this.jobs.push(newJob);
        this.addJobForm.reset();
        this.toast.setMessage('Job added successfully.', 'success');
        this.addDlg.close('data saved');
      },
      error => console.log(error)
    );
  }

  enableEditing(job) {
    this.isEditing = true;
    this.job = job;
  }

  cancelEditing() {
    this.isEditing = false;
    this.job = {};
    this.toast.setMessage('Job updated cancelled.', 'warning');
    // reload the jobs to reset the editing
    this.getJobs();
  }

  editJob(job) {
    this.jobService.editJob(job).subscribe(
      res => {
        this.isEditing = false;
        this.job = job;
        this.toast.setMessage('Job updated successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  acceptJob(job) {
        this.toast.setMessage('Job accepted successfully.', 'success');
  }

  deleteJob(job) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.jobService.deleteJob(job).subscribe(
        res => {
          const pos = this.jobs.map(elem => elem._id).indexOf(job._id);
          this.jobs.splice(pos, 1);
          this.toast.setMessage('Job deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
