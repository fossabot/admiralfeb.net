import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '@shared/shared-module.module';
import { AVComponent } from './av.component';
import { MarkdownService, MarkedOptions, MarkdownModule } from 'ngx-markdown';
import { markedOptionsFactory } from '../../markedOptionsFactory';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('AVComponent', () => {
    let component: AVComponent;
    let fixture: ComponentFixture<AVComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                HttpClientModule,
                MarkdownModule.forRoot({
                    loader: HttpClient,
                    markedOptions: {
                        provide: MarkedOptions,
                        useFactory: markedOptionsFactory,
                    },
                }),
            ],
            declarations: [AVComponent],
            providers: [MarkdownService, MarkedOptions]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AVComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
