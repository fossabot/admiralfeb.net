import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from 'src/app/modules/shared-module/shared-module.module';
import { CraftingComponent } from './crafting.component';
import { MarkdownService, MarkedOptions, MarkdownModule } from 'ngx-markdown';
import { markedOptionsFactory } from '../../markedOptionsFactory';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('CraftingComponent', () => {
  let component: CraftingComponent;
  let fixture: ComponentFixture<CraftingComponent>;

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
      declarations: [CraftingComponent],
      providers: [MarkdownService, MarkedOptions]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
