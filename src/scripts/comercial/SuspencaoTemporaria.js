import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';

class SuspensaoTemporaria extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextSute = this.getTextSute.bind(this);
        this.state = {
            motivo: '',           
            periodo: '',
            debito: '',
            documento: '',
            idhuggy: '',
            vencimento: '',
            endereco: '',
            huggy: '',
            gravacao: '',
            horario: '',
            contato1: '',
            contato2: '',
            mcontato: '',
            isCheckedGrava: false,
            isCheckedHuggy: false,
            isCheckedEnde: false,
            isCheckedData: false,
            isCheckedDoc: false,
        };
    }

    getTextSute() {
        return `SUSPENSÃO TEMPORÁRIA

MOTIVO DA suspensao: 
R: ${this.state.motivo}

PERIODO: ${this.state.periodo}

Há algum débito pendente?
R: ${this.state.debito}

Qual melhor horário ou período para receber o retorno do time do COMERCIAL?
R: ${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}

Checklist de confirmação de titularidade:
[ ${this.state.vencimento} ] Data de vencimento	[ ${this.state.endereco} ] Endereço

Informe qual o tipo de comprovante de solicitação:
[ ${this.state.gravacao} ] Gravação de ligação (segue anexado no protocolo);
[ ${this.state.huggy} ] ID Huggy: ${this.state.idhuggy}
[ ${this.state.documento} ] Documento do titular com foto.`;
    }

    handleChange9() {
        this.setState({ horario: '' });
        this.setState({ contato1: '' });
        this.setState({ contato2: '' });
        this.setState({ mcontato: '' });
        this.setState({ motivo: '' });
        this.setState({ periodo: '' });
        this.setState({ debito: '' });
        this.setState({ documento: '' });
        this.setState({ idhuggy: '' });
        this.setState({ vencimento: '' });
        this.setState({ endereco: '' });
        this.setState({ huggy: '' });
        this.setState({ gravacao: '' });
        this.setState({ isCheckedDoc: false });
        this.setState({ isCheckedEnde: false });
        this.setState({ isCheckedHuggy: false });
        this.setState({ isCheckedGrava: false });
        this.setState({ isCheckedData: false });
    }

    toggleChangeDoc = () => {
        this.setState({
            isCheckedDoc: !this.state.isCheckedDoc,
        });
        if (this.state.isCheckedDoc === false) {
            this.setState({ documento: 'X' })
        }
        else {
            this.setState({ documento: '' })
        }
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

    toggleChangeEnde = () => {
        this.setState({
            isCheckedEnde: !this.state.isCheckedEnde,
        });
        if (this.state.isCheckedEnde === false) {
            this.setState({ endereco: 'X' })
        }
        else {
            this.setState({ endereco: '' })
        }
    }

    toggleChangeData = () => {
        this.setState({
            isCheckedData: !this.state.isCheckedData,
        });
        if (this.state.isCheckedData === false) {
            this.setState({ vencimento: 'X' })
        }
        else {
            this.setState({ vencimento: '' })
        }
    }

    render() {
        return (
            <div style={{ fontSize: 18, margin: '10px' }}>
                <div style={{ textAlign: 'center' }}><label><b>SUSPENSÃO TEMPORÁRIA</b></label></div>
                <br />
                <label>
                    <b>
                        Motivo da Suspensão:
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="motivo" value={this.state.motivo} onChange={(e) => this.setState({ motivo: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        Periodo: 
                    </b>
                    <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='periodo' name='periodo' value='30'
                        checked={this.state.periodo === '30'} onChange={(e) => this.setState({ periodo: e.target.value })} /> 30</div>
                      <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='periodo' name='periodo' value='60'
                        checked={this.state.periodo === '60'} onChange={(e) => this.setState({ periodo: e.target.value })} /> 60</div>
                      <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='periodo' name='periodo' value='90'
                        checked={this.state.periodo === '90'} onChange={(e) => this.setState({ periodo: e.target.value })} /> 90</div>
                      <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='periodo' name='periodo' value='120'
                        checked={this.state.periodo === '120'} onChange={(e) => this.setState({ periodo: e.target.value })} /> 120</div>
                </label>
                <br />               
                <label>
                    <b>
                        Há algum débito pendente?
                    </b>   
                    <br />                
                    <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='debito' name='debito' value='Sim'
                        checked={this.state.debito === 'Sim'} onChange={(e) => this.setState({ debito: e.target.value })} /> Sim</div>
                      <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='debito' name='debito' value='Nao'
                        checked={this.state.debito === 'Nao'} onChange={(e) => this.setState({ debito: e.target.value })} /> Não</div>
                </label>
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
                <label>
                    <b>
                        Checklist de confirmação de titularidade:
                    </b>
                </label>
                <br />
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type="checkbox" onChange={this.toggleChangeData} checked={this.state.isCheckedData} /> Data de vencimento</div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type="checkbox" onChange={this.toggleChangeEnde} checked={this.state.isCheckedEnde} /> Endereço</div>
                <br />
                <label>
                    <b>
                        Informe qual o tipo de comprovante de solicitação:
                    </b>
                </label>
                <br />
                <input type="checkbox" onChange={this.toggleChangeGrava} checked={this.state.isCheckedGrava} /> Gravação de ligação (segue anexado no protocolo)
                <br />
                <input type="checkbox" onChange={this.toggleChangeHuggy} checked={this.state.isCheckedHuggy} /> ID Huggy: <input type="text" style={{ width:400 }}name="idhuggy" value={this.state.idhuggy} onChange={(e) => this.setState({ idhuggy: e.target.value })} />
                <br />
                <input type="checkbox" onChange={this.toggleChangeDoc} checked={this.state.isCheckedDoc} /> Documento do titular com foto.
                <br />
                <div style={{ textAlign: 'center' }}>
                    <Clipboard option-text={this.getTextSute}>
                        COPIAR
                    </Clipboard>
                    <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div>
            </div>
        );
    }
}
export default SuspensaoTemporaria;