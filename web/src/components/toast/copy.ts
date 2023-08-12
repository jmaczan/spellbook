import toast from 'react-hot-toast';

export const onCopy = () =>
  toast('Copied to clipboard!', {
    icon: '👏',
    style: {
      background: '#333',
      color: '#fff',
    },
  });
