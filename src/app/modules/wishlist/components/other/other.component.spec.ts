import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from 'src/app/modules/shared-module/shared-module.module';
import { OtherComponent } from './other.component';
import { MarkdownService, MarkedOptions, MarkdownModule } from 'ngx-markdown';
import { markedOptionsFactory } from '../../markedOptionsFactory';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('OtherComponent', () => {
  let component: OtherComponent;
  let fixture: ComponentFixture<OtherComponent>;

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
      declarations: [OtherComponent],
      providers: [MarkdownService, MarkedOptions]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
