import React, { Component } from 'react'

import { Table, WindowScroller, AutoSizer, Column } from 'react-virtualized'

import './virtualized-table.css'

class VirtualizedTable extends Component {
    state = {

    }

    cellRenderer = ({ dataKey, rowData }) => <span>{rowData[dataKey]}</span>

    render() {
        const { data, config } = this.props

        return <WindowScroller>
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
                            {config.map(({label, dataKey}, index) => <Column key={index} label={label} dataKey={dataKey} width={200} flexGrow={1} cellRenderer={this.cellRenderer} />)}
                            
                        </Table>
                    )}
                </AutoSizer>
            )}
        </WindowScroller>
    }
}

export default VirtualizedTable