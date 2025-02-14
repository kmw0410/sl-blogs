export class PromiseByBatches {
  private readonly promises: Promise<void>[] = [];
  private batchSize;

  constructor(batchSize: number) {
    this.batchSize = batchSize;
  }

  async add(promise: Promise<void> | (() => Promise<void>)) {
    if (this.promises.length >= this.batchSize) {
      await this.flush();
    }
    if (typeof promise === "function") {
      promise = promise();
    }
    this.promises.unshift(promise);
  }

  async flush() {
    await Promise.all(this.promises);
    this.promises.length = 0;
  }
}
