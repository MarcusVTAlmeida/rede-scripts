import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';

class DescontoSLARompido extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextDero = this.getTextDero.bind(this);
        this.state = {
            protocolo: '',
            atraso: '',
            contato1: '',
            contato2: '',
            mcontato: '',
            huggy: '',
            idhuggy: '',
            gravacao: '',
        };
    }

    getTextDero() {
        return `DESCONTO -  DESCONTO POR SLA ROMPIDO

- PROTOCOLO DO CHAMADO POR SLA ROMPIDO: ${this.state.protocolo}
- TEMPO DE ATRASO (APÓS AS 48 HORAS): ${this.state.atraso}
        

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}

Informe qual o tipo de comprovante de solicitação:
[ ${this.state.gravacao} ] Gravação de ligação (segue anexado no protocolo);
[ ${this.state.huggy} ] ID Huggy: ${this.state.idhuggy}`;
    }

    handleChange9() {
        this.setState({ horario: '' });
        this.setState({ contato1: '' });
        this.setState({ contato2: '' });
        this.setState({ mcontato: '' });
        this.setState({ descricao: '' });
        this.setState({ gravacao: '' });
        this.setState({ huggy: '' });
        this.setState({ idhuggy: '' });
        this.setState({ protocolo: '' });
        this.setState({ atraso: '' });
    }

    render() {
        return (
            <div style={{ fontSize: 18, margin: '10px' }}>
                <div style={{ textAlign: 'center' }}><label><b>DESCONTO -  DESCONTO POR SLA ROMPIDO</b></label></div>
                <br />
                <label>
                    <b>
                        - PROTOCOLO DO CHAMADO POR SLA ROMPIDO: <input type="text" style={{ width:400 }}name="protocolo" value={this.state.protocolo} onChange={(e) => this.setState({ protocolo: e.target.value })} />
                    </b>
                </label>
                <br />
                <label>
                    <b>
                        - TEMPO DE ATRASO (APÓS AS 48 HORAS): <input type="text" style={{ width:400 }}name="atraso" value={this.state.atraso} onChange={(e) => this.setState({ atraso0: e.target.value })} />
                    </b>
                </label>
                <br />
                <label>
                    <b>
                        Qual melhor horário ou período para receber o retorno do time do Financeiro?
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
                    <Clipboard option-text={this.getTextDero}>
                        COPIAR
                    </Clipboard>
                    <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div>
            </div>
        );
    }
}
export default DescontoSLARompido;