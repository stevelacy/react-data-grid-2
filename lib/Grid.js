import { __extends } from "tslib";
import React from 'react';
import { isValidElementType } from 'react-is';
import Header from './Header';
import Viewport from './Viewport';
import { isFrozen } from './ColumnUtils';
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.header = React.createRef();
        _this.viewport = React.createRef();
        _this._scrollLeft = undefined;
        _this.onScroll = function (scrollState) {
            if (_this.props.onScroll) {
                _this.props.onScroll(scrollState);
            }
            var scrollLeft = scrollState.scrollLeft;
            if (_this._scrollLeft !== scrollLeft || _this.areFrozenColumnsScrolledLeft(scrollLeft)) {
                _this._scrollLeft = scrollLeft;
                _this._onScroll();
            }
        };
        return _this;
    }
    Grid.prototype._onScroll = function () {
        if (this._scrollLeft !== undefined) {
            this.header.current.setScrollLeft(this._scrollLeft);
            if (this.viewport.current) {
                this.viewport.current.setScrollLeft(this._scrollLeft);
            }
        }
    };
    Grid.prototype.areFrozenColumnsScrolledLeft = function (scrollLeft) {
        return scrollLeft > 0 && this.props.columnMetrics.columns.some(function (c) { return isFrozen(c); });
    };
    Grid.prototype.componentDidMount = function () {
        this._scrollLeft = this.viewport.current ? this.viewport.current.getScroll().scrollLeft : 0;
        this._onScroll();
    };
    Grid.prototype.UNSAFE_componentDidUpdate = function () {
        this._onScroll();
    };
    Grid.prototype.render = function () {
        var headerRows = this.props.headerRows;
        var EmptyRowsView = this.props.emptyRowsView;
        return (React.createElement("div", { className: "react-grid-Grid", style: { minHeight: this.props.minHeight } },
            React.createElement(Header, { ref: this.header, columnMetrics: this.props.columnMetrics, onColumnResize: this.props.onColumnResize, rowHeight: this.props.rowHeight, totalWidth: this.props.totalWidth, headerRows: headerRows, sortColumn: this.props.sortColumn, sortDirection: this.props.sortDirection, draggableHeaderCell: this.props.draggableHeaderCell, onSort: this.props.onSort, onHeaderDrop: this.props.onHeaderDrop, getValidFilterValues: this.props.getValidFilterValues, cellMetaData: this.props.cellMetaData, sortHandlePosition: this.props.sortHandlePosition }),
            this.props.rowsCount === 0 && isValidElementType(EmptyRowsView) ? (React.createElement("div", { className: "react-grid-Empty" },
                React.createElement(EmptyRowsView, null))) : (React.createElement("div", { onKeyDown: this.props.onViewportKeydown, onKeyUp: this.props.onViewportKeyup },
                React.createElement(Viewport, { ref: this.viewport, rowKey: this.props.rowKey, rowHeight: this.props.rowHeight, rowRenderer: this.props.rowRenderer, rowGetter: this.props.rowGetter, rowsCount: this.props.rowsCount, selectedRows: this.props.selectedRows, columnMetrics: this.props.columnMetrics, totalWidth: this.props.totalWidth, onScroll: this.onScroll, cellMetaData: this.props.cellMetaData, rowOffsetHeight: this.props.rowOffsetHeight || this.props.rowHeight * headerRows.length, minHeight: this.props.minHeight, scrollToRowIndex: this.props.scrollToRowIndex, contextMenu: this.props.contextMenu, rowSelection: this.props.rowSelection, getSubRowDetails: this.props.getSubRowDetails, rowGroupRenderer: this.props.rowGroupRenderer, enableCellSelect: this.props.enableCellSelect, enableCellAutoFocus: this.props.enableCellAutoFocus, cellNavigationMode: this.props.cellNavigationMode, eventBus: this.props.eventBus, interactionMasksMetaData: this.props.interactionMasksMetaData, RowsContainer: this.props.RowsContainer, editorPortalTarget: this.props.editorPortalTarget })))));
    };
    Grid.displayName = 'Grid';
    return Grid;
}(React.Component));
export default Grid;
//# sourceMappingURL=Grid.js.map