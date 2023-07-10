import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ParticipantsList from './ParticipantsList';
import { useParticipantsList } from '../state/hooks/useParticipantsList';

jest.mock('../state/hooks/useParticipantsList', () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

describe('Uma lista vazia de participantes', () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });
  test('Deve ser renderizada sem participantes', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole('listItem');
    expect(items).toHaveLength(0);
  });
});

describe('Uma lista preenchida de participantes', () => {
  const participants = ['Renan', 'Giovana'];
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });
  test('Deve ser renderizada com participantes', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(participants.length);
  });
});
