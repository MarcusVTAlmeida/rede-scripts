import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';

class MudancaEnderecoGrupo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextMugr = this.getTextMugr.bind(this);
        this.state = {
            cep: '',
            rua: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
            complemento: '',
            aCep: '',
            aRua: '',
            aNumero: '',
            aBairro: '',
            aCidade: '',
            aEstado: '',
            aComplemento: '',
            comprovante: '',
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
        };
    }



    getTextMugr() {
        return `MUDANÇA DE ENDEREÇO ENTRE GRUPO

 - Antigo endereço
    CEP: ${this.state.aCep}
    LOGRADOURO/RUA: ${this.state.aRua}
    NÚMERO: ${this.state.aNumero}
    BAIRRO: ${this.state.aBairro}
    CIDADE: ${this.state.aCidade}
    ESTADO: ${this.state.aEstado}
    COMPLEMENTO: ${this.state.aComplemento}

- Novo endereço
    CEP: ${this.state.cep}
    LOGRADOURO/RUA: ${this.state.rua}
    NÚMERO: ${this.state.numero}
    BAIRRO: ${this.state.bairro}
    CIDADE: ${this.state.cidade}
    ESTADO: ${this.state.estado}
    COMPLEMENTO: ${this.state.complemento}

Possui comprovante ou localização de endereço:
R: ${this.state.comprovante}

Qual melhor horário ou período para receber o retorno do time do COMERCIAL?
R: ${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}

Checklist de confirmação de titularidade:
[ ${this.state.vencimento} ] Data de vencimento	[ ${this.state.endereco} ] Endereço
[ ${this.state.huggy} ] ID Huggy: ${this.state.idhuggy}`;}

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
        this.setState({ aCep: '' });
        this.setState({ aRua: '' });
        this.setState({ aNumero: '' });
        this.setState({ aBairro: '' });
        this.setState({ aCidade: '' });
        this.setState({ aEstado: '' });
        this.setState({ aComplemento: '' });
        this.setState({ comprovante: '' });
        this.setState({ idhuggy: '' });
        this.setState({ vencimento: '' });
        this.setState({ endereco: '' });
        this.setState({ huggy: '' });
        this.setState({ isCheckedEnde: false });
        this.setState({ isCheckedData: false });
        this.setState({ isCheckedHuggy: false });
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
            <div style={{ fontSize: 18, margin: '10px' }}>
                <div style={{ textAlign: 'center' }}><label><b>MUDANÇA DE ENDEREÇO ENTRE GRUPO</b></label></div>
                <br />
                <label>
                    <b>
                        - Antigo Endereço
                        <br />
                        CEP:
                        <input type="text" style={{ width:400 }}name="aCep" value={this.state.aCep} onChange={(e) => this.setState({ aCep: e.target.value })} />
                        <br />
                        LOGRADOURO/RUA:
                        <input type="text" style={{ width:400 }}name="aRua" value={this.state.aRua} onChange={(e) => this.setState({ aRua: e.target.value })} />
                        <br />
                        NÚMERO:
                        <input type="text" style={{ width:400 }}name="aNumero" value={this.state.aNumero} onChange={(e) => this.setState({ aNumero: e.target.value })} />
                        <br />
                        BAIRRO:
                        <input type="text" style={{ width:400 }}name="aBairro" value={this.state.aBairro} onChange={(e) => this.setState({ aBairro: e.target.value })} />
                        <br />
                        CIDADE:
                        <input type="text" style={{ width:400 }}name="aCidade" value={this.state.aCidade} onChange={(e) => this.setState({ aCidade: e.target.value })} />
                        <br />
                        ESTADO:
                        <input type="text" style={{ width:400 }}name="aEstado" value={this.state.aEstado} onChange={(e) => this.setState({ aEstado: e.target.value })} />
                        <br />
                        COMPLEMENTO:
                        <input type="text" style={{ width:400 }}name="aComplemento" value={this.state.aComplemento} onChange={(e) => this.setState({ aComplemento: e.target.value })} />
                    </b>
                </label>
                <br />
                <br />
                <label>
                    <b>
                        - Endereço correto
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
                <input type="checkbox" onChange={this.toggleChangeHuggy} checked={this.state.isCheckedHuggy} /> ID Huggy: <input type="text" style={{ width:400 }}name="idhuggy" value={this.state.idhuggy} onChange={(e) => this.setState({ idhuggy: e.target.value })} />
                <br />
                <div style={{ textAlign: 'center' }}>
                    <Clipboard option-text={this.getTextMugr}>
                        COPIAR
                    </Clipboard>
                    <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div>
            </div>
        );
    }
}
export default MudancaEnderecoGrupo;