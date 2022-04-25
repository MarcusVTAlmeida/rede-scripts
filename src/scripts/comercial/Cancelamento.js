import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';

class Cancelamento extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextCanc = this.getTextCanc.bind(this);
        this.state = {
            solicitacao: '',
            reclamacao: '',
            retencao: '',
            vencimento: '',
            endereco: '',
            gravacao: '',
            huggy: '',
            idhuggy: '',
            documento: '',
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

    getTextCanc() {
        return `CANCELAMENTO

1. SOLICITAÇÃO DE CANCELAMENTO:  (Qual o motivo do cancelamento?)
R: ${this.state.solicitacao}

2. QUAL É A RECLAMAÇÃO DO CLIENTE? (Relatar detalhadamente o que levou a solicitação do cancelamento)
R: ${this.state.reclamacao}

3. RETENÇÃO DE CANCELAMENTO: (O que você fez, ou o que disse ao cliente para tentar reverter a situação, tentou delegar para  um setor especializado “suporte” ou “operações”?)
R: ${this.state.retencao}

Qual melhor horário ou período para receber o retorno do time do Financeiro?
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

    handleChange9() {
        this.setState({ horario: '' });
        this.setState({ contato1: '' });
        this.setState({ contato2: '' });
        this.setState({ mcontato: '' });
        this.setState({ solicitacao: '' });
        this.setState({ reclamacao: '' });
        this.setState({ retencao: '' });
        this.setState({ vencimento: '' });
        this.setState({ endereco: '' });
        this.setState({ gravacao: '' });
        this.setState({ huggy: '' });
        this.setState({ idhuggy: '' });
        this.setState({ documento: '' });
        this.setState({ isCheckedDoc: false });
        this.setState({ isCheckedEnde: false });
        this.setState({ isCheckedHuggy: false });
        this.setState({ isCheckedGrava: false });
        this.setState({ isCheckedData: false });
    }

    render() {
        return (
            <div style={{ fontSize: 18, margin: '10px' }}>
                 <div style={{ textAlign: 'center' }}><label><b>CANCELAMENTO</b></label></div>
                <br />
                <label>
                    <b>
                        1. SOLICITAÇÃO DE CANCELAMENTO: (Qual o motivo do cancelamento?)
                    </b>
                    <br />
                    <textarea rows="2" cols="80" name="solicitacao" value={this.state.solicitacao} onChange={(e) => this.setState({ solicitacao: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        2. QUAL É A RECLAMAÇÃO DO CLIENTE? (Relatar detalhadamente o que levou a solicitação do cancelamento)
                    </b>
                    <br />
                    <textarea rows="2" cols="80" name="reclamacao" value={this.state.reclamacao} onChange={(e) => this.setState({ reclamacao: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        3. RETENÇÃO DE CANCELAMENTO: (O que você fez, ou o que disse ao cliente para tentar reverter a situação, tentou delegar para um setor especializado “suporte” ou “operações”?)
                    </b>
                    <br />
                    <textarea rows="2" cols="80" name="retencao" value={this.state.retencao} onChange={(e) => this.setState({ retencao: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        Qual melhor horário ou período para receber o retorno do time do Financeiro?
                    </b>
                </label>
                <br />
                 <input type='radio' id='horario' name='horario' value='Manha'
                            checked={this.state.horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} /> Manhã
                        <br />
                        <input type='radio' id='horario' name='horario' value='Tarde'
                            checked={this.state.horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} /> Tarde
                        <br />
                        <input type='radio' id='horario' name='horario' value='Ambos'
                            checked={this.state.horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} /> Ambos
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
                    <Clipboard option-text={this.getTextCanc}>
                        COPIAR
                    </Clipboard>
                    <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div>
            </div>

        );
    }
}
export default Cancelamento;