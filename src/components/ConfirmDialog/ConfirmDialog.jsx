import * as Dialog from '@radix-ui/react-dialog';

export function ConfirmDialog({ open, onOpenChange, title, description, onConfirm }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-[24px] border border-white/10 bg-slate-950 p-6 shadow-2xl">
            <Dialog.Title className="text-lg font-semibold text-white">{title}</Dialog.Title>
            <p className="mt-2 text-sm text-slate-400">{description}</p>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => onOpenChange(false)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">Cancel</button>
              <button onClick={onConfirm} className="rounded-2xl bg-rose-500 px-4 py-2 text-sm font-medium text-white">Confirm</button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
