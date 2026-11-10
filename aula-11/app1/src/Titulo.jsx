function Titulo(props) {
    return (
        <h1 onClick={props.onClick}>{props.titulo}</h1>
    );
}

export default Titulo;