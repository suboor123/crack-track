import * as Yup from 'yup';
import { INVALID_EMAIL, MAX_LENGTH, MIN_LENGTH, REQUIRED_FIELD } from './ValidationConstants';

export const Validation = {
    requiredString: Yup.string().required(REQUIRED_FIELD),
    email: Yup.string().required(REQUIRED_FIELD).email(INVALID_EMAIL),
    password: Yup.string().required(REQUIRED_FIELD).min(8, MIN_LENGTH).max(20, MAX_LENGTH),
    stringNotRequired:  Yup.string().min(8, MIN_LENGTH).max(50, MAX_LENGTH)
}