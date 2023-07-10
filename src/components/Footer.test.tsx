import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Footer from './Footer';
import { useParticipantsList } from '../state/hooks/useParticipantsList';

jest.mock('../state/hooks/useParticipantsList', () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

const mockNavigate = jest.fn();
const mockRaffle = jest.fn();

jest.mock('../state/hooks/useRaffle', () => {
  return {
    useRaffle: () => mockRaffle,
  };
});

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe('Quando não existe participantes suficientes', () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });
  test('A brincadeira não pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});

describe('Quando existem participantes suficientes', () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(['Renan', 'Giovana', 'Beatriz']);
  });

  test('A brincadeira pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
  });

  test('A brincadeira foi iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/sorteio');
    expect(mockRaffle).toHaveBeenCalledTimes(1);
  });
});
