import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';


class Lentidao extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange9 = this.handleChange9.bind(this);
    this.getTextQued = this.getTextQued.bind(this);
    this.state = {
      descricao: '',
      fonte: '',
      horario: '',
      contato1: '',
      contato2: '',
      mcontato: '',
      alertou: '',
      log: '',
      lossModem: '',
      cabo: '',
      wifi: '',
    };
  }

  getTextQued() {
    return `QUEDAS
    
Descreva detalhadamente  a reclamação/solicitação do cliente.
R: ${this.state.descricao}
    
- No Log de Sessões, consta interrupções (várias quedas no PPPoE)?
R: ${this.state.log}
    
- Existe o indicador de LOS no Modem de Fibra ? (Luz Piscando em Vermelho)?
R: ${this.state.lossModem}
    
- Checou a posição do Cabo de Rede que vai para o roteador, se está bem encaixado e na porta WAN?
R: ${this.state.cabo}
    
- Conferiu fonte de energia/tomada da ONU e Roteador, evitando mal contato ou desligamento?
R: ${this.state.fonte}
    
- O nome do WiFi chega a “desaparecer” quando sente a Queda?
R: ${this.state.wifi}
    
- Qual melhor horário ou período para receber o retorno do time de Suporte?
R: ${this.state.horario}
    
Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}
    
- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
R: ${this.state.alertou}
`;
  }

  handleChange9() {
    this.setState({ reboot: '' });
    this.setState({ fonte: '' });
    this.setState({ contato1: '' });
    this.setState({ contato2: '' });
    this.setState({ horario: '' });
    this.setState({ mcontato: '' });
    this.setState({ alertou: '' });
    this.setState({ descricao: '' });
    this.setState({ log: '' });
    this.setState({ lossModem: '' });
    this.setState({ cabo: '' });
    this.setState({ wifi: '' });
  }

  render() {
    return (
      <div style={{ fontSize: 18, margin: '10px' }}>
        <div style={{ textAlign: 'center' }}><label><b>QUEDAS</b></label></div>
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
            No Log de Sessões, consta interrupções (várias quedas no PPPoE)?
          </b>
        </label>
        <br />
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='log' name='log' value='Sim'
          checked={this.state.log === 'Sim'} onChange={(e) => this.setState({ log: e.target.value })} /> Sim</div>
          <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='logN' name='log' value='Não'
          checked={this.state.log === 'Não'} onChange={(e) => this.setState({ log: e.target.value })} /> Não</div>
        <br />
        <label>
          <b>
            Existe o indicador de LOS no Modem de Fibra ? (Luz Piscando em Vermelho)
          </b>
        </label>
        <br />
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='lossModem' name='lossModem' value='Sim'
          checked={this.state.lossModem === 'Sim'} onChange={(e) => this.setState({ lossModem: e.target.value })} /> Sim</div>
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='lossModemN' name='lossModem' value='Não'
          checked={this.state.lossModem === 'Não'} onChange={(e) => this.setState({ lossModem: e.target.value })} /> Não</div>
        <br />
        <label>
          <b>
            Checou a posição do Cabo de Rede que vai para o roteador, se está bem encaixado e na porta WAN?
          </b>
        </label>
        <br />
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='cabo' name='cabo' value='Sim'
          checked={this.state.cabo === 'Sim'} onChange={(e) => this.setState({ cabo: e.target.value })} /> Sim</div>
         <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='caboN' name='cabo' value='Não'
          checked={this.state.cabo === 'Não'} onChange={(e) => this.setState({ cabo: e.target.value })} /> Não</div>
        <br />
        <label>
          <b>
            Conferiu fonte de energia/tomada da ONU e Roteador, evitando mal contato ou desligamento?
          </b>
        </label>
        <br />
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='fonte' name='fonte' value='Sim'
          checked={this.state.fonte === 'Sim'} onChange={(e) => this.setState({ fonte: e.target.value })} /> Sim</div>
          <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='fonteN' name='fonte' value='Não'
          checked={this.state.fonte === 'Não'} onChange={(e) => this.setState({ fonte: e.target.value })} /> Não</div>
        <br />
        <label>
          <b>
            O nome do WiFi chega a “desaparecer” quando sente a Queda?
          </b>
        </label>
        <br />
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='wifi' name='wifi' value='Sim'
          checked={this.state.wifi === 'Sim'} onChange={(e) => this.setState({ wifi: e.target.value })} /> Sim</div>
          <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='wifiN' name='wifi' value='Não'
          checked={this.state.wifi === 'Não'} onChange={(e) => this.setState({ wifi: e.target.value })} /> Não</div>
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
          <Clipboard option-text={this.getTextQued} onSuccess={this.onSuccess} >
            COPIAR
          </Clipboard>
          <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
        </div >
      </div >
    );
  }
}
export default Lentidao;