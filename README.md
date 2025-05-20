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

Jag började med att lagra en variabel för kurserna 
```bash
courses: Courses[] = [];
```
Efter detta importerade jag min service via constructorn

```bash 
constructor(private courseListService: CourseListService) {}
```




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
