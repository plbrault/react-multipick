import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

import {
    Dropdown,
    DropdownList,
    DropdownItem,
    DropdownActionBar,
    DropdownAction,
    DropdownSearch,
} from './styles';

export default class MultipickDropdown extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        values: PropTypes.array.isRequired,
        filteredData: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired,
        searchAppearsAfterCount: PropTypes.number.isRequired,
        searchValue: PropTypes.string.isRequired,
        onSearchChange: PropTypes.func.isRequired,
        searchPlaceholder: PropTypes.string,
        autofocusSearch: PropTypes.bool,
        selectAllText: PropTypes.string,
        selectNoneText: PropTypes.string,
    };

    static defaultProps = {
        searchValue: '',
    };

    handleItemChange = e => {
        const value = e.currentTarget.value;
        const checked = e.currentTarget.checked;
        const values = this.props.values.slice();
        const valueIndex = values.indexOf(value);
        if (valueIndex >= 0) {
            if (!checked) {
                values.splice(valueIndex, 1);
            }
        } else if (checked) {
            values.push(value);
        }
        this.props.onChange(values);
    };

    handleSearchChange = e => {
        this.props.onSearchChange(e.currentTarget.value);
    };

    selectAll = () => {
        this.props.onChange(this.props.data.map(item => item.value));
    };

    selectNone = () => {
        this.props.onChange([]);
    };

    renderItem = item => {
        const checked = this.props.values.indexOf(item.value) >= 0;
        return (
            <DropdownItem key={item.value} checked={checked}>
                <Checkbox
                    checked={checked}
                    onChange={this.handleItemChange}
                    value={item.value}
                >
                    {item.label}
                </Checkbox>
            </DropdownItem>
        );
    };

    renderSearch = () => {
        const { autofocusSearch, searchValue, searchPlaceholder } = this.props;
        return (
            <DropdownSearch
                type="search"
                autoFocus={autofocusSearch}
                value={searchValue}
                onChange={this.handleSearchChange}
                placeholder={searchPlaceholder}
            />
        );
    };

    render() {
        const {
            data,
            selectAllText,
            selectNoneText,
            searchAppearsAfterCount,
        } = this.props;
        return (
            <Dropdown>
                {data.length >= searchAppearsAfterCount
                    ? this.renderSearch()
                    : null}
                <DropdownActionBar>
                    <DropdownAction bsStyle="primary" onClick={this.selectAll}>
                        {selectAllText}
                    </DropdownAction>
                    <DropdownAction bsStyle="default" onClick={this.selectNone}>
                        {selectNoneText}
                    </DropdownAction>
                </DropdownActionBar>
                <DropdownList>
                    {this.props.filteredData.map(this.renderItem)}
                </DropdownList>
            </Dropdown>
        );
    }
}
