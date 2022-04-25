import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';

class AlteracaoEndereco extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextAlen = this.getTextAlen.bind(this);
        this.state = {
            cep: '',
            rua: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
            complemento: '',
            comprovante: ''
        };
    }

    getTextAlen() {
        return `ALTERAÇÃO DE ENDEREÇO

- Endereço correto
    CEP: ${this.state.cep}
    LOGRADOURO/RUA: ${this.state.rua}
    NÚMERO: ${this.state.numero}
    BAIRRO: ${this.state.bairro}
    CIDADE: ${this.state.cidade}
    ESTADO: ${this.state.estado}
    COMPLEMENTO: ${this.state.complemento}

Possui comprovante ou localização de endereço:
R: ${this.state.comprovante}`;
    }

    handleChange9() {
        this.setState({ cep: '' });
        this.setState({ rua: '' });
        this.setState({ bairro: '' });
        this.setState({ numero: '' });
        this.setState({ cidade: '' });
        this.setState({ estado: '' });
        this.setState({ complemento: '' });
        this.setState({ comprovante: '' });
    }

    render() {
        return (
            <div style={{ fontSize: 18 }}>
                <div style={{ textAlign: 'center' }}><label><b>ALTERAÇÃO DE ENDEREÇO</b></label></div>
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
                <br />
                <div style={{ textAlign: 'center' }}>
                    <Clipboard option-text={this.getTextAlen}>
                        COPIAR
                    </Clipboard>
                    <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div>
            </div>
        );
    }
}
export default AlteracaoEndereco;