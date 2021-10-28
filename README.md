# Projekt prostej listy zadań stworzony do ćwiczeń ze środowskiem Angular.

<img align="center" src="https://user-images.githubusercontent.com/92121311/137022821-3ddb02ed-948e-44be-ad4a-94900de8c4a8.gif">
<br>

## Spis treści <span id="top"></span>

<a href="https://angular.io/"><img align="right" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" width="260" height="260"></a>
<div>
  <ol>
    <li><a href="#tech">Technologie</a></li>
    <li>
      <a href="#description">Opis projektu</a>
        <ul>
          <li><a href="#components">Komponenty</a>
            <ul>
              <li><a href="#appcomponent">App.Component</a></li>
              <li><a href="#listcomponent">List.Component</a></li>
              <li><a href="#helpcomponent">Help.Component</a></li>
              <li><a href="#add-taskcomponent">Add-task.Component</a></li>
              <li><a href="#todo-taskcomponent">Todo-task.Component</a></li>
              <li><a href="#done-taskcomponent">Done-task.Component</a></li>
            </ul>
          </li>
          <li><a href="#notasks">Brak zadań</a></li>
          <li><a href="#sticky">Sticky top</a></li>
        </ul>
    </li>
    <li><a href="#service">Serwis HTTP</a></li>
    <li><a href="#reactForms">Reactive Forms</a></li>
    <li><a href="#bootstrap">Bootstrap</a></li>
    <li><a href="#routing">Routing</a></li>
    <li>
        <a href="#res">Responsive Web Design</a>
        <ul>
          <li><a href="#res-zdj">Zdjęcia</a></li>
        </ul>
    </li>
    <li><a href="#directives">Dyrektywy</a></li>
    <li><a href="#pipes">Pipe'y</a></li>
  </ol>
</div>
<br>

<!-- TECHNOLOGIE -->
### Technologie <span id="tech"></span>

