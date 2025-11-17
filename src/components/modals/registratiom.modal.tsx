'use client';
import { RegistrationForm } from '../../forms/registration.form';
import { CustomModal } from '../common/modal';

type IPropsType = {
  isOpen: boolean;
  onClose: () => void;
};

export const RegistrationModal = ({ isOpen, onClose }: IPropsType) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title={'Создать аккуант'} size={'sm'}>
      <RegistrationForm onClose={onClose} />
    </CustomModal>
  );
};
