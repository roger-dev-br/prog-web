function MenuItem(props) {
    return (
        <li>
            <a href="pastor-alemao.html">
                <img src={props.foto} alt={props.nome} />
                <p>{props.nome}</p>
            </a>
        </li>
    )
}

export default MenuItem;