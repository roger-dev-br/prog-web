function ImagemDestaque(props) {
    return (
        <li>
            <a href="pastor-alemao.html">
                <img src={props.imagem} alt={props.nome} />
                <p>{ props.nome }</p>
            </a>
        </li>
    )
}

export default ImagemDestaque;