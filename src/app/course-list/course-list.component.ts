import { Component } from '@angular/core';
import { Courses } from '../models/courses';
import { CourseListService } from '../service/course-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
    
  courses: Courses[] = [];
    
  constructor(private courseListService: CourseListService) {}

  ngOnInit() {
    this.courseListService.getCourses().subscribe((courses) => {
      this.courses = courses;
    })
  }
}
