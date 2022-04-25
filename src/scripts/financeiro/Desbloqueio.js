import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';

class Desbloqueio extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange9 = this.handleChange9.bind(this);
    this.getTextDesb = this.getTextDesb.bind(this);
    this.state = {
      comprovante: '',
      canais: '',
      tempo: '',
      contato1: '',
      contato2: '',
    };
  }

  getTextDesb() {
    return `DESBLOQUEIO 72 HORAS

- Enviou o comprovante de pagamento?
R: ${this.state.comprovante}
        
- Ciente do tempo provisório (72 horas)?
R: ${this.state.tempo}
        
- Ciente dos canais de pagamento? (App, Totem, Portal)
R: ${this.state.canais}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}`;
  }

  handleChange9() {
    this.setState({ contato1: '' });
    this.setState({ contato2: '' });
    this.setState({ motivo: '' });
    this.setState({ tempo: '' });
    this.setState({ canais: '' });
    this.setState({ comprovante: '' });
  }

  render() {
    return (
      <div style={{ fontSize: 18, margin:'10px' }}>
      <div style={{ textAlign: 'center' }}><label><b>DESBLOQUEIO</b></label></div>
        <label>
          <b>
          - Enviou o comprovante de pagamento?
          </b>
        </label>
        <br />
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='comprovante' name='comprovante' value='Sim'
          checked={this.state.comprovante === 'Sim'} onChange={(e) => this.setState({ comprovante: e.target.value })} /> Sim</div>
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='comprovanteN' name='comprovante' value='Não'
          checked={this.state.comprovante === 'Não'} onChange={(e) => this.setState({ comprovante: e.target.value })} /> Não</div>
        <br />
        <label>
          <b>
          - Ciente do tempo provisório (72 horas)?
          </b>
        </label>
        <br />
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='tempo' name='tempo' value='Sim'
          checked={this.state.tempo === 'Sim'} onChange={(e) => this.setState({ tempo: e.target.value })} /> Sim</div>
         <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='tempoN' name='tempo' value='Não'
          checked={this.state.tempo === 'Não'} onChange={(e) => this.setState({ tempo: e.target.value })} /> Não</div>
        <br />
        <label>
          <b>
          - Ciente dos canais de pagamento? (App, Totem, Portal)
          </b>
        </label>
        <br />
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='canais' name='canais' value='Sim'
          checked={this.state.canais === 'Sim'} onChange={(e) => this.setState({ canais: e.target.value })} /> Sim</div>
         <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <input type='radio' id='canaisN' name='canais' value='Não'
          checked={this.state.canais === 'Não'} onChange={(e) => this.setState({ canais: e.target.value })} /> Não</div>
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
         <div style={{ textAlign: 'center' }}>
          <Clipboard option-text={this.getTextDesb}>
            COPIAR
          </Clipboard>
          <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
        </div>
      </div>
    );
  }
}
export default Desbloqueio;