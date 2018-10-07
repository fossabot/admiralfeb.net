import { DiningSelectorModule } from './dining-selector.module';

describe('DiningSelectorModule', () => {
  let diningSelectorModule: DiningSelectorModule;

  beforeEach(() => {
    diningSelectorModule = new DiningSelectorModule();
  });

  it('should create an instance', () => {
    expect(diningSelectorModule).toBeTruthy();
  });
});
