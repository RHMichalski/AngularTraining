import { ListResolverService } from './list/list-resolver.service';
import { ListComponent } from './list/list.component';
import { HelpComponent } from './help/help.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'Lista', pathMatch: 'full' },
  { path: 'Lista', component: ListComponent, resolve: {tasks : ListResolverService}, runGuardsAndResolvers: 'always'},
  { path: 'Help', component: HelpComponent },
  { path: '**', component: ListComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
