import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SkorpionSiteAppComponent } from '../app/skorpion-site.component';

beforeEachProviders(() => [SkorpionSiteAppComponent]);

describe('App: SkorpionSite', () => {
  it('should create the app',
      inject([SkorpionSiteAppComponent], (app: SkorpionSiteAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'skorpion-site works!\'',
      inject([SkorpionSiteAppComponent], (app: SkorpionSiteAppComponent) => {
    expect(app.title).toEqual('skorpion-site works!');
  }));
});
