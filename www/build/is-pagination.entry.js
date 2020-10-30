import { r as registerInstance, e as createEvent, h, f as Host } from './index-9699d743.js';

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}
const toInteger = (value, defaultValue = NaN) => {
    const integer = parseInt(value, 10);
    return isNaN(integer) ? defaultValue : integer;
};

const paginationCss = ":host{display:block;cursor:default}:host .pagination{display:inline-block;list-style-type:none;margin:0;padding:0}:host .pagination li{color:black;float:left;padding:8px 16px;border:1px solid #ddd}:host .pagination li.active.primary{color:white;background-color:#327bb7;border:1px solid #327bb7}:host .pagination li.active.secondary{color:white;background-color:#ff7d09;border:1px solid #ff7d09}:host .pagination li.active.success{color:white;background-color:#00c092;border:1px solid #00c092}:host .pagination li.active.warning{color:white;background-color:#e8d700;border:1px solid #e8d700}:host .pagination li.active.error{color:white;background-color:#d0021b;border:1px solid #d0021b}:host .pagination li.active.light{color:black;background-color:#e5e5e5;border:1px solid #e5e5e5}:host .pagination li.active.info{color:black;background-color:#b9b9b9;border:1px solid #b9b9b9}:host .pagination li.active.dark{color:white;background-color:#5d5d5d;border:1px solid #5d5d5d}:host .pagination li.active.white{color:black;background-color:white;border:1px solid white}:host .pagination li.active.black{color:white;background-color:black;border:1px solid black}:host .pagination li:hover:not(.active){background-color:#ddd}:host .pagination li:first-child{border-top-left-radius:5px;border-bottom-left-radius:5px}:host .pagination li:last-child{border-top-right-radius:5px;border-bottom-right-radius:5px}";

const Pagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.changePage = createEvent(this, "changePage", 7);
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
};
Pagination.style = paginationCss;

export { Pagination as is_pagination };
