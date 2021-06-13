import { AppPage } from './app.po';

describe('CRUD • InfoSistemas', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Deve mostrar o título da página', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Veículos');
  });
});
