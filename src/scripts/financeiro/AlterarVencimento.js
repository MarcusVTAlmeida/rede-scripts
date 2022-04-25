import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';

class AlterarVencimento extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextAlve = this.getTextAlve.bind(this);
        this.state = {
            vencimentoN: '',
            huggy: '',
            idhuggy: '',
            gravacao: '',
            horario: '',
            contato1: '',
            contato2: '',
            mcontato: '',
            isCheckedGrava: false,
            isCheckedHuggy: false
        };
    }

    getTextAlve() {
        return `ALTERAR VENCIMENTO

Alteração de Vencimento de Mensalidade.

Qual o novo vencimento?
R: ${this.state.vencimentoN}

Qual melhor horário ou período para receber o retorno do time do COMERCIAL?
R: ${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}

Informe qual o tipo de comprovante de solicitação:
[ ${this.state.gravacao} ] Gravação de ligação (segue anexado no protocolo);
[ ${this.state.huggy} ] ID Huggy: ${this.state.idhuggy}`;
    }

    toggleChangeGrava = () => {
        this.setState({
            isCheckedGrava: !this.state.isCheckedGrava,
        });
        if (this.state.isCheckedGrava === false) {
            this.setState({ gravacao: 'X' })
        }
        else {
            this.setState({ gravacao: '' })
        }
    }

    toggleChangeHuggy = () => {
        this.setState({
            isCheckedHuggy: !this.state.isCheckedHuggy,
        });
        if (this.state.isCheckedHuggy === false) {
            this.setState({ huggy: 'X' })
        }
        else {
            this.setState({ huggy: '' })
        }
    }

    handleChange9() {
        this.setState({ horario: '' });
        this.setState({ contato1: '' });
        this.setState({ contato2: '' });
        this.setState({ mcontato: '' });
        this.setState({ vencimentoN: '' });
        this.setState({ gravacao: '' });
        this.setState({ huggy: '' });
        this.setState({ idhuggy: '' });
        this.setState({ motivo: '' });
        this.setState({ isCheckedHuggy: false });
        this.setState({ isCheckedGrava: false });
    }

    render() {
        return (
            <div style={{ fontSize: 18, margin: '10px' }}>
                <div style={{ textAlign: 'center' }}><label><b>ALTERAR VENCIMENTO</b></label></div>
                <br />
                <label>
                    Possíveis vencimentos: 05, 12, 20, 24, 28 e 30.
                </label>
                <br />
                <label>
                    <b>
                        Qual o novo vencimento?
                    </b>
                    <br />                    
                    <div style={{ display: 'inline-block', marginRight: '10px' }}>
                        <input type='radio' id='vencimentoN' name='vencimentoN' value='05'
                            checked={this.state.vencimentoN === '05'} onChange={(e) => this.setState({ vencimentoN: e.target.value })} /> 05</div>
                    <div style={{ display: 'inline-block', marginRight: '10px' }}>
                        <input type='radio' id='vencimentoN' name='vencimentoN' value='12'
                            checked={this.state.vencimentoN === '12'} onChange={(e) => this.setState({ vencimentoN: e.target.value })} /> 12</div>
                    <div style={{ display: 'inline-block', marginRight: '10px' }}>
                        <input type='radio' id='vencimentoN' name='vencimentoN' value='20'
                            checked={this.state.vencimentoN === '20'} onChange={(e) => this.setState({ vencimentoN: e.target.value })} /> 20</div>
                    <div style={{ display: 'inline-block', marginRight: '10px' }}>
                        <input type='radio' id='vencimentoN' name='vencimentoN' value='24'
                            checked={this.state.vencimentoN === '24'} onChange={(e) => this.setState({ vencimentoN: e.target.value })} /> 24</div>
                    <div style={{ display: 'inline-block', marginRight: '10px' }}>
                        <input type='radio' id='vencimentoN' name='vencimentoN' value='28'
                            checked={this.state.vencimentoN === '28'} onChange={(e) => this.setState({ vencimentoN: e.target.value })} /> 28</div>
                    <div style={{ display: 'inline-block' }}>
                        <input type='radio' id='vencimentoN' name='vencimentoN' value='30'
                            checked={this.state.vencimentoN === '30'} onChange={(e) => this.setState({ vencimentoN: e.target.value })} /> 30</div>
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
                <input type="checkbox" onChange={this.toggleChangeGrava} checked={this.state.isCheckedGrava} /> Gravação de ligação (segue anexado no protocolo)
                <br />
                <input type="checkbox" onChange={this.toggleChangeHuggy} checked={this.state.isCheckedHuggy} /> ID Huggy: <input type="text" style={{ width:400 }}name="idhuggy" value={this.state.idhuggy} onChange={(e) => this.setState({ idhuggy: e.target.value })} />
                <div style={{ textAlign: 'center' }}>
                    <Clipboard option-text={this.getTextAlve}>
                        COPIAR
                    </Clipboard>
                    <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div>
            </div>
        );
    }
}
export default AlterarVencimento;