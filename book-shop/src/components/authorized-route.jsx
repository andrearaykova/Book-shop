import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserConsumer } from './contexs/user-contex';

const AuthorizedRoute = ({ isLoggedIn, allowedRoles = [], roles, ...otherProps }) => {
const roleIsAllowed = (!allowedRoles.length) || (roles.map(role => role.toLowerCase()).some(role => allowedRoles.includes(role)));

    if (!isLoggedIn || !roleIsAllowed) {
        return <Redirect to="/login" />;
    }
    return <Route {...otherProps} />;

}

const AuthorizedRouteWithContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ isLoggedIn, roles }) => (
                    <AuthorizedRoute {...props} roles={roles} isLoggedIn={isLoggedIn} />
                )
            }
        </UserConsumer>
    )
}
/* to be reusable */
export { AuthorizedRoute }
export default AuthorizedRouteWithContext;