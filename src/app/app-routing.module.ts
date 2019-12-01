import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Link1Component } from "./link1/link1.component";
import { Link2Component } from "./link2/link2.component";

const routes: Routes = [
  { path: "link1", component: Link1Component },
  { path: "link2", component: Link2Component }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [Link1Component, Link2Component];
