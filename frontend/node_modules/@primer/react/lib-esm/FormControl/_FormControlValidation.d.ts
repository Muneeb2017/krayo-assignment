import React from 'react';
import { SxProp } from '../sx';
import { FormValidationStatus } from '../utils/types/FormValidationStatus';
export type FormControlValidationProps = {
    variant: FormValidationStatus;
    id?: string;
} & SxProp;
declare const FormControlValidation: React.FC<React.PropsWithChildren<FormControlValidationProps>>;
export default FormControlValidation;
