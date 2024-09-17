import { NavLink } from 'react-router-dom'

export const Navigation = () => {
    return (
        <nav className="navigation-header">
            <div className="app-logo"></div>
            <NavLink
                end
                className={({ isActive, isPending }) =>
                    isActive ?
                        "menu-item menu-item__active"
                        : "menu-item"
                }
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive, isPending }) =>
                    isActive ?
                        "menu-item menu-item__active"
                        : "menu-item"
                }
                to="/settings"
            >
                Settings
            </NavLink>
            <NavLink
                end
                className={({ isActive, isPending }) =>
                    isActive ?
                        "menu-item menu-item__active"
                        : "menu-item"
                }
                to="/users"
            >
                Users
            </NavLink>
        </nav>
    )
}

