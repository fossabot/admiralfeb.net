import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from 'src/app/modules/shared-module/shared-module.module';
import { VidsComponent } from './vids.component';

describe('VidsComponent', () => {
    let component: VidsComponent;
    let fixture: ComponentFixture<VidsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [VidsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VidsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
