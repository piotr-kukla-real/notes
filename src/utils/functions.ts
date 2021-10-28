export const closeDialog: CloseDialog = (e, reason) => {
  if (reason === 'backdropClick' || window.location.pathname === '/') {
    return;
  }
  window.history.back();
};

interface CloseDialog {
  (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | {},
    reason?: 'backdropClick' | 'escapeKeyDown',
  ): void;
}
