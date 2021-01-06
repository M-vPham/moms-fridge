import React from 'react';

import { Menu, Segment } from 'semantic-ui-react';
import { useHistory } from 'react-router';
import { Link, withRouter } from 'react-router-dom';

const MenuBar = () => {
    const history = useHistory();
    return (
      <div className="menu">
        <Segment inverted>
            <Menu inverted secondary>
                <Link to="/">
                    <Menu.Item>
                        All Recipes
                    </Menu.Item>
                </Link>
                <Link to="/gallery">
                    <Menu.Item>
                        Gallery
                    </Menu.Item>
                </Link>
                <Link to="/searchRecipes">
                    <Menu.Item>
                        Open Mom's Fridge
                    </Menu.Item>
                </Link>
                <Link to="/aboutUs">
                    <Menu.Item>
                        About Us
                    </Menu.Item>
                </Link>
            </Menu>
        </Segment>
        </div>
    );
}

export default MenuBar;