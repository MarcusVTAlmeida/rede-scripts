import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';


class RoteadorDesconfig extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextRote = this.getTextRote.bind(this);
        this.state = {
            horario: '',
            contato1: '',
            contato2: '',
            mcontato: '',
            alertou: '',
            lan: '',
            swifi: '',
            nwifi: '',
            modelo: '',
        };
    }

    getTextRote() {
        return `ROTEADOR DESCONFIGURADO
    
- Qual o modelo/marca do roteador?
R: ${this.state.modelo}
    
- Qual o nome do WI-FI?
R: ${this.state.nwifi}
    
- Qual a senha do WI-FI?
R: ${this.state.swifi}
    
- O cabo já está na LAN?
R: ${this.state.lan}
    
- Qual melhor horário ou período para receber o retorno do time de Suporte?
R: ${this.state.horario}
    
Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}
    
- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
R: ${this.state.alertou}`;
    }

    handleChange9() {
        this.setState({ contato1: '' });
        this.setState({ contato2: '' });
        this.setState({ horario: '' });
        this.setState({ mcontato: '' });
        this.setState({ alertou: '' });
        this.setState({ modelo: '' });
        this.setState({ nwifi: '' });
        this.setState({ swifi: '' });
        this.setState({ lan: '' });
    }

    render() {
        return (
            <div style={{ fontSize: 18, margin: '10px' }}>
                <div style={{ textAlign: 'center' }}><label><b>ROTEADOR DESCONFIGURADO</b></label> </div>
                <label>
                    <b>
                        Qual o modelo/marca do roteador?
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="modelo" value={this.state.modelo} onChange={(e) => this.setState({ modelo: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        Qual o nome do WI-FI?
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="nwifi" value={this.state.nwifi} onChange={(e) => this.setState({ nwifi: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        Qual a senha do WI-FI?
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="swifi" value={this.state.swifi} onChange={(e) => this.setState({ swifi: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        O cabo já está na LAN?
                    </b>
                </label>
                <br />
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='lan' name='lan' value='Sim'
                        checked={this.state.lan === 'Sim'} onChange={(e) => this.setState({ lan: e.target.value })} /> Sim</div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='lanN' name='lan' value='Nao'
                        checked={this.state.lan === 'Nao'} onChange={(e) => this.setState({ lan: e.target.value })} /> Não</div>
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
                <div style={{ display: 'inline-block' }}>
                    <input type='radio' id='horario' name='horario' value='Ambos'
                        checked={this.state.horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} /> Ambos</div>
                <br />
                <label>
                    <b>
                        Contato Principal:
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="contato1" value={this.state.contato1} onChange={(e) => this.setState({ contato1: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        Contato 2:
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="contato2" value={this.state.contato2} onChange={(e) => this.setState({ contato2: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        Meio de contato:
                    </b>
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
                    <b>
                        - Alertou o cliente, que é necessário atender o retorno do time de Suporte?
                    </b>
                </label>
                <br />
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='alertou' name='alertou' value='Sim'
                        checked={this.state.alertou === 'Sim'} onChange={(e) => this.setState({ alertou: e.target.value })} /> Sim</div>
                <div style={{ display: 'inline-block' }}>
                    <input type='radio' id='alertou' name='alertou' value='Nao'
                        checked={this.state.alertou === 'Nao'} onChange={(e) => this.setState({ alertou: e.target.value })} /> Não</div>
                <br />
                <div style={{ textAlign: 'center' }}>
                    <Clipboard option-text={this.getTextRote} onSuccess={this.onSuccess} >
                        COPIAR
                    </Clipboard>
                    <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div>
            </div >
        );
    }
}
export default RoteadorDesconfig;