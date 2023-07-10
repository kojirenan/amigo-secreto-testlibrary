import shuffle from 'just-shuffle';

export function carryOutDraw(participants: string[]) {
  const totalParticipants = participants.length;
  const shuffleParticipants = shuffle(participants);
  const result = new Map<string, string>();

  for (let i = 0; i < totalParticipants; i++) {
    const indexFriend = i === totalParticipants - 1 ? 0 : i + 1;
    result.set(shuffleParticipants[i], shuffleParticipants[indexFriend]);
  }

  return result;
}
