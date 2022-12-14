const TemplateExpressions = () => {

    const name = "Arthur";
    const data = {
        name: "Arthur",
        profission: "Web Developer"
    }

    return(
        <div>
            <h1>Olá {name}, de boa?</h1>
            <p> Seu nome é {data.name}, sua profissão é {data.profission}</p>
            {console.log(4 + 4)}
        </div>        
    )

}

export default TemplateExpressions