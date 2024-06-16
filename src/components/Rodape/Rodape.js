import './Rodape.css'; 

export const Rodape = () => {
    
    return (
        <footer className="rodape">
            <div className="redes-sociais">
                <a href="https://www.instagram.com/ibrunooooo/" target="_blank" rel="noopener noreferrer">
                    <img src="./img/instagram.svg" alt="Ícone do Instagram." />
                </a>
                <a href="https://github.com/iBrunooooo" target="_blank" rel="noopener noreferrer">
                    <img src="./img/github.svg" alt="Ícone do Github." />
                </a>    
                <a href="https://www.linkedin.com/in/ibrunoalves/" target="_blank" rel="noopener noreferrer">
                    <img src="./img/linkedin.svg" alt="Ícone do LinkedIn." />
                </a>                
            </div>
            <div className="logo">
                <img src="./img/logo.png" alt="Logo do Projeto Organo." />
            </div>
            <div className="autor">
                <h3>Desenvolvido por Bruno Alves.</h3>
            </div>
        </footer>
	)

}
