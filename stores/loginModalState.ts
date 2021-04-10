import { atom } from 'recoil';

const loginModalState = atom({
  key: 'loginModalState',
  default: false,
});

export default loginModalState;
