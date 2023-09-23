
const ConditionalRender = () => {
    const x = 5
    const name = 'Patrick'
    return(
        <div>
            <h3>Isso será exibido?</h3>
            {x > 2 && <p>Se x for true, sim.</p>}

            {name === 'Patrick' ? (
                <div>
                    <p>Olá, Patrick</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>)}
        </div>
    )
}

export default ConditionalRender