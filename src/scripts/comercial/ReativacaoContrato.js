import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';

class ReativacaoContrato extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextReco = this.getTextReco.bind(this);
        this.state = {
            cep: '',
            rua: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
            complemento: '',
            dataC: '',
            equipamento: '',
            motivoC: '',
            reativacao: '',
            periodo: '',
            enderecoP: '',
            gravacao: '',
            debito: '',
            documento: '',
            idhuggy: '',
            vencimento: '',
            endereco: '',
            huggy: '',
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

    getTextReco() {
        return `REATIVAÇÃO DE CONTRATO

Qual é o motivo do cancelamento?
R: ${this.state.motivoC}

Qual é a data de cancelamento?
R: ${this.state.dataC}

Qual é o motivo da reativação?
R: ${this.state.reativacao}

O endereço permanece o mesmo?
R: ${this.state.enderecoP}

  - Novo endereço
	CEP: ${this.state.cep}
	RUA: ${this.state.rua}
	NÚMERO: ${this.state.numero}
	BAIRRO: ${this.state.bairro}
	CIDADE: ${this.state.cidade}
	ESTADO: ${this.state.estado}
	COMPLEMENTO: ${this.state.complemento}

O equipamento esta com o cliente?
R: ${this.state.equipamento}

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
        this.setState({ cep: '' });
        this.setState({ rua: '' });
        this.setState({ bairro: '' });
        this.setState({ numero: '' });
        this.setState({ cidade: '' });
        this.setState({ estado: '' });
        this.setState({ complemento: '' });
        this.setState({ reativacao: '' });
        this.setState({ debito: '' });
        this.setState({ documento: '' });
        this.setState({ idhuggy: '' });
        this.setState({ vencimento: '' });
        this.setState({ endereco: '' });
        this.setState({ huggy: '' });
        this.setState({ dataC: '' });
        this.setState({ equipamento: '' });
        this.setState({ motivoC: '' });
        this.setState({ periodo: '' });
        this.setState({ gravacao: '' });
        this.setState({ enderecoP: '' });
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
                <div style={{ textAlign: 'center' }}><label><b>REATIVAÇÃO DE CONTRATO</b></label></div>
                <br />
                <label>
                    <b>
                        Qual é o motivo do cancelamento?
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="motivoC" value={this.state.motivoC} onChange={(e) => this.setState({ motivoC: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        Qual é a data de cancelamento?
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="dataC" value={this.state.dataC} onChange={(e) => this.setState({ dataC: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        Qual é o motivo da reativação?
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="reativacao" value={this.state.reativacao} onChange={(e) => this.setState({ reativacao: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        O endereço permanece o mesmo?
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="enderecoP" value={this.state.enderecoP} onChange={(e) => this.setState({ enderecoP: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        - Novo endereço:
                        <br />
                        CEP:
                        <input type="text" style={{ width:400 }}name="cep" value={this.state.cep} onChange={(e) => this.setState({ cep: e.target.value })} />
                        <br />
                        LOGRADOURO/RUA:
                        <input type="text" style={{ width:400 }}name="rua" value={this.state.rua} onChange={(e) => this.setState({ rua: e.target.value })} />
                        <br />
                        NÚMERO:
                        <input type="text" style={{ width:400 }}name="numero" value={this.state.numero} onChange={(e) => this.setState({ numero: e.target.value })} />
                        <br />
                        BAIRRO:
                        <input type="text" style={{ width:400 }}name="bairro" value={this.state.bairro} onChange={(e) => this.setState({ bairro: e.target.value })} />
                        <br />
                        CIDADE:
                        <input type="text" style={{ width:400 }}name="cidade" value={this.state.cidade} onChange={(e) => this.setState({ cidade: e.target.value })} />
                        <br />
                        ESTADO:
                        <input type="text" style={{ width:400 }}name="estado" value={this.state.estado} onChange={(e) => this.setState({ estado: e.target.value })} />
                        <br />
                        COMPLEMENTO:
                        <input type="text" style={{ width:400 }}name="complemento" value={this.state.complemento} onChange={(e) => this.setState({ complemento: e.target.value })} />
                    </b>
                </label>
                <br />
                <label>
                    <b>
                        O equipamento esta com o cliente?
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="equipamento" value={this.state.equipamento} onChange={(e) => this.setState({ equipamento: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        Há algum débito pendente?
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="debito" value={this.state.debito} onChange={(e) => this.setState({ debito: e.target.value })} />
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
                    <Clipboard option-text={this.getTextReco}>
                        COPIAR
                    </Clipboard>
                    <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div >
            </div >
        );
    }
}
export default ReativacaoContrato;