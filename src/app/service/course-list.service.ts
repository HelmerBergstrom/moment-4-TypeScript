import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../models/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  url: string = "https://webbutveckling.miun.se/files/ramschema.json";

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.url);
  }
}
