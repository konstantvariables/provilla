import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JobService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getJobs(): Observable<any> {
    return this.http.get('/api/jobs').map(res => res.json());
  }

  getJobsByOwner(email:string): Observable<any> {
    return this.http.get('/api/job/owner/' + email).map(res => res.json());
  }

  countJobs(): Observable<any> {
    return this.http.get('/api/jobs/count').map(res => res.json());
  }

  addJob(job): Observable<any> {
    return this.http.post('/api/job', JSON.stringify(job), this.options);
  }

  getJob(job): Observable<any> {
    return this.http.get(`/api/job/${job._id}`).map(res => res.json());
  }

  editJob(job): Observable<any> {
    return this.http.put(`/api/job/${job._id}`, JSON.stringify(job), this.options);
  }

  deleteJob(job): Observable<any> {
    return this.http.delete(`/api/job/${job._id}`, this.options);
  }

}