* [Angular](https://angular.io) <a href="https://angular.io"><img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" width="14" height="14"></a>
* [Bootstrap](https://getbootstrap.com) <a href="https://getbootstrap.com"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" alt="Bootstrap" width="18" height="14"></a>
* [Visual Studio Code](https://code.visualstudio.com) <a href="https://code.visualstudio.com"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VSC" width="14" height="14"></a>
* [GIT](https://git-scm.com) <a href="https://git-scm.com"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/97px-Git_icon.svg.png" alt="Git" width="14" height="14"></a>
* [Fake Rest API](https://github.com/typicode/json-server#getting-started) <a href="https://github.com/typicode/json-server#getting-started"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/1024px-Github-desktop-logo-symbol.svg.png" alt="GitHub" width="14" height="14"></a>
<p align="right">(<a href="#top">Do góry!</a>)</p>

<!-- OPIS PROJEKTU -->
## Opis projektu <span id="description"></span>

<img align="center" src="GitHub/MainPage.png" alt="Strona główna">
<p align="center"><small><i>Wygląd strony głównej.</i></small></p>
<br>
<ul>
  <li><a href="#components">Komponenty</a></li>
  <li><a href="#notasks">Brak zadań</a></li>
  <li><a href="#sticky">Sticky top</a></li>
</ul>
<p align="right">(<a href="#top">Do góry!</a>)</p>
<br>

<!-- KOMPONENTY -->
### Komponenty <span id="components"></span>

<img align="center" src="https://user-images.githubusercontent.com/92121311/137037024-15e2aa19-0d2b-4062-a253-d4639f10766a.png" alt="Rozłożenie komponentów">
<p align="center"><small><i>Rozkład komponentów.</i></small></p>

<p align="justify">W celu skupienia uwagi użytkownika obszar wyświetlania informacji został zawężony do 60% szerokości strony (w przypadku wyświetlania na ekranach o rozdzielczości większej niż 1600px szerokości. Zakres ulega zmianom zgodnie z <a href="#res">Responsive Web Design</a>).</p>

<strong>Drzewo komponentów</strong>
<ul>
  <li><a href="#appcomponent">App.Component</a>
    <ul>
    <li><a href="#listcomponent">List.Component</a>
      <ul>
        <li><a href="#add-taskcomponent">Add-task.Component</a></li>
        <li><a href="#todo-taskcomponent">Todo-task.Component</a></li>
        <li><a href="#done-taskcomponent">Done-task.Component</a></li>
      </ul>
    </li>
      <li><a href="#helpcomponent">Help.Component</a></li>
    </li>
  </ul>
</ul>
<p align="right">(<a href="#description">Wyżej</a>)  (<a href="#top">Do góry!</a>)</p>

<br>
<hr>

<!-- APPCOMPONENT -->
#### App.component <span id="appcomponent"></span>
 
<p align="justify">Zawiera trzon projektu i jest rodzicem dla pozostałych komponentów.</p>
<br>

<p>Opisany jest w nim nagłówek:</p>  <span id="header"></span>
<img align="center" src="https://user-images.githubusercontent.com/92121311/137205980-7e1ae2e0-ef87-4ca9-b100-7d66940df189.PNG" alt="Nagłówek">

```HTML
 <!--app.component.HTML-->

  <div class="header">
    <h1><strong>Lista zadań do wykonania.</strong></h1>
  </div>
```
  
```CSS
  /*app.component.css*/
  
  .header { text-align: right; color: #fffff0; padding: 5px 25px 5px; font-weight: bold; }
```

<br>

<p>Pasek nawigacyjny:</p> <span id="topnavbar"></span>
<img align="center" src="https://user-images.githubusercontent.com/92121311/137206107-7413ee7e-5833-4599-8397-25b0d8240723.PNG" alt="Pasek nawigacyjny">

```HTML
 <!--app.component.HTML-->

<div class="topnavbar" [ngClass]="{ 'MenuShow': bMenuHide === false, 'MenuHide': bMenuHide === true }">
  <button id="Menu" (click)="hideMenu()"></button>
  <a [routerLinkActive]="['active']" routerLink="/Lista">LISTA</a>
</div>
```

<p>Zawiera dyrektywę ngClass, użytą do <a href="res">Responsive design</a>, oraz <a href="routing">AngularRouting</a></p>
  
```CSS
  /*app.component.css*/
  
  .topnavbar { position: -webkit-sticky; position: sticky; top: 0; background-color: #464646;
               overflow: hidden; }
```

<p>Parametr position: sticky użyto do przyczepienia paska do konkretnej pozycji w przypadku scrollowania (więcej w roz. <a href="#sticky">sticky</a>).</p>

<br>

<p>Stopka:</p> <span id="footer"></span>
<img align="center" src="https://user-images.githubusercontent.com/92121311/137206967-63385c58-678a-4aa1-b6ff-1a49341a3087.PNG" alt="Nagłówek">

```HTML
 <!--app.component.HTML-->

<div class="footer"><hr>
  <h3>Robert Michalski</h3><br>
</div>
```

```CSS
  /*app.component.css*/
  
  .footer { text-align: center; position: fixed; bottom: 0px; left: 0px; size: 20px; color: #fffff0; 
            background-color: #1f1f1f; width: 100%;}
```

<p>Przy pomocy position: fixed umocowano stopkę w stałym miejscu okna przeglądarki.</p>

<p align="right">(<a href="#components">Wyżej</a>)  (<a href="#top">Do góry!</a>)</p>
<hr>





<!--LISTCOMPONENT-->
#### list.component <span id="listcomponent"></span>

<p align="justify">Stworzony jako rodzic dla komponentów odpowiedzialnych za funkcjonowanie listy.</p> 

```HTML
 <!--list.component.HTML-->

<div class="AddTask"> <app-add-task></app-add-task> </div>
<div class="maincontent"> 
  <div class="leftcolumn"> <app-todo-task></app-todo-task> </div>
  <hr class="divider" />
  <div class="rightcolumn"> <app-done-task></app-done-task> </div>
</div>
```

```CSS
  /*list.component.css*/
  
  .AddTask { position: -webkit-sticky; position: sticky; top: 48px; }
```

<p align="justify">Position: sticky dba o "przyklejanie" paska AddTask do paska nawigacyjnego podczas przewijania. (<a href="sticky">sticky</a>)</p>
<br>

<p align="justify">Pobiera informacje z <a href="service">serwisu HTTP</a> na temat statusu błędu zapytania serwera. W przypadku negatywnego statusu, korzystając z dyrektywy ngIf, wyświetla komunikat:</p>

<img align="center" src="https://user-images.githubusercontent.com/92121311/137211965-440cfeb3-2870-4c61-bbff-cc975cca4126.PNG" alt="Komunikat błędu">
<p align="center"><small><i>Brak połączenia.</i></small></p>
<br>

```HTML
 <!--list.component.HTML-->

<span class="httpErrorCode" *ngIf="HttpStatus !== '' ">
  <p style="...">Brak połączenia z bazą danych!</p>
  <p><strong>{{HttpStatus}}</strong></p> ...
</span>
```

```TSX
//list.component.ts

  constructor(private httpservice: HttpService) {
    this.httpservice.getStatus().subscribe((ErrorCode: string) => {
      this.HttpStatus = ErrorCode;
    });
  }
  HttpStatus: string = '';
```

<p align="right">(<a href="#components">Wyżej</a>)  (<a href="#top">Do góry!</a>)</p>
<hr>





<!--ADDTASKCOMPONENT-->
#### add-task.component <span id="add-taskcomponent"></span>

<p align="justify">Komponent odpowiedzialny za dodawanie nowych zadań.</p> 

```HTML
 <!--add-task.component.HTML-->

<div class="bar clearfix">
  <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
    <div style="float: left;">
      <input [ngClass]="{'is-invalid': taskName?.invalid && taskName?.touched}" formControlName="taskName">
      <div *ngIf="taskName?.invalid ">
        <small *ngIf="taskName?.errors?.required && taskName?.touched " class="text-danger"><strong>Wprowadź tekst. </strong></small>
        <small *ngIf="taskName?.errors?.forbiddenName" class="text-danger"><strong>Dozwolone są tylko litery i cyfry.</strong></small>
      </div>
    </div>
    <button [disabled]="!registrationForm.valid"  type="button" class="btn btn-success" style="margin-left: 10px;
    padding: 5px 15px;float: left;" type="submit">Dodaj</button>
  </form>
</div>
```

<p align="justify">Dyrektywa ngModel pozwala na ciągłe aktualizowanie wartości zmiennej newTask pomiędzy plikiem zawierającym skrypt i widokiem w przeglądarce.</p>
<p align="justify">Podczas kliknięcia przycisku "Dodaj" lub wciśnięcia klawisza "Enter" wywoływana jest metoda add().</p> 

```TSX
//add-task.component.ts

  add() { let task:Task = {name: this.newTask,
                           created: new Date().toLocaleDateString() + ', '
                           + new Date().toLocaleTimeString(),
                           isDone: false};
    if(task.name !== ''){ this.httpService.addTask(task); }
    this.newTask = ''; }
```

<p align="justify">Metoda add() tworzy zadanie przypisując mu odpowiednie wartości i wysyła je do <a href="service">serwisu HTTP</a>.</p> 

<p align="right">(<a href="#components">Wyżej</a>)  (<a href="#top">Do góry!</a>)</p>
<hr>





<!--TODOTASKCOMPONENT-->
#### todo-task.component <span id="todo-taskcomponent"></span>

<p align="justify">Wyświetla zadania do zrobienia.</p> 

```HTML
 <!--todo-task.component.HTML-->

<div *ngIf="tasksList.length > 0; else noTask"><ul><li
      appDate
      [dateCreated]="task.created"
      *ngFor="let task of tasksList | sortName; let odd = odd"
      [ngClass]="{ 'odd-li': odd === true, 'last-li': tasksList.length === 1 }">
      <p>{{ task.name | transformTask: "!" }}</p> ... <br> </li> </ul>
</div>

```

<p align="justify">Dyrektywa ngFor pozwala na powielanie zawartości (div) dla każdego obiektu zadania (task).</p>
<p align="justify">Dodatkowo wykorzystano tutaj dwie funkcjonalności środowiska Angular. Mianowicie <a href="directives">dyrektywy</a> oraz <a href="pipes">pipe'y</a>.</p>


```TSX
//todo-task.component.ts

  constructor(private httpService: HttpService) {
    httpService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks.filter((e) => e.isDone === false);
    });
  }
  tasksList: Array<Task> = [];
  
  removeTask(task: Task) { this.httpService.deleteTask(task); }

  doneTask(task: Task) { this.httpService.updateTask(task); }
```

<p align="justify">Podczas tworzenia obiektu todo-task wywoływana jest subskrybcja listy obiektów task z <a href="service">serwisu HTTP</a>.
Metoda removeTask() przesyła do <a href="service">serwisu HTTP</a> zadanie oznaczone do usunięcia, natomiast metoda doneTask() wysyła zadanie do zatwierdzenia.</p> 

<p align="right">(<a href="#components">Wyżej</a>)  (<a href="#top">Do góry!</a>)</p>
<hr>





<!--DONETASKCOMPONENT-->
#### done-task.component <span id="done-taskcomponent"></span>

<p align="justify">Wyświetla ukończone zadania.</p> 

```HTML
 <!--done-task.component.HTML-->

<div *ngIf="tasksDone.length > 0; else noTask"><ul><li
      appChecked
      ...
      <p>{{ task.name | transformTask: " - zakończone !" }}</p> ... <br/> </li> </ul>
</div>

```

<p align="justify">W komponencie donetask dodatkowo używamy <a href="#directives">dyrektywy</a> appChecked żeby wyróżnić zakończone zadania.</p>


```TSX
//done-task.component.ts

  constructor(private httpService: HttpService) {
    httpService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks.filter((a) => a.isDone === true);
    });
  }
  tasksDone: Array<Task> = [];
```

<p align="justify">Podczas tworzenia obiektu done-task wywoływana jest subskrybcja listy obiektów task z <a href="service">serwisu HTTP</a>.</p> 

<p align="right">(<a href="#components">Wyżej</a>)  (<a href="#top">Do góry!</a>)</p>
<hr>





<!--HELPCOMPONENT-->
#### help.component <span id="helpcomponent"></span>

<p align="justify">Zawiera informacje na temat sposobu podłączenia do Fake Rest Api.</p> 

![HelpPage](GitHub/HelpPage.png)
<p align="center"><small><i>Widok strony z pomocą.</i></small></p>
<br>

<p align="right">(<a href="#components">Wyżej</a>)  (<a href="#top">Do góry!</a>)</p>
<br>





<!--BRAKZADAN-->
### Brak zadań <span id="notasks"></span>

<img align="center" src="https://user-images.githubusercontent.com/92121311/137044377-712b7d8b-8ad5-4ba7-8c5b-d9d2eac4e753.PNG" alt="Brak zadań">
<p align="center"><small><i>Wygląd w przypadku braku zadań.</i></small></p>

<br>
<p align="justify"> Przy pomocy instrukcji warunkowej ngIf sprawdzamy czy dostępne są zadania. W przypadku gdy lista zadań jest pusta, w miejscu listy wyświetlany jest template zadeklarowany w (ng-template).</p>
<br>

```HTML
 <!--todo-task.component.HTML-->

  <div *ngIf="tasksList.length > 0; else noTask">
    ...
  </div>

  <ng-template #noTask>
    <p style="...">Brak wykonanych zadań</p>
  </ng-template>
```

<p align="right">(<a href="#description">Wyżej</a>)  (<a href="#top">Do góry!</a>)</p>
<br>





<!--Sticky TOP-->
### Sticky top <span id="sticky"></span>

<img align="center" src="https://user-images.githubusercontent.com/92121311/137816996-3993a7bd-97e8-4870-8de4-8a2c92170a8c.gif" alt="Sticky navbar">
<p align="center"><small><i>Sticky topnavbar.</i></small></p>
<br>
<p align="justify"><a href="topnavbar">Pasek nawigacyjny</a> oraz <a href="listcomponent">pasek addTask</a> korzystają z atrybutu position: sticky. Pozwala to na przyklejenie określonej zawartości do konkretnego punktu na ekranie przeglądarki. W momencie przewijania zawartość zatrzymuje się na tej pozycji. Pozwala to na zachowanie widocznym istotnych dla użytkownika funkcji podczas pracy np. z długą listą.</p> 


<p align="right">(<a href="#description">Wyżej</a>)  (<a href="#top">Do góry!</a>)</p>
<br>





<!--SERWISHTTP-->
## Serwis HTTP <span id="service"></span>

<br>

```TSX
//http.service.ts

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  tasks$ = this.taskListObs.asObservable();

  private status = new BehaviorSubject<string>('');
  status$ = this.status.asObservable();
  
  getStatus(): Observable<string> { return this.status$; }

  getTaskListObs(): Observable<Array<Task>> { return this.tasks$; }
```

<p align="justify">Zadeklarowano zmienne taskListObs oraz status typu BehaviourSubject z biblioteki rxjs. Dzięki temu kod nie jest wywoływany osobno dla każdego subskrybenta. Następnie stworzone zostały na ich podstawie zmienne tasks$ oraz status$, które zadeklarowane zostały jako obserwowalne. Metody getStatus() oraz getTaskListObs() po wywołaniu przez komponent korzystający z serwisu zwracają wartości obserwowanych zmiennych, a właściwości typu Observable dbają o ciągła aktualizację tej wartości.</p>
<br>

```TSX
//http.service.ts

  getTasks() {
    this.http.get<Array<Task>>('http://localhost:3000/posts').subscribe(
      (tasks) => {
        this.taskListObs.next(tasks);
      },
      (error) => {
        this.status.next(error.name);
        //console.log('getTasks ' + error.name);
      },
      () => {this.status.next('')}
    );
  }
```

<p align="justify">Metoda getTask() odpowiada za pobieranie listy zadań z FakeRestAPI. Wywoływana jest ona przy tworzeniu obiektu. Na adres 'http://localhost:3000/posts' wysyłane jest zapytanie GET. Do zmiennej taskListObs przypisywane są uzyskane wartości, do zmiennj status przypisywany jest komunikat błędu, jeśli zapytanie zakończyło się sukcesem do zmiennej status przypisujemy pustego stringa.</p>
<br>

```TSX
//http.service.ts

  addTask(task: Task) {
    //console.log('AddTask ' + task.name);
    this.http.post<Task>('http://localhost:3000/posts', task).subscribe(
      () => {},
      (error) => {this.status.next(error.name);},
      () => {this.getTasks();}
    );
  }
```

<p align="justify">Metoda addTask() dodaje do listy 'posts' kolejny obiekt typu task. W przypadku pomyślnego zakończenia zapytania zostaje wywołana metoda getTask() która aktualizuje wyświetlaną listę.</p>

<p align="right">(<a href="#top">Do góry!</a>)</p>
<br>











<!-- Reactive Forms -->
## Reactive Forms <span id="reactForms"></span>

<img align="center" alt="Add sign" src="https://user-images.githubusercontent.com/92121311/139146473-d9dc1ed8-e8d9-484b-8358-053a84a1ae4a.PNG">
<p align="center"><small><i>Komunikat w przypadku pustego pola tekstowego.</i></small></p>
<br>

<img align="center" alt="Sign control" src="https://user-images.githubusercontent.com/92121311/139146499-c32570f2-3b34-46b0-aea5-36d99c8f9f23.PNG">
<p align="center"><small><i>Komunikat w przypadku wprowadzenia niedozwolonych znaków.</i></small></p>
<br>

```HTML
<!--add-task.component.HTML-->

<div ...>
  <form [formGroup]="addtaskForm" (ngSubmit)="onSubmit()">
    <div ....>
      <input [ngClass]="{'is-invalid': taskName?.invalid && taskName?.touched}" formControlName="taskName">
      <div *ngIf="taskName?.invalid ">
        <small *ngIf="taskName?.errors?.required && taskName?.touched " class="text-danger"><strong>Wprowadź tekst. </strong></small>
        <small *ngIf="taskName?.errors?.forbiddenName" class="text-danger"><strong>Dozwolone są tylko litery i cyfry.</strong></small>
      </div>
    </div>
    <button [disabled]="!addtaskForm.valid" ... type="submit">Dodaj</button>
  </form></div>
```

```TSX
//add-task.component.ts

ngOnInit(): void {
    this.addtaskForm = this.formbuilder.group({
      taskName: ['', [Validators.required, Validators.minLength(1), forbiddensignValidator(/[`\-~!@#$%^&*()_+={}\[\]|\\:\'\/\";“’<,>.?๐฿]+/)]]
    })}
    
```

<p align="justify">Przy użyciu formbuilder została stworzona form grupa o nazwie ( addtaskForm ). Do tej grupy dodany został FormControl o nazwie taskName. Dla zmiennej ustawiona została kontrola walidacji. Jako warunki przyjęto łańcuch o długości przynajmniej jednego znaku oraz funkcję forbiddensignValidator.</p>

```TSX
//new-task.validator.ts

import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddensignValidator(forbiddenName : RegExp) :ValidatorFn {
  return (control : AbstractControl) : any | null => {
    const forbidden : boolean = forbiddenName.test(control.value);
    return forbidden ? {'forbiddenName':{value: control.value}} : null;
}}
```

<p align="justify">Funckcja forbiddensignValidator jako argument przyjmuje regular expression. Jeśli tekst nie zawiera znaków wprowadzonych w regexp, zwracany jest null i formcontrol przechodzi do wartości VALID.</p>

<p align="right">(<a href="#top">Do góry!</a>)</p>
<br>




<!-- BOOTSTRAP -->
## Bootstrap <span id="bootstrap"></span>

<p align="justify">Dzięki wykorzystaniu biblioteki bootstrap, w łatwy i szybki sposób zaimplementowano animowane przyciski do wywoływania eventów.</p>
<br>

<p><strong>Zakończenie zadania.</strong></p>
<hr>
<img align="left" alt="ToDo End" src="https://user-images.githubusercontent.com/92121311/137049565-29871d0a-9824-4fec-a2b4-c457492daab1.PNG" width="430" height="165">

```HTML
<!--todo-task.component.HTML-->

  <li>
    <button type="button" 
     class="btn btn-outline-success" 
     style="..." 
     (click)="doneTask(task)">Zrobione!</button>
  </li>
```

<br content="" display="table" clear="both">
<br>

<p><strong>Usunięcie zadania.</strong></p>
<hr>
<img align="left" alt="ToDo Delete" src="https://user-images.githubusercontent.com/92121311/137049776-a5c758f5-29ce-49be-919c-6377ee28cef6.PNG" width="430" height="165">

```HTML
<!--todo-task.component.HTML-->

  <li>
    <button type="button" 
     class="btn btn-outline-danger" 
     style="..." 
     (click)="removeTask(task)">Usuń!</button>
  </li>
```

<br content="" display="table" clear="both">
<br>

<p><strong>Usunięcie zakończonego zadania.</strong></p>
<hr>
<img align="right" alt="ToDo Delete" src="https://user-images.githubusercontent.com/92121311/137049894-47907439-8b91-4823-9903-3f0d28144cde.PNG" width="440" height="190">

```HTML
<!--done-task.component.HTML-->

  <li>
    <button type="button" 
     class="btn btn-outline-light" 
     style="..." 
     (click)="removeTask(task)">Usuń!</button>
  </li>
```

<br content="" display="table" clear="both">
<br>

<p align="right">(<a href="#top">Do góry!</a>)</p>
<br>





<!-- ROUTING -->
## Routing <span id="routing"></span>

<img align="center" src="https://user-images.githubusercontent.com/92121311/137027356-6200a935-5787-4b00-9ad9-2c49eb532f55.gif">
<p align="center"><small><i>Zmiana komponentu przy pomocy Angular Routing.</i></small></p>
<br>

```HTML
<!--app.component.HTML-->

<div ... >
  ...
  <a [routerLinkActive]="['active']" routerLink="/Lista">LISTA</a>
  ...
  <a [routerLinkActive]="['active']" routerLink="/Help">HELP</a>
</div>

<router-outlet></router-outlet>
```

```TSX
//app-routing.module.ts

const routes: Routes = [
  { path: '', redirectTo: 'Lista', pathMatch: 'full' },
  { path: 'Lista', component: ListComponent },
  { path: 'Help', component: HelpComponent },
  { path: '**', component: ListComponent },  // Wildcard route for a 404 page
];

```

<p align="justify">Do nawigacji pomiędzy głównymi komponentami wykorzystano bibliotekę angular routing. W tym przypadku, zamiast umieszczania selector'a z dekoratora komponentu który chcemy umieścić, wstawiamy selector (router-outlet). Pozwala nam to na dynamiczną podmianę komponentu. Właściwość "[routerLinkActive]="['active']" przypisuje wybraną klasę CSS w przypadku gdy dany link został aktywowany. Ścieżka '**' dodana zostało do obsługi pozostałych linków, tak aby w przypadku gdy użytkownik z poziomu pola adresu przeglądarki wpisze nieistniejącą ścieżkę zostanie przekierowany do strony głównej. W tym przypadku list.component.</p>

<p align="right">(<a href="#top">Do góry!</a>)</p>
<br>





## Responsive Web Design <span id="res"></span>

<img align="center" src="https://user-images.githubusercontent.com/92121311/137036819-2ba69ccf-1493-4783-95f3-67383ff9c0a6.gif">
<p align="center"><small><i>Responsywność strony.</i></small></p>
<br>

<p align="justify">Zachowanie serwisu zostało dopasowane tak, aby cała zawartość pozostawała czytelna niezależnie od rozdzielczości ekranu. Dzięki temu będzie on wygodny w obsłudze nawet na starszych monitorach oraz na mniejszych urządzeniach.</p>

<p align="right">(<a href="#top">Do góry!</a>)</p>
<br>

### Responsive Web Design - Zdjęcia <span id="res-zdj"></span>

<hr>

<img align="left" src="GitHub/ResponsiveDesignHalfWidth3.png" alt="Responsive Web Design 3" width="284" height="245">
<img align="left" src="GitHub/ResponsiveDesignHalfWidth2.png" alt="Responsive Web Design 2" width="254" height="245">
<img align="left" src="GitHub/ResponsiveDesignHalfWidth.png" alt="Responsive Web Design 1" width="200" height="245">
<br content="" display="table" clear="both">
<br>
<p align="center"><small><i>Stopnie składania Responsive Design.</i></small></p>

<hr>

<img align="left" src="GitHub/ResponsiveDesign.png" alt="Responsive Design" width="240" height="526">
<img align="left" src="https://user-images.githubusercontent.com/92121311/137178918-1f6d53a8-77b6-46cc-9ea1-4e7023bde395.png" alt="Responsive Design Menu" width="240" height="526">
<img align="left" src="GitHub/ResponsiveDesignFooter.png" alt="Responsive Design Footer" width="240" height="458">
<br content="" display="table" clear="both">
<br>
<p align="center"><small><i>Rozwijane Menu i znikająca stopka.</i></small></p>
<br>
<p align="right">(<a href="#res">Wyżej</a>)  (<a href="#top">Do góry!</a>)</p>
<br>






<!-- DYREKTYWY -->
## Dyrektywy <span id="directives"></span>

<img align="left" alt="ToDo End" src="https://user-images.githubusercontent.com/92121311/137049565-29871d0a-9824-4fec-a2b4-c457492daab1.PNG" width="330" height="126">
<img align="right" alt="ToDo Delete" src="https://user-images.githubusercontent.com/92121311/137049894-47907439-8b91-4823-9903-3f0d28144cde.PNG" width="330" height="142">
<br content="" display="table" clear="both">
<br>
<p align="center"><small><i>Zastosowanie dyrektywy do wyświetlania dat.</i></small></p>
<br>

```HTML
<!--done-task.component.HTML-->

<div ... ><ul>
    <li ... appDate [dateCreated]="task.created" [dateEnd]="task.end" ... >
      <p>{{ task.name ...}}</p>
      ...
    </li></ul></div>
```

```TSX
//date.directive.ts

  @Input()
  public dateEnd !: string | undefined;

  @Input()
  public dateCreated !: string | undefined;

  private paragraphCreated :any;
  private paragraphEnd :any;
  
  constructor(private el:ElementRef, private renderer:Renderer2) {
    this.paragraphCreated = renderer.createElement('p');
    this.paragraphEnd = renderer.createElement('p');
  }

  @HostListener('mouseenter')
  mouseenter(e:MouseEvent){
    this.paragraphCreated.innerHTML = 'Dodano ' + this.dateCreated;
    this.renderer.appendChild(this.el.nativeElement,this.paragraphCreated);
    if(this.dateEnd !== undefined || null){
      this.paragraphEnd.innerHTML = 'Zakończono ' + this.dateEnd;
      this.renderer.appendChild(this.el.nativeElement,this.paragraphEnd);
    }
  }
  
```

<p align="justify">Ustawiamy zmienne dateEnd i dateCreated jako pobierające wartość z nadrzędnego komponentu. W konstruktorze, do zmiennych paragraph, przypisujemy właściwości elementu ( (p) HTML ). Dekorator @HostListener sprawdza czy wystąpił event 'mouseenter' dla elementu nadrzędnego. Jeśli tak się stanie, wywoływana jest metoda mouseenter(e) w której następuje stworzenie paragrafu o treści "Dodano 'data dodania'", a następnie przypisanie go do elementu ( li ) w którym została użyta dyrektywa. W przypadku gdy obiekt task posiada datę zakończenia, tworzony jest również drugi paragraf z jej datą.</p>

<p align="right">(<a href="#top">Do góry!</a>)</p>
<br>





<!-- PIPE'Y -->
## Pipe'y <span id="pipes"></span>

<img align="center" alt="pipes" src="https://user-images.githubusercontent.com/92121311/137988074-1dbdda6c-116c-43df-b626-3e9634294e73.png">
<p align="center"><small><i>Sortowanie w porządku alfabetycznym.</i></small></p>
<br>

```HTML
<!--done-task.component.HTML-->

<div ... ><ul>
    <li ... *ngFor="let task of tasksDone | sortName; ... ">
      <p>{{ task.name ...}}</p>
      ...
    </li></ul></div>
```

```TSX
//sort-name.pipe.ts

  transform(value: Array<Task>, ...args: unknown[]): Array<Task> {
    return value.sort(
      (a,b) => {
        if(a.name.toLowerCase() > b.name.toLowerCase()) {return 1;}
        else {return -1;}
      });
  } 
```

<p align="justify">Tablica obiektów taskDone zostaje 'przepuszczona' przez pipe w którym następuje sortowanie. Metoda transform() pobiera całą tablicę, porównuje kolejne kody ASCII znaków, odpowiednio ją sortuje i zwraca ją w postaci referencji. </p>

<p align="right">(<a href="#top">Do góry!</a>)</p>
<br>




# ProjektListaZadan

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

