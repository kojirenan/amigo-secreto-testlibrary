import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Config from './Config';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe('Página de configuração', () => {
  test('deve ser renderizada corretamente', () => {
    const { container } = render(
      <RecoilRoot>
        <Config />
      </RecoilRoot>
    );

    //teste de snapshot
    expect(container).toMatchSnapshot();
  });
});
