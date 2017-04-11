import { MonitorWycinkiDrzewPage } from './app.po';

describe('monitor-wycinki-drzew App', () => {
  let page: MonitorWycinkiDrzewPage;

  beforeEach(() => {
    page = new MonitorWycinkiDrzewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
