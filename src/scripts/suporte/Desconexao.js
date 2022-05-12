import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';


class Desconexao extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextDesc = this.getTextDesc.bind(this);
        this.state = {
            descricao: '',
            reboot: '',
            cabo: '',
            fonte: '',
            wifi: '',
            horario: '',
            contato1: '',
            contato2: '',
            mcontato: '',
            alertou: '',
        };
    }

    getTextDesc() {
        return `DESCONEXÃO

Descreva detalhadamente  a reclamação/solicitação do cliente.
R: ${this.state.descricao}

- Rebootou/Reiniciou o roteador? (Botão Power, desliga e  liga)
R: ${this.state.reboot}

- Checou o Cabo de Rede que vai para o roteador, está bem encaixado e na porta WAN?
R: ${this.state.cabo}

- Validou a Fonte ou Cabo de Energia, do modem de fibra / roteador?
R: ${this.state.fonte}

- O nome do WiFi mudou para o “nome do Roteador” (TP LINK, Intelbras,...)?
R: ${this.state.wifi}

- Qual melhor horário ou período para receber o retorno do time de Suporte?
R: ${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}  

- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
R: ${this.state.alertou}
`;
    }

    handleChange9() {
        this.setState({ reboot: '' });
        this.setState({ fonte: '' });
        this.setState({ contato1: '' });
        this.setState({ contato2: '' });
        this.setState({ cabo: '' });
        this.setState({ wifi: '' });
        this.setState({ horario: '' });
        this.setState({ mcontato: '' });
        this.setState({ alertou: '' });
        this.setState({ descricao: '' });
    }

    render() {
        return (
            <div>
                <header>
                    <div>
                        <div style={{ textAlign: 'center' }}><label><b>DESCONEXÃO</b></label></div>
                        <label>
                            <b>
                                Descreva detalhadamente  a reclamação/solicitação do cliente.
                            </b>
                            <br />
                            <textarea rows="3" cols="80" type="text" name="descricao" value={this.state.descricao} onChange={(e) => this.setState({ descricao: e.target.value })} />
                        </label>
                        <br />
                        <label>
                            <b>
                                - Rebootou/Reiniciou o roteador? (Botão Power, desliga e  liga)
                            </b>
                        </label>
                        <br />
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <input type='radio' id='reboot' name='reboot' value='Sim'
                                checked={this.state.reboot === 'Sim'} onChange={(e) => this.setState({ reboot: e.target.value })} /> Sim</div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <input type='radio' id='reboot' name='reboot' value='Não'
                                checked={this.state.reboot === 'Não'} onChange={(e) => this.setState({ reboot: e.target.value })} /> Não</div>
                        <br />
                        <label>
                            <b>
                                - Checou o Cabo de Rede que vai para o roteador, está bem encaixado e na porta WAN?
                            </b>
                        </label>
                        <br />
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <input type='radio' id='cabo' name='cabo' value='Sim'
                                checked={this.state.cabo === 'Sim'} onChange={(e) => this.setState({ cabo: e.target.value })} /> Sim</div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <input type='radio' id='cabo' name='cabo' value='Não'
                                checked={this.state.cabo === 'Não'} onChange={(e) => this.setState({ cabo: e.target.value })} /> Não</div>
                                 <br />
                        <label>
                            <b>
                                - Validou a Fonte ou Cabo de Energia, do modem de fibra / roteador?
                            </b>                        
                        </label>
                        <br />
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <input type='radio' id='fonte' name='fonte' value='Sim'
                                checked={this.state.fonte === 'Sim'} onChange={(e) => this.setState({ fonte: e.target.value })} /> Sim</div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <input type='radio' id='fonte' name='fonte' value='Não'
                                checked={this.state.fonte === 'Não'} onChange={(e) => this.setState({ fonte: e.target.value })} /> Não</div>
                        <br />
                        <label>
                            <b>
                                - O nome do WiFi mudou para o “nome do Roteador” (TP LINK, Intelbras,...)?
                            </b>
                        </label>
                        <br />
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <input type='radio' id='wifi' name='wifi' value='Sim'
                                checked={this.state.wifi === 'Sim'} onChange={(e) => this.setState({ wifi: e.target.value })} /> Sim</div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <input type='radio' id='wifi' name='wifi' value='Não'
                                checked={this.state.wifi === 'Não'} onChange={(e) => this.setState({ wifi: e.target.value })} /> Não</div>
                        <br />
                        <label>
                            <b>
                                - Qual melhor horário ou período para receber o retorno do time de Suporte?
                            </b>
                        </label>
                        <br />
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <input type='radio' id='horario' name='horario' value='Manha'
                                checked={this.state.horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} /> Manhã</div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <input type='radio' id='horario' name='horario' value='Tarde'
                                checked={this.state.horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} /> Tarde</div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <input type='radio' id='horario' name='horario' value='Ambos'
                                checked={this.state.horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} /> Ambos</div>
                        <br />
                        <label>
                            Contato Principal:
                            <br />
                            <input type="text" style={{ width:400 }}name="contato1" value={this.state.contato1} onChange={(e) => this.setState({ contato1: e.target.value })} />
                        </label>
                        <br />
                        <label>
                            Contato 2:
                            <br />
                            <input type="text" style={{ width:400 }}name="contato2" value={this.state.contato2} onChange={(e) => this.setState({ contato2: e.target.value })} />
                        </label>
                        <br />
                        <label>
                            Meio de contato:
                        </label>
                        <br />
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
                                checked={this.state.mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} /> WHATSAPP</div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO'
                                checked={this.state.mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} /> LIGAÇÃO</div>
                        <div style={{ display: 'inline-block' }}>
                            <input type='radio' id='mcontato' name='mcontato' value='AMBOS'
                                checked={this.state.mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} /> AMBOS</div>
                        <br />
                        <label>
                            - Alertou o cliente, que é necessário atender o retorno do time de Suporte?
                        </label>
                        <br />
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <input type='radio' id='alertou' name='alertou' value='Sim'
                                checked={this.state.alertou === 'Sim'} onChange={(e) => this.setState({ alertou: e.target.value })} /> Sim</div>
                        <div style={{ display: 'inline-block' }}>
                            <input type='radio' id='alertou' name='alertou' value='Nao'
                                checked={this.state.alertou === 'Nao'} onChange={(e) => this.setState({ alertou: e.target.value })} /> Não</div>
                    </div>
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <Clipboard option-text={this.getTextDesc} >
                            COPIAR
                        </Clipboard>
                        <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                    </div >
                </header>
            </div>
        );
    }
}
export default Desconexao;