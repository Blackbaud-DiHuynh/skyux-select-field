import {
  by,
  element
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Select field', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/select-field');
  });

  it('should match previous multiple mode screenshot', (done) => {
    expect('#screenshot-select-field-multiple-mode').toMatchBaselineScreenshot(done);
  });

  it('should match previous single mode screenshot', (done) => {
    expect('#screenshot-select-field-single-mode').toMatchBaselineScreenshot(done);
  });

  it('should match previous multiple mode selected screenshot', (done) => {
    element(by.css('#select-field-populate-selected-btn')).click();
    expect('#screenshot-select-field-multiple-mode').toMatchBaselineScreenshot(done);
  });

  it('should match previous single mode selected screenshot', (done) => {
    element(by.css('#select-field-populate-selected-btn')).click();
    expect('#screenshot-select-field-single-mode').toMatchBaselineScreenshot(done);
  });

  it('should match previous single mode picker screenshot', (done) => {
    element(by.css('#screenshot-select-field-single-mode .sky-input-group.sky-btn')).click();

    SkyHostBrowser.moveCursorOffScreen();

    expect('.sky-modal').toMatchBaselineScreenshot(() => {
      element(by.css('.sky-modal-btn-close')).click();
      done();
    });
  });

  it('should match previous multiple mode picker screenshot', (done) => {
    element(by.css('#screenshot-select-field-multiple-mode .sky-btn.sky-btn-default')).click();

    SkyHostBrowser.moveCursorOffScreen();

    expect('.sky-modal').toMatchBaselineScreenshot(() => {
      element(by.css('.sky-modal-btn-close')).click();
      done();
    });
  });
});