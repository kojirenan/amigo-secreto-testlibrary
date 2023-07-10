import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useParticipantsList } from '../state/hooks/useParticipantsList';
import Raffle from './Raffle';
import { useResultRaffle } from '../state/hooks/useResultRaffle';

jest.mock('../state/hooks/useParticipantsList', () => {
  return {
    useParticipantsList: jest.fn(),
  };
});
jest.mock('../state/hooks/useResultRaffle', () => {
  return {
    useResultRaffle: jest.fn(),
  };
});

describe('Página de sorteio', () => {
  const participants = ['Renan', 'Giovana', 'Ester'];
  const result = new Map([
    ['Renan', 'Ester'],
    ['Giovana', 'Renan'],
    ['Ester', 'Giovana'],
  ]);
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
    (useResultRaffle as jest.Mock).mockReturnValue(result);
  });
  test('Todos os participantes podem exibir o seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );
    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(participants.length);
  });

  test('O amigo secreto é exibido quando é solicitado', () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );
    const select = screen.getByPlaceholderText('Selecione o seu nome');
    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    });
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const secretFrient = screen.getByRole('alert');
    expect(secretFrient).toBeInTheDocument();
  });
});
