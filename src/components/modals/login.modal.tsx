'use client';
import { LoginForm } from '../../forms/login.form';
import { CustomModal } from '../common/modal';

type IPropsType = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal = ({ isOpen, onClose }: IPropsType) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title={'Авторизация'} size={'sm'}>
      <LoginForm onClose={onClose} />
    </CustomModal>
  );
};
