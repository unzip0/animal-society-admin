import { useAlertStore } from '../../stores/shared/alertStore';

export const showAlert = (
  title: string,
  message: string,
  icon: string,
  color: string
) => {
  const alertStore = useAlertStore();
  console.log('Opening alert with:', { title, message, icon, color });
  alertStore.openAlert(title, message, icon, color);
  console.log('opened');
};