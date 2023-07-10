import { useParticipantsList } from './useParticipantsList';
import { useSetRecoilState } from 'recoil';
import { resultSecretFriend } from '../atom';
import { carryOutDraw } from '../helpers/carryOutDraw';

export const useRaffle = () => {
  const participants = useParticipantsList();
  const setResult = useSetRecoilState(resultSecretFriend);

  return () => {
    const result = carryOutDraw(participants);
    setResult(result);
  };
};
