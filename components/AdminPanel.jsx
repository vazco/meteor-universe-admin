import {Menu} from 'meteor/universe:ui-react-menu';
import {Column, Grid} from 'meteor/universe:ui-react';
import React from 'react';
import AdminMenu from '../lib/AdminMenu';

export const AdminPanel = React.createClass({
    displayName: 'AdminPanel',

    render () {
        return (
            <Grid>
                <Column wide="four">
                    <Menu className="vertical fluid"
                          active={this.getActive()}
                          collapse={true}
                          topLevel={true}
                          {...AdminMenu.export()}/>
                </Column>

                <Column wide="twelve">
                    {this.renderView()}
                </Column>
            </Grid>
        );
    },

    renderView () {
        const active = this.getActive();

        let root = AdminMenu.export();
        let last;

        while (root && root.items) {
            let next = root.items.filter(({link}) => active.indexOf(link) === 0)[0];
            if (next) {
                root = next;

                if (next.view) {
                    last = next;
                }

                continue;
            }

            break;
        }

        if (last && last.view) {
            if (React.isValidElement(last.view)) {
                return last.view;
            }

            return React.createElement(last.view, this.props);
        }

        return false;
    },

    getActive () {
        if (this.props.prefix) {
            return `${this.props.prefix}/${this.props.view}`;
        }

        return this.props.view;
    }
});

export default AdminPanel;
