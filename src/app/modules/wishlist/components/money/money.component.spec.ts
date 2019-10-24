import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '@shared/shared-module.module';
import { MoneyComponent } from './money.component';
import { MarkdownService, MarkedOptions, MarkdownModule } from 'ngx-markdown';
import { markedOptionsFactory } from '../../markedOptionsFactory';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('MoneyComponent', () => {
  let component: MoneyComponent;
  let fixture: ComponentFixture<MoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule,
        HttpClientModule,
        MarkdownModule.forRoot({
          loader: HttpClient,
          markedOptions: {
            provide: MarkedOptions,
            useFactory: markedOptionsFactory,
          },
        }),
      ],
      declarations: [MoneyComponent],
      providers: [MarkdownService, MarkedOptions]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
