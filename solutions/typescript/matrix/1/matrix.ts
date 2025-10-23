export class Matrix {
  private _rows: number[][];

  constructor(matrixString: string) {
    this._rows = matrixString
      .trim()
      .split('\n')
      .map(line => line.split(' ').map(Number));
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._rows[0].map((_, i) => this._rows.map(row => row[i]));
  }
}