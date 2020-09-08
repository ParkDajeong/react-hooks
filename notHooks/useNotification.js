const useNotification = (title, options) => {
  if (!("Notifidation" in window)) return;

  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNotification;
};

// 관련 내용은 MDN 참고
// const triggerNotif = useNotification("Can i love you?", {
//   body: "I love you so much"
// });
