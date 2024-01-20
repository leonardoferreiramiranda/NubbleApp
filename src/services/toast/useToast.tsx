import {ToastService} from './toastTypes';
import {useToastContext} from './useToastContext';

export function useToast(): ToastService['toast'] {
  const {toast} = useToastContext();
  return toast;
}

export function useToastService(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  const {showToast, hideToast} = useToastContext();
  return {
    showToast,
    hideToast,
  };
}
