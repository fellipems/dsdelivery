function StepsHeader() {
    return (
        <header className="orders-steps-container">
            <div className="orders-steps-content">
                <h1 className="steps-title">
                    SIGA ESSAS <br/> ETAPAS:
                </h1>
                <ul className="steps-items">
                    <li>
                        <span className="steps-number">1</span>
                        Selecione os seus produtos, e logo após a sua localização;
                    </li>
                    <li>
                        <span className="steps-number">2</span>
                        Depois, clique em <strong>"FAZER MEU PEDIDO"</strong>.
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default StepsHeader;