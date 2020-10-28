import { r as registerInstance, h, c as createEvent, H as Host } from './core-b4d71f8d.js';

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}
const toInteger = (value, defaultValue = NaN) => {
    const integer = parseInt(value, 10);
    return isNaN(integer) ? defaultValue : integer;
};

const Pagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.DEFAULT_PER_PAGE = 10;
        this.DEFAULT_TOTAL_ROWS = 0;
        this.localNumberOfPages = 1;
        /**
         * The color options are: `"primary"`, `"secondary"`, `"success"`, `"warning"`, `"error"`, `"light"`, `"info"`, `"white"`, `"black"`, and `"dark"`.
         */
        this.color = 'success';
        /**
         * Total number of rows in the dataset
         */
        this.totalRows = this.DEFAULT_TOTAL_ROWS;
        /**
         * Number of rows per page
         */
        this.perPage = this.DEFAULT_PER_PAGE;
        /**
         * Current page number, starting from 1
         */
        this.currentPage = this.localNumberOfPages;
        this.list = null;
        // Sanitize the provided per page number (converting to a number)
        this.sanitizePerPage = (val) => Math.max(toInteger(val.toString()) || this.DEFAULT_PER_PAGE, 1);
        // Sanitize the provided total rows number (converting to a number)
        this.sanitizeTotalRows = (val) => Math.max(toInteger(val.toString()) || this.DEFAULT_TOTAL_ROWS, 0);
        this.first = (evt) => {
            if (this.currentPage !== 1) {
                this.onChangePage(evt, 1);
            }
        };
        this.prev = (evt) => {
            if (this.currentPage > 1) {
                let page = Number(this.currentPage);
                page--;
                this.onChangePage(evt, page);
            }
        };
        this.next = (evt) => {
            if (this.currentPage < this.localNumberOfPages) {
                let page = Number(this.currentPage);
                page++;
                this.onChangePage(evt, page);
            }
        };
        this.last = (evt) => {
            if (this.currentPage !== this.localNumberOfPages) {
                this.onChangePage(evt, this.localNumberOfPages);
            }
        };
        this.renderPagination = () => {
            // Emit event triggered by user interaction
            this.changePage.emit(this.currentPage);
            const list = [];
            for (let i = 0; i < this.localNumberOfPages; i++) {
                list.push(h("li", { onClick: (e) => this.onChangePage(e, i + 1), class: {
                        [this.color + ' active']: this.currentPage === i + 1
                    } }, i + 1));
            }
            this.list = list;
        };
        this.changePage = createEvent(this, "changePage", 7);
    }
    numberOfPages() {
        const result = Math.ceil(this.sanitizeTotalRows(this.totalRows) / this.sanitizePerPage(this.perPage));
        this.localNumberOfPages = result < 1 ? 1 : result;
        this.currentPage = 1;
        this.renderPagination();
    }
    componentWillLoad() {
        var _a;
        // Set the initial page count
        this.numberOfPages();
        // Set the initial page value
        const currentPage = toInteger((_a = this.currentPage) === null || _a === void 0 ? void 0 : _a.toString(), 0);
        if (currentPage > 0) {
            this.currentPage = currentPage;
        }
        else {
            // If this value parses to `NaN` or a value less than `1`
            // trigger an initial emit of `null` if no page specified
            this.currentPage = 0;
        }
    }
    onChangePage(evt, pageNumber) {
        // Dont do anything if clicking the current active page
        if (pageNumber === this.currentPage) {
            return;
        }
        if (evt.defaultPrevented) {
            return;
        }
        // Update the `v-model`
        this.currentPage = pageNumber;
        this.renderPagination();
    }
    render() {
        return (h(Host, null, h("ul", { class: "pagination" }, h("li", { onClick: (e) => this.first(e) }, "\u00AB"), h("li", { onClick: (e) => this.prev(e) }, "\u2039"), this.list, h("li", { onClick: (e) => this.next(e) }, "\u203A"), h("li", { onClick: (e) => this.last(e) }, "\u00BB"))));
    }
    static get watchers() { return {
        "totalRows": ["numberOfPages"],
        "perPage": ["numberOfPages"]
    }; }
    static get style() { return ":host {\n  /**\n     * \@prop --background-color: Active page background color\n     */\n  display: block;\n  cursor: default;\n}\n:host .pagination {\n  display: inline-block;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n:host .pagination li {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  border: 1px solid #ddd;\n}\n:host .pagination li.active.primary {\n  color: white;\n  background-color: #327bb7;\n  border: 1px solid #327bb7;\n}\n:host .pagination li.active.secondary {\n  color: white;\n  background-color: #ff7d09;\n  border: 1px solid #ff7d09;\n}\n:host .pagination li.active.success {\n  color: white;\n  background-color: #00c092;\n  border: 1px solid #00c092;\n}\n:host .pagination li.active.warning {\n  color: white;\n  background-color: #e8d700;\n  border: 1px solid #e8d700;\n}\n:host .pagination li.active.error {\n  color: white;\n  background-color: #d0021b;\n  border: 1px solid #d0021b;\n}\n:host .pagination li.active.light {\n  color: black;\n  background-color: #e5e5e5;\n  border: 1px solid #e5e5e5;\n}\n:host .pagination li.active.info {\n  color: black;\n  background-color: #b9b9b9;\n  border: 1px solid #b9b9b9;\n}\n:host .pagination li.active.dark {\n  color: white;\n  background-color: #5d5d5d;\n  border: 1px solid #5d5d5d;\n}\n:host .pagination li.active.white {\n  color: black;\n  background-color: white;\n  border: 1px solid white;\n}\n:host .pagination li.active.black {\n  color: white;\n  background-color: black;\n  border: 1px solid black;\n}\n:host .pagination li:hover:not(.active) {\n  background-color: #ddd;\n}\n:host .pagination li:first-child {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n:host .pagination li:last-child {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}"; }
};

export { Pagination as is_pagination };
