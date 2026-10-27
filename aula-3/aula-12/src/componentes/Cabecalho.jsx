function Cabecalho(props) {
    return (
        <>
            <div>
                <h1>{ props.titulo }</h1>
                
                <img src={props.imagem} 
                    alt={props.titulo}
                    height={100}
                    width={100}
                />
            </div>
        </>
    )
}

export default Cabecalho;