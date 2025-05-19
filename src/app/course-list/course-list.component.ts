import { Component } from '@angular/core';
import { Courses } from '../models/courses';
import { CourseListService } from '../service/course-list.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
    
  courses: Courses[] = [];

  filteredCourses: Courses[] = [];
  filterValue: string = "";
    
  constructor(private courseListService: CourseListService) {}

  ngOnInit() {
    this.courseListService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.filteredCourses = courses;
    })
  }

  filter(): void {
    const filter = this.filterValue.toLowerCase();
    
    this.filteredCourses = this.courses.filter(course =>
      course.code.toLowerCase().includes(filter) ||
      course.coursename.toLowerCase().includes(filter)
    );
  }
}
