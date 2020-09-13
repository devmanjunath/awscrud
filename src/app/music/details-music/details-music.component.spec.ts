import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMusicComponent } from './details-music.component';

describe('DetailsMusicComponent', () => {
  let component: DetailsMusicComponent;
  let fixture: ComponentFixture<DetailsMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
