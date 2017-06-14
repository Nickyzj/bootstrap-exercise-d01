import { BootstrapExerciseD01Page } from './app.po';

describe('bootstrap-exercise-d01 App', () => {
  let page: BootstrapExerciseD01Page;

  beforeEach(() => {
    page = new BootstrapExerciseD01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
