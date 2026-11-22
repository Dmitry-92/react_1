import './Nav.css';

function Nav(props) {
    return (
        <nav>
            <ul>
                {
                    Object.keys(props.menu).map
                        (
                            element => {
                                return <li key={element} >
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault(); // чтобы не было перезагрузки страницы
                                            props.onMenuClick(props.menu[element]); // передаём значение ('main', 'factorial' и т.д.)
                                        }} >
                                        {element}
                                    </a>
                                </li>
                            }
                        )
                }
            </ul>
        </nav>
    )
}
export default Nav;