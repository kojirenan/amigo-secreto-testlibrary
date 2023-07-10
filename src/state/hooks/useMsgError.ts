import { useRecoilValue } from 'recoil';
import { errorState } from '../atom';

export const useMsgError = () => {
  const message = useRecoilValue(errorState);
  return message;
};
