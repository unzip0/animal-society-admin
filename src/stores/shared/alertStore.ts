import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAlertStore = defineStore('alert', () => {
    const isVisible = ref(false);
    const title = ref('');
    const message = ref('');
    const icon = ref('');
    const color = ref('');

    const openAlert = (
        alertTitle: string,
        alertMessage: string, 
        alertIcon: string,
        alertColor: string,
    ) => {
        title.value = alertTitle;
        message.value = alertMessage;
        icon.value = alertIcon;
        color.value = alertColor;
        isVisible.value = true;
        console.log('Alert state:', { isVisible: isVisible.value, title: title.value, message: message.value, color: color.value, icon: icon.value });

    };

    const closeAlert = () => {
        isVisible.value = false;
    };

    return {
        isVisible,
        title,
        message,
        icon,
        color,
        openAlert,
        closeAlert,
    };
});