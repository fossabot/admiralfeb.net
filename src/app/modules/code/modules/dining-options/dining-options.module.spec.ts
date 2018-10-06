import { DiningOptionsModule } from './dining-options.module';

describe('DiningOptionsModule', () => {
  let diningOptionsModule: DiningOptionsModule;

  beforeEach(() => {
    diningOptionsModule = new DiningOptionsModule();
  });

  it('should create an instance', () => {
    expect(diningOptionsModule).toBeTruthy();
  });
});
