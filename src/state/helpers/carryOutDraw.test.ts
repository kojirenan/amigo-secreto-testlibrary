import { carryOutDraw } from './carryOutDraw';

describe('dado um sorteio de amigo secreto', () => {
  test('cada participante não sorteie o próprio nome', () => {
    const participants = ['Giovana', 'Beatriz', 'Mateus', 'Ester', 'Renan'];

    const shuffle = carryOutDraw(participants);
    participants.forEach(participant => {
      const secretFriend = shuffle.get(participant);
      expect(secretFriend).not.toEqual(participant);
    });
  });
});
