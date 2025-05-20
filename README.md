# Moment4

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.


## Beskrivning av lösningen

Det första jag gjorde var att skapa en komponent vid namn course-list. Denna komponent skapade jag sedan en route för i 
"app.routes.ts".

Efter detta skapade jag en service för att hämta data från API:et där kurserna lagras. Detta gjordes via httpClient.
För att kunna använda httpClient lade jag till ```bash provideHttpClient() ``` till app.config-filen.

Datan lagras i interface-strukturen som jag skapade via en ny mapp vid namn "models". Denna mapp skapades via terminalen och som ett interface.

Interfacet ser ut såhär:

```bash
export interface Courses {
    code: string,
    coursename: string,
    progression: 'A' | 'B',
    syllabus: string
};
```
Jag gick sedan över till course-list komponenten för och skapade tabellen samt sökrutan för att filtrera innehållet i tabellen. Här lade jag till CommonModule och FormsModule till imports-arrayen.

Därefter började jag skriva kod i klassen i TypeScript-filen i komponenten. 

Jag började med att lagra en variabel för kurserna: 
```bash
courses: Courses[] = [];
```
Efter detta importerade jag min service via constructorn:

```bash 
constructor(private courseListService: CourseListService) {}
```

Jag skapade sedan en ngOnInit som anropas när komponenten startas och hämtar kurserna från API:et. Sparar data i courses.

I HTML-tabellen skapade jag thead-element och tbody-element. I tbody, där kurserna ska lagras, använde jag *ngFor i tr-elementet för att loopa igenom kurserna. Kurserna lagras på detta sätt i varsinna tr-element.

Kurserna skrev jag ut genom måsvingar:
```bash
{{ course. code }}
```

Förutom länken till kursplanen som skrevs ut såhär:
```bash
<td><a [href]="course.syllabus"> LÄNK </a></td>
```

### Filtrering 

Jag gick sedan över till arbetet med filtreringen. I sökrutans input-element, använde jag ngModel mot en ny variabel i TS vid namn "filterValue". Detta för att uppdatera denna variabel dynamiskt utifrån användarens input. När användaren matar in något körs även metoden "filter()":

```bash
<input type="text" id="seek" [(ngModel)]="filterValue" (input)="filter()" placeholder="Filtrera..."> 
```

Funktonen filter() filtrerar utifrån vad användaren har matat in i sökrutan. Detta görs genom att jämföra användarens input med kurskod och kursnamn, i små bokstäver.

### Sortering

Vid klick på tabellens rubriker ska det sorteras utifrån den kolumnen. För att få till detta skapades funktionen sortBy() och anropas vid klick på varje th-element:

```bash
<th class="tableHeader" (click)="sortBy('code')"> Kurskod {{ sortArrow('code') }} </th>
```
Notera att den skickar med argumentet 'code'. och även att sortArrow('code') skrivs ut.

I metoden sortBy tas argument med för något Courses:
```bash
sortBy(column: keyof Courses): void
```

I metoden används if-satser för att kontrollera om någon sortering finns eller inte. Detta eftersom både stigande och fallande ordning ska fungera. Funktionen kontrollerar även om det är första klicket på ett th-element.

```bash
if(this.sortCol === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortCol = column;
      this.sortAsc = true;
    }
```
Denna if- och else-sats körs först i metoden för att växla mellan stigande och fallande ordning. Stigande är True och fallande är False. Detta fungerar eftersom en variabel är deklarerad i metoden:

```bash
  sortAsc: boolean = true;
```
Denna boolean växlas mellan true och false för att genomföra sortering i olika ordningar.

Efter detta körs en sorteringsfunktion för att konvertera bokstäver till små bokstäver och jämföra kurserna, och därefter sortera utifrån jämförelsen. Detta jämförs med if-sats, större än(>) och mindre än(<).

### Sorteringspilar

Detta skapades relativt enkelt. Pilarna är emojis och körs vid första klicket som en pil nedåt och vid andra klicket som en pil uppåt, men standard är en tom textsträng.


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
