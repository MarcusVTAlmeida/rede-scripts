import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';

class NegociacaoDivida extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextNedi = this.getTextNedi.bind(this);
        this.state = {
            mcontato: '',
            contato1: '',
            contato2: '',
            horario: '',
            huggy: '',
            idhuggy: '',
            gravacao: '',
            isCheckedGrava: false,
            isCheckedHuggy: false
        };
    }

    getTextNedi() {
        return `DESCONTO -  NEGOCIAÇÃO DE DÍVIDA

- Qual melhor horário ou período para receber o retorno do time do Financeiro?
R: ${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}

Informe qual o tipo de comprovante de solicitação:
[ ${this.state.gravacao} ] Gravação de ligação (segue anexado no protocolo);
[ ${this.state.huggy} ] ID Huggy: ${this.state.idhuggy}`;
    }

    handleChange9() {
        this.setState({ horario: '' });
        this.setState({ contato1: '' });
        this.setState({ contato2: '' });
        this.setState({ mcontato: '' });
        this.setState({ gravacao: '' });
        this.setState({ huggy: '' });
        this.setState({ isCheckedHuggy: false });
        this.setState({ isCheckedGrava: false });
        this.setState({ idhuggy: '' });
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

    render() {
        return (
             <div style={{ fontSize: 18, margin:'10px' }}>
                <div style={{ textAlign: 'center' }}><label><b>DESCONTO -  NEGOCIAÇÃO DE DÍVIDA</b></label></div>
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
                    <Clipboard option-text={this.getTextNedi}>
                        COPIAR
                    </Clipboard>
                <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div>
            </div>
        );
    }
}
export default NegociacaoDivida;