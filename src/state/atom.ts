import { atom } from 'recoil';

export const participantsList = atom<string[]>({
  key: 'participantsList',
  default: [],
});

export const errorState = atom<string>({
  key: 'errorState',
  default: '',
});

export const resultSecretFriend = atom<Map<string, string>>({
  key: 'resultSecretFriend',
  default: new Map(),
});
