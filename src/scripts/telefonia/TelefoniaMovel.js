import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';


class TelefoniaMovel extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextMovel = this.getTextMovel.bind(this);
        this.state = {
            contato1: '',
            mcontato: '',
            contato2: '',
            horario: '',
            numCel: '',
            descricao: '',
            cobertura: '',
        };
    }

    getTextMovel() {
        return `TELEFONIA FIXA

Descreva detalhadamente a reclamação/solicitação do cliente.
R: ${this.state.descricao}        
       
- Informe o número do celular que o cliente relata problema.
R: ${this.state.numCel}

- Para validar questões de cobertura: informe o endereço que o cliente se encontra no momento ou solicite localização se estiver no whatsapp?
R: ${this.state.cobertura}
        
- Qual melhor horário ou período para receber o retorno do time de Suporte?
R: ${this.state.horario}
        
Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}
        
- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
R: ${this.state.alertou}`;
    }

    handleChange9() {
        this.setState({ contato1: '' });
        this.setState({ mcontato: '' });
        this.setState({ contato2: '' });
        this.setState({ horario: '' });
        this.setState({ descricao: '' });
        this.setState({ numCel: '' });
        this.setState({ cobertura: '' });
        this.setState({ alertou: '' });
    }

    render() {
        return (
            <div style={{ fontSize: 18, margin: '10px' }}>
                <div style={{ textAlign: 'center' }}> <label><b>TELEFONIA MÓVEL</b></label>  </div>
                <br />
                <label>
                    <b>
                        Descreva detalhadamente  a reclamação/solicitação do cliente.
                    </b>
                    <br />
                    <textarea rows="3" cols="80" type="text" name="descricao" value={this.state.descricao} onChange={(e) => this.setState({ descricao: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        - Informe o número do celular que o cliente relata problema.
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="numCel" value={this.state.numCel} onChange={(e) => this.setState({ numCel: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        - Para validar questões de cobertura: informe o endereço que o cliente se encontra no momento ou solicite localização se estiver no whatsapp?
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="cobertura" value={this.state.cobertura} onChange={(e) => this.setState({ cobertura: e.target.value })} />
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
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
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
                        - Alertou o cliente, que é necessário atender o retorno do time de Suporte?
                    </b>
                </label>
                <br />
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='alertou' name='alertou' value='Sim'
                        checked={this.state.alertou === 'Sim'} onChange={(e) => this.setState({ alertou: e.target.value })} /> Sim</div>
                <div style={{ display: 'inline-block' }}>
                    <input type='radio' id='alertou' name='alertou' value='Nao'
                        checked={this.state.alertou === 'Nao'} onChange={(e) => this.setState({ alertou: e.target.value })} /> Não</div>
                <br />
                <div style={{ textAlign: 'center' }}>
                    <Clipboard option-text={this.getTextMovel}>
                        COPIAR
                    </Clipboard>
                    <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div>
            </div >
        );
    }
}
export default TelefoniaMovel;