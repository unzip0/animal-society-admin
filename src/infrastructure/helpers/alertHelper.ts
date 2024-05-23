import { useAlertStore } from '../../stores/shared/alertStore';

export const showAlert = (
  title: string,
  message: string,
  icon: string,
  color: string
) => {
  const alertStore = useAlertStore();
  alertStore.openAlert(title, message, icon, color);
};