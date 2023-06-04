import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from '../app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [HeaderComponent, NotFoundComponent],
    imports: [CommonModule, AppRoutingModule, MatButtonModule, TranslateModule],
    exports: [HeaderComponent, AppRoutingModule],

})
export class CoreModule {}
