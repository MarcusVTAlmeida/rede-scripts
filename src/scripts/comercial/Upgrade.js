import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';



class Upgrade extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextUpgr = this.getTextUpgr.bind(this);
        this.state = {
            motivo: '',
            fast: '',
            horario: '',
            contato1: '',
            contato2: '',
            mcontato: '',
        };
    }

    getTextUpgr() {
        return `LEAD: UPGRADE/DOWNGRADE

Cliente deseja realizar upgrade de seu plano. 

Qual o motivo da solicitação?
R: ${this.state.motivo}

Cliente possui roteador Fast?
R: ${this.state.fast}

Qual melhor horário ou período para receber o retorno do time do COMERCIAL?
R: ${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}`;
    }

    handleChange9() {
        this.setState({ horario: '' });
        this.setState({ contato1: '' });
        this.setState({ contato2: '' });
        this.setState({ mcontato: '' });
        this.setState({ fast: '' });
        this.setState({ motivo: '' });
    }
    render() {
        return (
            <div style={{ fontSize: 18, margin: '10px' }}>
                <div style={{ textAlign: 'center' }}><label><b>LEAD: UPGRADE/DOWNGRADE</b></label></div>
                <br />
                <label>
                    Cliente deseja realizar upgrade de seu plano.
                </label>
                <br />
                <label>
                    <b>
                        Qual o motivo da solicitação?
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="motivo" value={this.state.motivo} onChange={(e) => this.setState({ motivo: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        Cliente possui roteador Fast?
                    </b>
                </label>
                <br />
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <input type='radio' id='fast' name='fast' value='Sim'
                    checked={this.state.fast === 'Sim'} onChange={(e) => this.setState({ fast: e.target.value })} /> Sim</div>
                 <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <input type='radio' id='fast' name='fast' value='Não'
                    checked={this.state.fast === 'Não'} onChange={(e) => this.setState({ fast: e.target.value })} /> Não</div>
                <br />
                <label>
                    <b>
                        Qual melhor horário ou período para receber o retorno do time do COMERCIAL?
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
                <br />
                <div style={{ textAlign: 'center' }}>
                    <Clipboard option-text={this.getTextUpgr}>
                        COPIAR
                    </Clipboard>
                    <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div>
            </div>

        );
    }
}
export default Upgrade;