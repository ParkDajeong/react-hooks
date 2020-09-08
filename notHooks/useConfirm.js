const useConfirm = (messege = "", onConfirm, onCancel) => {
  if (!onConfirm && typeof onConfirm !== "function") return;
  if (onCancel && typeof onCancel !== "function") return;

  const confirmAction = () => {
    if (confirm(messege)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

// const deleteWorld = () => console.log("Deleting the world...");
// const abort = () => console.log("Aborted");
// const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
// <button onClick={confirmDelete}>Delete the world</button>;
