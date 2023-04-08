import React, { useState } from 'react';

interface ConfirmationDialogProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

type ConfirmationState = {
  message: string;
  resolve: (value: boolean) => void;
};
const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white rounded-lg p-4'>
        <div className='text-lg font-medium mb-2'>{message}</div>
        <div className='flex justify-end'>
          <button className='bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-2' onClick={onCancel}>
            취소
          </button>
          <button
            className='bg-red-500 hover:bg-red-600 text-white font-medium rounded-md px-3 py-2 select-none'
            onClick={onConfirm}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

const useConfirmation = (): [JSX.Element | null, (message: string) => Promise<boolean>] => {
  const [confirmation, setConfirmation] = useState<ConfirmationState | null>(null);

  const confirm = (message: string): Promise<boolean> =>
    new Promise(resolve => {
      setConfirmation({
        message,
        resolve,
      });
    });

  const handleConfirm = (): void => {
    confirmation?.resolve(true);
    setConfirmation(null);
  };

  const handleCancel = (): void => {
    confirmation?.resolve(false);
    setConfirmation(null);
  };

  const Confirmation = confirmation && (
    <ConfirmationDialog message={confirmation.message} onConfirm={handleConfirm} onCancel={handleCancel} />
  );

  return [Confirmation, confirm];
};

export default useConfirmation;
