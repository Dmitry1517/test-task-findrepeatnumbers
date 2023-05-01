class FindRepeatNumbers {
  constructor(n, arr) {
    this.n = n;
    this.arr = arr;
    this.getRepeatNum();
    this.render();
  }

  getRepeatNum() {
    if (this.arr.length == this.n + 2) {
      let arrFiltered = this.arr.filter(item => item >= 1 && item <= this.n);
      this.count = arrFiltered.reduce((acc, i) => {
        if (acc.hasOwnProperty(i)) acc[i] += 1;
        else acc[i] = 1;
        return acc;
      }, {})
      return this.count;
    }
  }

  render() {                               
		let table = document.querySelector('[data-table]');
		let tableInner = Object.entries(this.count).map((item) => `
      <tr>
				<td class="table__td">${item[0]}</td>
				<td class="table__td">${item[1]}</td>
			</tr>
		`).join('');

		table.innerHTML = `
      <table class="table">
        <thead class="table__head">
          <tr>
            <td class="table__td">Число</td>
            <td class="table__td">Количество повторений <br> в массиве</td>
          </tr>
        </thead>
        <tbody>
          ${tableInner}
        </tbody>
      </table>
		`
	}
}

let exemple = new FindRepeatNumbers(10, [3, 5, 89, 4, 5, 4, 5, 7, 9, 9, 7, 100]);
