interface QueueItem {
  from: string;
  to: string;
  start: number;
  end: number;
  char?: string;
}

export class TextScrambleAnimation {
  private frame: number;
  private queue: QueueItem[];
  private frameRequest?: number;
  private lastDraw: number;
  private fpsInterval: number;

  constructor(
    protected el: HTMLElement,
    protected chars = "!<>_/[](){}:—=+*^?#%$",
    fps = 50,
  ) {
    this.fpsInterval = 1000 / fps;
    this.frame = 0;
    this.queue = [];
    this.lastDraw = 0;
    this.update = this.update.bind(this);
  }

  public cancel(): void {
    if (this.frameRequest !== undefined) {
      cancelAnimationFrame(this.frameRequest);
    }
    this.frameRequest = undefined;
    this.lastDraw = 0;
    this.frame = 0;
  }

  public setText(newText: string): Promise<void> {
    if (newText == null) return Promise.resolve();
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    return new Promise((resolve) => {
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      this.cancel();
      this.update(resolve);
    });
  }

  private update(resolve: () => void) {
    const now = Date.now();
    const elapsed = now - this.lastDraw;
    if (this.lastDraw !== 0 && elapsed <= this.fpsInterval) {
      // Not yet time to draw
      this.frameRequest = requestAnimationFrame(() => this.update(resolve));
      return;
    }

    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      const { from, to, start, end, char } = this.queue[i];
      let character = char;
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!character || Math.random() < 0.28) {
          character = this.randomChar();
          this.queue[i].char = character;
        }
        output += character;
      } else {
        output += from;
      }
    }
    this.el.innerText = output;
    if (complete === this.queue.length) {
      this.queue = [];
      this.frameRequest = undefined;
      this.lastDraw = 0;
      this.frame = 0;
      resolve();
    } else {
      this.lastDraw = now - (elapsed % this.fpsInterval);
      this.frameRequest = requestAnimationFrame(() => this.update(resolve));
      this.frame++;
    }
  }

  private randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}
