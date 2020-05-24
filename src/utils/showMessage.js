import { message } from "antd";

const showMessage = (type, messText, time, options) => {
  message.destroy();
  if (options) message.config({ ...options });
  message[type](messText, time);
};

export default showMessage;
