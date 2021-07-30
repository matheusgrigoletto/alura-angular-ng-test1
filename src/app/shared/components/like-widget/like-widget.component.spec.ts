import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { LikeWidgetModule } from './like-widget.module';
import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Test first
      /*declarations: [LikeWidgetComponent],
      imports: [FontAwesomeModule],
      providers: [UniqueIdService],*/
      imports: [LikeWidgetModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`${LikeWidgetComponent.name} should be created`, () => {
    expect(component).toBeTruthy();
  });

  it(`Should auto generate ID during ngOnInit when (@Input id) is NOT assigned`, () => {
    expect(component.id).toBeTruthy();
  });

  it(`Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned`, () => {
    const id = 'awesome';
    component.id = id;

    fixture.detectChanges();

    expect(component.id).toBe(id);
  });

  // bazuca pra uma formiga
  /*it(`#${LikeWidgetComponent.prototype.like.name}
  should trigger event emitter when called`, (done) => {
    fixture.detectChanges();

    component.liked.subscribe(() => {
      expect(true).toBeTrue();
      done();
    });

    component.like();
  });*/

  it(`#${LikeWidgetComponent.prototype.like.name}
    should trigger (@Output liked) when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
