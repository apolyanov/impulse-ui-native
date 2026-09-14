import type {
  OverlayController,
  OverlayEntry,
  OverlayID,
  OverlayListener,
  OverlayOpenArguments,
  OverlayRegistrationProps,
} from "../types";

export class OverlayStore {
  private readonly listeners = new Set<OverlayListener>();
  private readonly entries = new Map<OverlayID, OverlayEntry>();
  private snapshot: readonly OverlayEntry[] = [];
  private registrationCount = 0;

  subscribeOverlays() {
    return (listener: OverlayListener) => {
      this.listeners.add(listener);

      return () => {
        this.listeners.delete(listener);
      };
    };
  }

  getOverlaysSnapshot() {
    return () => this.snapshot;
  }

  open(entry: OverlayEntry) {
    if (this.entries.has(entry.id)) {
      return;
    }

    this.entries.set(entry.id, entry);
    this.emitChange();
  }

  close(id: OverlayID) {
    const entry = this.entries.get(id);

    if (!entry?.open) {
      return;
    }

    this.entries.set(id, {
      ...entry,
      open: false,
    });

    this.emitChange();
  }

  remove(id: OverlayID) {
    if (!this.entries.delete(id)) {
      return;
    }

    this.emitChange();
  }

  register<Props extends object = never>(
    registration: OverlayRegistrationProps<Props>,
  ): OverlayController<Props> {
    const id = this.resolveRegistrationID(registration.id, registration.unique);

    return this.createController(id, registration);
  }

  private emitChange() {
    this.snapshot = Array.from(this.entries.values());
    this.listeners.forEach((listener) => listener());
  }

  private resolveRegistrationID(id: OverlayID, unique?: boolean) {
    if (unique) {
      return id;
    }

    return `${id}-${++this.registrationCount}`;
  }

  private createController<Props extends object>(
    id: OverlayID,
    registration: OverlayRegistrationProps<Props>,
  ): OverlayController<Props> {
    const open = (...args: OverlayOpenArguments<Props>) => {
      this.open(this.createEntry(id, registration, args));

      return id;
    };

    return {
      open,
      close: () => {
        this.close(id);
      },
    };
  }

  private createEntry<Props extends object>(
    id: OverlayID,
    registration: OverlayRegistrationProps<Props>,
    args: OverlayOpenArguments<Props>,
  ): OverlayEntry {
    return {
      id,
      open: true,
      Component: registration.Component,
      Content: registration.Content,
      contentProps: args[0],
      title: this.resolveTitle(registration.title, args),
      onOpen: registration.onOpen,
      onOpenFinished: registration.onOpenFinished,
      onClose: registration.onClose,
      onCloseFinished: registration.onCloseFinished,
    };
  }

  private resolveTitle<Props extends object>(
    title: OverlayRegistrationProps<Props>["title"],
    args: OverlayOpenArguments<Props>,
  ) {
    return typeof title === "function" ? title(...args) : title;
  }
}
