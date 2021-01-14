import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RouterModule, Routes } from "@angular/router";
import { View1Component } from "./view1/view1.component";
import { View2Component } from "./view2/view2.component";
import { DisplayIdComponent } from "./display-id/display-id.component";
import { View3Component } from "./view3/view3.component";
import { SpecialComponent } from "./special/special.component";

const routes: Routes = [
  { path: "", redirectTo: "/hello", pathMatch: "full" },
  { path: "hello", component: HelloComponent },
  { path: "displ", component: DisplayIdComponent,outlet:'display' },
  { path: "view1", component: View1Component,
  children:[
    // { path: "", component: HelloComponent },
        { path: "", component: View2Component },
         { path: "testparam", component: HelloComponent ,outlet:'display',
         children:[
           { path: "nestedtestparam", component: DisplayIdComponent,outlet:'display3' }
         ]
         },
  ] },
  
  {
    path: "view2",
    component: View2Component,
    children: [{ path: "", component: DisplayIdComponent,outlet:'display2' }]
  },
  {
    path: "l1",
    children: [
      {
        path: "l2",
        children: [
          {
            path: "l3",
            children: [{ path: "view3", component: View3Component }]
          }
        ]
      }
    ]
  },
  {
    path: ":directory",
    children: [{ path: "special", component: SpecialComponent }]
  }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HelloComponent,
    View1Component,
    View2Component,
    DisplayIdComponent,
    View3Component,
    SpecialComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
