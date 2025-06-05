import { createConsumer } from "@rails/actioncable";

let cable = null;

const WS_URL = import.meta.env.VITE_WS_URL;

export function connectCable(token) {
    if (!cable) {
        cable = createConsumer(`${WS_URL}?token=${token}`);
    }
    return cable;
}

export function disconnectCable() {
    if (cable) {
        cable.disconnect();
        cable = null;
    }
}
