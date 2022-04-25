import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';


class AlteracaoSenha extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextSenh = this.getTextSenh.bind(this);
        this.state = {
            contato1: '',
            titularidadeE: '',
            titularidadeV: '',
            modelo: '',
            tswifi: '',
            tnwifi: '',
            isCheckedEnde: false,
            isCheckedData: false
        };
    }

    getTextSenh() {
        return `      
        ALTERAÇÃO DE SSID/SENHA
    
- Qual o modelo/marca do roteador?
R: ${this.state.modelo}
    
- Deseja trocar o nome do wi-fi (SSID)? (Não pode conter caracteres especiais)
Se sim, qual: ${this.state.tnwifi}
    
- Deseja trocar a senha do wi-fi? (Deve conter no mínimo 8 caracteres e não pode conter caracteres especiais)
Se sim, qual: ${this.state.tswifi}
    
Contato: ${this.state.contato1}
    
- Checklist de confirmação de titularidade:
[ ${this.state.titularidadeV} ] Data de vencimento	[ ${this.state.titularidadeE} ] Endereço`;
    }

    handleChange9() {
        this.setState({ titularidadeE: '' });
        this.setState({ titularidadeV: '' });
        this.setState({ contato1: '' });
        this.setState({ tswifi: '' });
        this.setState({ modelo: '' });
        this.setState({ tnwifi: '' });
        this.setState({ isCheckedEnde: false });
        this.setState({ isCheckedData: false });
    }

    toggleChangeEnde = () => {
        this.setState({
            isCheckedEnde: !this.state.isCheckedEnde,
        });
        if (this.state.isCheckedEnde === false) {
            this.setState({ titularidadeE: 'X' })
        }
        else {
            this.setState({ titularidadeE: '' })
        }
    }

    toggleChangeData = () => {
        this.setState({
            isCheckedData: !this.state.isCheckedData,
        });
        if (this.state.isCheckedData === false) {
            this.setState({ titularidadeV: 'X' })
        }
        else {
            this.setState({ titularidadeV: '' })
        }
    }

    render() {
        return (
            <div style={{ fontSize: 18, margin: '10px' }}>
                <div style={{ textAlign: 'center' }}><label><b>ALTERAÇÃO DE SSID/SENHA</b></label></div>
                <label>
                    <b>
                        - Qual o modelo/marca do roteador?
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="modelo" value={this.state.modelo} onChange={(e) => this.setState({ modelo: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        - Deseja trocar o nome do wi-fi (SSID)? (Não pode conter caracteres especiais)
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="tnwifi" value={this.state.tnwifi} onChange={(e) => this.setState({ tnwifi: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        - Deseja trocar a senha do wi-fi? (Deve conter no mínimo 8 caracteres e não pode conter caracteres especiais)
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="tswifi" value={this.state.tswifi} onChange={(e) => this.setState({ tswifi: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        - Qual melhor horário ou período para receber o retorno do time de Suporte?
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
                        - Contato Principal:
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="contato1" value={this.state.contato1} onChange={(e) => this.setState({ contato1: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        - Checklist de confirmação de titularidade:
                    </b>
                </label>
                <br />
                <input type="checkbox" onChange={this.toggleChangeData} checked={this.state.isCheckedGrava} /> Data de vencimento
                <br />
                <input type="checkbox" onChange={this.toggleChangeEnde} checked={this.state.isCheckedHuggy} /> Endereço
                <br />
                <div style={{ textAlign: 'center' }}>
                    <Clipboard option-text={this.getTextSenh} onSuccess={this.onSuccess} >
                        COPIAR
                    </Clipboard>
                    <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div>
            </div >
        );
    }
}
export default AlteracaoSenha;