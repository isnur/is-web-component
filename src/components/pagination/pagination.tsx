import { Component, Host, h, Prop, Watch, EventEmitter, Event, State } from '@stencil/core';
import { toInteger } from '../../utils/utils';

@Component({
  tag: 'is-pagination',
  styleUrl: 'pagination.scss',
  shadow: true
})
export class Pagination {
  private DEFAULT_PER_PAGE = 10;
  private DEFAULT_TOTAL_ROWS = 0;
  private localNumberOfPages = 1;

  /**
   * The color options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"light"`, `"info"`, `"white"`, `"black"`, and `"dark"`.
   */
  @Prop() color?: string = 'success';

  /**
   * Total number of rows in the dataset
   */
  @Prop() totalRows: number | string = this.DEFAULT_TOTAL_ROWS;

  /**
   * Number of rows per page
   */
  @Prop() perPage: number | string = this.DEFAULT_PER_PAGE;

  /**
   * Current page number, starting from 1
   */
  @Prop() currentPage: number | string = this.localNumberOfPages;

  @State() list = null;

  // Sanitize the provided per page number (converting to a number)
  private sanitizePerPage = (val: string | number) => Math.max(toInteger(val.toString()) || this.DEFAULT_PER_PAGE, 1);
  
  // Sanitize the provided total rows number (converting to a number)
  private sanitizeTotalRows = (val: string | number) => Math.max(toInteger(val.toString()) || this.DEFAULT_TOTAL_ROWS, 0);

  @Watch('totalRows')
  @Watch('perPage')
  numberOfPages() {
    const result = Math.ceil(this.sanitizeTotalRows(this.totalRows) / this.sanitizePerPage(this.perPage));
    this.localNumberOfPages = result < 1 ? 1 : result;
    this.currentPage = 1;
    this.renderPagination();
  }

  /**
   * Emitted when the page is changed.
   */
  @Event() changePage: EventEmitter;

  componentWillLoad() {
    // Set the initial page count
    this.numberOfPages();
    // Set the initial page value
    const currentPage = toInteger(this.currentPage?.toString(), 0);
    if (currentPage > 0) {
      this.currentPage = currentPage;
    } else {
      // If this value parses to `NaN` or a value less than `1`
      // trigger an initial emit of `null` if no page specified
      this.currentPage = 0
    }
  }

  private first = (evt: MouseEvent | TouchEvent) => {
    if (this.currentPage !== 1) {
      this.onChangePage(evt, 1);
    }
  }

  private prev = (evt: MouseEvent | TouchEvent) => {
    if (this.currentPage > 1) {
      let page = Number(this.currentPage);
      page--;
      this.onChangePage(evt, page);
    }
  }

  private next = (evt: MouseEvent | TouchEvent) => {
    if (this.currentPage < this.localNumberOfPages) {
      let page = Number(this.currentPage);
      page++;
      this.onChangePage(evt, page);
    }
  }

  private last = (evt: MouseEvent | TouchEvent) => {
    if (this.currentPage !== this.localNumberOfPages) {
      this.onChangePage(evt, this.localNumberOfPages);
    }
  }

  private onChangePage(evt: MouseEvent | TouchEvent, pageNumber: string | number) {
    // Dont do anything if clicking the current active page
    if (pageNumber === this.currentPage) {
      return
    }

    if (evt.defaultPrevented) {
      return
    }

    // Update the `v-model`
    this.currentPage = pageNumber
    this.renderPagination();
  }

  private renderPagination = () => {
    // Emit event triggered by user interaction
    this.changePage.emit(this.currentPage);
    const list = [];
    for(let i = 0; i < this.localNumberOfPages; i++) {
      list.push(
        <li
          onClick={(e) => this.onChangePage(e, i + 1)}
          class={{
            [this.color + ' active']: this.currentPage === i + 1
          }}
        >{i + 1}
        </li>
      );
    }
    this.list = list;
  }

  render() {
    return (
      <Host>
        <ul class="pagination">
          <li onClick={(e) => this.first(e)}>&laquo;</li>
          <li onClick={(e) => this.prev(e)}>&lsaquo;</li>
          {this.list}
          <li onClick={(e) => this.next(e)}>&rsaquo;</li>
          <li onClick={(e) => this.last(e)}>&raquo;</li>
        </ul>
      </Host>
    );
  }

}
