import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';

class TransferenciaEndereco extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextTran = this.getTextTran.bind(this);
        this.state = {
            cep: '',
            rua: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
            complemento: '',
            cobranca: '',
            comprovante: '',
            documento: '',
            idhuggy: '',
            vencimento: '',
            endereco: '',
            huggy: '',
            horario: '',
            contato1: '',
            contato2: '',
            mcontato: '',
            isCheckedEnde: false,
            isCheckedData: false,
            isCheckedHuggy: false,
            isCheckedDoc: false,
        };
    }

    getTextTran() {
        return `TRANSFERÊNCIA DE ENDEREÇO

    - Novo endereço
      CEP: ${this.state.cep}
      LOGRADOURO/RUA: ${this.state.rua}
      NÚMERO: ${this.state.numero} 
      BAIRRO: ${this.state.bairro}
      CIDADE: ${this.state.cidade}
      ESTADO: ${this.state.estado}
      COMPLEMENTO: ${this.state.complemento}
    
- Deseja altera o endereço de faturamento/cobrança?
R: ${this.state.cobranca}
    
- Possui comprovante ou localização de endereço:
R: ${this.state.comprovante}
    
Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}
    
- Checklist de confirmação de titularidade:
[ ${this.state.vencimento} ] Data de vencimento	[ ${this.state.endereco} ] Endereço
[ ${this.state.huggy} ] ID Huggy: ${this.state.idhuggy}
[ ${this.state.documento} ] Documento do cliente com foto.`;
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
        this.setState({ cep: '' });
        this.setState({ rua: '' });
        this.setState({ bairro: '' });
        this.setState({ numero: '' });
        this.setState({ cidade: '' });
        this.setState({ estado: '' });
        this.setState({ complemento: '' });
        this.setState({ documento: '' });
        this.setState({ idhuggy: '' });
        this.setState({ vencimento: '' });
        this.setState({ endereco: '' });
        this.setState({ huggy: '' });
        this.setState({ cobranca: '' });
        this.setState({ comprovante: '' });
        this.setState({ isCheckedDoc: false });
        this.setState({ isCheckedEnde: false });
        this.setState({ isCheckedHuggy: false });
        this.setState({ isCheckedData: false });
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: 'center' }}><label><b>TRANSFERÊNCIA DE ENDEREÇO</b></label></div>
                <br />
                <label>
                    <b>
                        - Endereço correto:
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
                    </b>
                </label>
                <br />
                <label>
                    <b>
                        - Deseja altera o endereço de faturamento/cobrança?
                    </b>
                </label>
                <br />
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='cobranca' name='cobranca' value='Sim'
                        checked={this.state.cobranca === 'Sim'} onChange={(e) => this.setState({ cobranca: e.target.value })} /> Sim</div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='cobranca' name='cobranca' value='Não'
                        checked={this.state.cobranca === 'Não'} onChange={(e) => this.setState({ cobranca: e.target.value })} /> Não</div>
                <br />
                <label>
                    <b>
                        - Possui comprovante ou localização de endereço:
                    </b>
                </label>
                <br />
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='comprovante' name='comprovante' value='Sim'
                        checked={this.state.comprovante === 'Sim'} onChange={(e) => this.setState({ comprovante: e.target.value })} /> Sim</div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='comprovante' name='comprovante' value='Não'
                        checked={this.state.comprovante === 'Não'} onChange={(e) => this.setState({ comprovante: e.target.value })} /> Não</div>
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
                <input type="checkbox" onChange={this.toggleChangeHuggy} checked={this.state.isCheckedHuggy} /> ID Huggy: <input type="text" style={{ width:400 }}name="idhuggy" value={this.state.idhuggy} onChange={(e) => this.setState({ idhuggy: e.target.value })} />
                <br />
                <input type="checkbox" onChange={this.toggleChangeDoc} checked={this.state.isCheckedDoc} /> Documento do titular com foto.
                <div style={{ textAlign: 'center' }}>
                    <Clipboard option-text={this.getTextTran}>
                        COPIAR
                    </Clipboard>
                    <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div>
            </div>
        );
    }
}
export default TransferenciaEndereco;