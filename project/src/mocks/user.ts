import {datatype, internet} from 'faker';
import {UserType} from '../types/offers';

const makeFakeUser = (): UserType => ({
  id: datatype.number(),
  isPro: datatype.boolean(),
  name: internet.userName(),
  avatarUrl: internet.avatar(),
  token: datatype.string(),
  email: internet.email(),
});

export default makeFakeUser;
