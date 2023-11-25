# choice
QUIZ WEBSITE
/*
<!--contains the view of app component that gets rendered when the component loads in browser-->
<!--<router-outlet></router-outlet>-->
<div>
  <h1>Hello user {{username}} title {{title}}</h1>
  <p>{{ username.substr(3,4) }}+{{ 'hello'.substr(2,3) }}</p>
  <h4>{{num % 2 == 0 ? 'Even Number' : 'Odd Number' }}</h4>
  <p (click)="changeName()">Click here to change</p>
  <input #uName placeholder="Field 1">
  <!-- uName refers to the input element; pass its 'value to an event handler -->
  <button (click)="showUser(uName.value)">Show</button>

  <input #cName><button (click)="changeNameWithThis(cName.value)">Change Course Name</button>
  <p><b>Property binding:</b> Property binding is a data binding method in angular that we can use to pass values from
    the component class to the components template file. Both Property Binding and Interpolation deal with the DOM properties and not HTML attributes.</p>
  <img [src]='imgUrl' alt='Property binding' width=200 height=100>
  <img bind-src='imgUrl' width=200 height=100>
  <img src="{{ imgUrl }}" alt='Interpolation' width=200 height=100>
  <p><b>Attribute binding:</b> Attribute Binding is the Data Binding method in angular using which we can set the values
    of the attribute of HTML elements directly
    i.e. Attribute Binding is used for binding the HTML attributes with the component properties dynamically. </p>
  <p><b>Class binding:</b> Using class binding, we can add or remove CSS class names from an element based on some
    condition which might change at a later instance.</p>
  <button [class.btn-success]="apply" [class.btn]="apply">Click Me!!</button>
  <button [class]="apply ? 'btn btn-success' :'btn btn-primary'">Click Me!Ternary!</button>
  <p><b>Style binding:</b>Using Style Binding, we can add or remove CSS properties from an element based on some
    condition which might change at a later instance.</p>
  <button [style.background-color]="apply ? 'orange' : 'greenyellow'" [style.color]="apply ? 'black' : 'white'">Click
    Me!!</button>
  <p><b>Event binding:</b>User actions such as entering text in input boxes, picking items from lists, button clicks may
    result in a flow of data in the opposite direction: from an element to the component.</p>
  <button (click)="showUser(uName.value)">Enter 'Field 1' & Click Me</button>
  <p><b>Two-Way binding:</b>Two Way Binding is a mechanism which means that:
    When properties in the model get updated, so does the UI.When UI elements get updated, the changes get propagated
    back to the model.</p>
  <input type="text" [(ngModel)]="name"> <br />
  <div>Hello , {{ name }}</div>

</div>
*/
/*//app.component.ts
//contains the business logic of app component
import { Component } from '@angular/core';
/*
Line11: Adding the @Component decorator to the class makes the class a component
Line12: Specifies the selector name i.e. app-root, which must be used to render the attached view for app component 
Line13: Specifies template/HTML file to be rendered when the component is loaded in the HTML page. The template represents the view to be displayed
Line14: It specifies the the array of stylesheets that should be applied on the template i.e. app.component.html
Line16: Every component is a class (AppComponent) and export keyword is used to access the class in another file
Line17: A class property title is defined with value 'MyApp'
*/
@Component({
  selector: 'app-root',//
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  username = 'Nandeesh';
  num = 8;
  changeName(){
    this.title = 'No one\'s App';
  }
  showUser(user:string) {
    console.log(user);
    alert(user);
  }
  changeNameWithThis(course: any) { 
    this.title = course; 
    }
    //For Property binding
    imgUrl:string = '../favicon.ico';
    //For Class binding
    apply = true;
    
    styleBind = {
      backgroundColor: 'greenyellow',
      color: 'white'
    }
    name= 'Angular';
}

*/
/*//app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Line 1: Imports NgModule class to define metadata of the module
//Line 2: Imports BrowserModule class which is needed to run the application inside the browser
//Line 3: Imports AppRoutingModule class to define the routes in the app
//Line 4: Imports AppComponent class from app.component.ts file. No need to mention .ts extension as Angular by default considers the file as .ts file
//Line 7: Declarations property should contain all user-defined components, directives, pipes classes to be used across the application. We have added our AppComponent class here
//Line 10: Imports property should contain all module classes to be used across the application
//Line 14: Providers property should contain all service classes. We will discuss services later in this course
//Line 15: Bootstrap declaration should contain the root component to load. In this example, AppComponent is the root component which will be loaded in the HTML page
*/
