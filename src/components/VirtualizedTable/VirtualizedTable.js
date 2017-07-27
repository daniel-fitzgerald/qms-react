import React, { Component } from 'react'

import { Table, WindowScroller, AutoSizer, Column } from 'react-virtualized'

import './virtualized-table.css'

class VirtualizedTable extends Component {
    state = {

    }

    cellRenderer = ({ dataKey, rowData }) => <span>{rowData[dataKey]}</span>

    render() {
        const { data, config, noResultsMessage } = this.props

        return data.length > 0 ? <WindowScroller>
            {({ height, isScrolling, onChildScroll, scrollTop }) => (
                <AutoSizer disableHeight>
                    {({ width }) => (
                        <Table
                            autoHeight
                            width={width}
                            height={height}
                            isScrolling={isScrolling}
                            onScroll={onChildScroll}
                            rowCount={data.length}
                            rowHeight={28}
                            headerHeight={28}
                            scrollTop={scrollTop}
                            rowGetter={({ index }) => data[index]}
                        >
                            {config.map(({label, dataKey, cellRenderer}, index) => <Column key={index} label={label} dataKey={dataKey} width={200} flexGrow={1} cellRenderer={cellRenderer} />)}
                            
                        </Table>
                    )}
                </AutoSizer>
            )}
        </WindowScroller> : <span>{noResultsMessage}</span>
    }
}

export default VirtualizedTable