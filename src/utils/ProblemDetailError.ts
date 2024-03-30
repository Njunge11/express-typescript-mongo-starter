export class ProblemDetailError extends Error {
  public readonly status: number;
  public readonly type: string;
  public readonly title: string;
  public readonly detail: string;
  public readonly instance?: string;

  constructor(status: number, type: string, title: string, detail: string, instance?: string) {
    super(detail);
    this.status = status;
    this.type = type;
    this.title = title;
    this.detail = detail;
    this.instance = instance;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
