import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../shared-module/shared-module.module';
import { VideoComponent } from './video.component';

describe('VideoComponent', () => {
    let component: VideoComponent;
    let fixture: ComponentFixture<VideoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [VideoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VideoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
