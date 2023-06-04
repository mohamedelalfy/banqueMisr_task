import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Routes } from '@angular/router';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppModule } from './app.module';
import { APP_BASE_HREF } from '@angular/common';
import { appRoutes } from './app-routing.module';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule,
                    AppModule,
                    CoreModule,
                    LoadingBarHttpClientModule,
                    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
                ],
                providers: [
                    {
                        provide: APP_BASE_HREF,
                        useValue: '/',
                    },
                ],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it(
        'should check the `main` content has the class more than 2',
        waitForAsync(() => {
            const testbed = TestBed.createComponent(AppComponent);
            testbed.detectChanges();
            const compiled = fixture.debugElement.nativeElement;

            expect(compiled.querySelector('main').classList.length).toBeGreaterThan(2);
        }),
    );
});
