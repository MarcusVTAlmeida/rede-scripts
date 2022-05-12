import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';

class LentidaoQuedas extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextLequ = this.getTextLequ.bind(this);
        this.state = {
            upppoe: '',
            spppoe: '',
            sinal: '',
            obs: '',
            procedimento: '',
            horario: '',
            contato1: '',
            contato2: '',
            mcontato: '',
        };
    }



    getTextLequ() {
        return `MANUTENÇÃO - LENTIDÃO/QUEDAS
    
- USUÁRIO PPPOE: ${this.state.upppoe}
- SENHA  PPPOE: ${this.state.spppoe}
- SINAL DE FIBRA: ${this.state.sinal}

PROCEDIMENTOS EFETUADOS (teste de banda, troca de canal): ${this.state.procedimento}

Qual melhor horário ou período para receber o retorno do time dos Técnicos?
R: ${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}

Obs: ${this.state.obs}

`;
    }

    handleChange9() {
        this.setState({ horario: '' });
        this.setState({ contato1: '' });
        this.setState({ contato2: '' });
        this.setState({ mcontato: '' });
        this.setState({ upppoe: '' });
        this.setState({ spppoe: '' });
        this.setState({ sinal: '' });
        this.setState({ procedimento: '' });
        this.setState({ obs: '' });
    }

    render() {
        return (
            <div style={{ fontSize: 18, margin: '10px' }}>
                <div style={{ textAlign: 'center' }}><label><b>MANUTENÇÃO - LENTIDÃO/QUEDAS</b></label></div>
                <br />
                <label>
                    <b>
                        Usuário PPPoE: <input type="text" style={{ width:400 }}name="upppoe" value={this.state.upppoe} onChange={(e) => this.setState({ upppoe: e.target.value })} />
                    </b>
                </label>
                <br />
                <label>
                    <b>
                        Senha PPPoE: <input type="text" style={{ width:400 }}name="spppoe" value={this.state.spppoe} onChange={(e) => this.setState({ spppoe: e.target.value })} />
                    </b>
                </label>
                <br />
                <label>
                    <b>
                        Sinal de Fibra: <input type="text" style={{ width:400 }}name="sinal" value={this.state.sinal} onChange={(e) => this.setState({ sinal: e.target.value })} />
                    </b>
                </label>
                <br />
                <label>
                    <b>
                        Procedimentos Efetuados (teste de banda, troca de canal): <input type="text" style={{ width:400 }}name="procedimento" value={this.state.procedimento} onChange={(e) => this.setState({ procedimento: e.target.value })} />
                    </b>
                </label>
                <br />
                <label>
                    <b>
                        Qual melhor horário ou período para receber o retorno do time do Técnicos?
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
                        Obs:
                    </b>
                    <br />
                    <textarea rows="3" cols="80" type="text" name="obs" value={this.state.obs} onChange={(e) => this.setState({ obs: e.target.value })} />
                </label>
                <br />
                <div style={{ textAlign: 'center' }}>
                    <Clipboard option-text={this.getTextLequ}>
                        COPIAR
                    </Clipboard>
                    <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div>
            </div>
        );
    }
}
export default LentidaoQuedas;