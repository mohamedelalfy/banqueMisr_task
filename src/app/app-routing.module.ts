import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConverterComponent } from './components/converter/converter.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/converter',
        pathMatch: 'full',
    },
    { path: 'converter', component: ConverterComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
