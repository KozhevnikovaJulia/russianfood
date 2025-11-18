'use client';
import { Modal, ModalContent, ModalHeader, ModalBody } from '@heroui/react';
import { ReactNode } from 'react';

type IPropsType = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const CustomModal = ({ isOpen, onClose, title, children, size }: IPropsType) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalContent>
        <ModalHeader className='border-b border-b-gray-100'>
          <h3 className='text-xl text-background font-semibolt'>{title}</h3>
        </ModalHeader>
        <ModalBody className='space-y-4 py-6'>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
