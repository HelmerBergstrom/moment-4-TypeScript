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

  sortCol: string = '';
  sortAsc: boolean = true;
    
  constructor(private courseListService: CourseListService) {}

  ngOnInit() {
    this.courseListService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.filteredCourses = courses;
    })
  }

  filter(): void {
    // Skapar variabel för att kunna köra filtreringen två gånger
    const filter = this.filterValue.toLowerCase();

    // Filtrerar tabellen med värdet som frasen som angetts.
    this.filteredCourses = this.courses.filter(course =>
      course.code.toLowerCase().includes(filter) ||
      course.coursename.toLowerCase().includes(filter)
    );
  }

  // Column = något i Courses, code, coursename eller progression.
  sortBy(column: keyof Courses): void {
    // Växlar mellan stigande och fallande. Stigande är True. Fallande är False. 
    // Stigande ordning på första klicket på en ny kolumn i tabellen.
    if(this.sortCol === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortCol = column;
      this.sortAsc = true;
    }

    // aCourse och bCourse är två kurser som jämförs. Detta sker med alla kurser i tabelen.
    // Konverterar till små bokstäver för jämförelsen.
    this.filteredCourses.sort((a, b) => {
      const aCourse = a[column]?.toLowerCase?.() ?? a[column];
      const bCourse = b[column]?.toLowerCase?.() ?? b[column];

      // Kontrollerar om a ska gå före b och tvärtom.
      if(aCourse < bCourse)
        return this.sortAsc ? -1 : 1;
      if(aCourse > bCourse)
        return this.sortAsc ? 1 : -1;
        
      return 0; // Går det inte att ordna kurser, returneras noll, alltså sker inget.
    });
  };

  // Sorteringspilar som visar olika beroende på fallande/stigande ordning.
  sortArrow(column: string): string {
    if(this.sortCol !== column)
      return ''; // Ingen pil som standard.

    return this.sortAsc ? '⬇️' : '⬆️';
    // Pil nedåt för fallande och uppåt för stigande.
    // Växlar mellan dessa två pilar.
  }
};
