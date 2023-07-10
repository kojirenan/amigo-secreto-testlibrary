import { useRecoilValue } from 'recoil';
import { resultSecretFriend } from '../atom';

export const useResultRaffle = () => {
  return useRecoilValue(resultSecretFriend);
};
