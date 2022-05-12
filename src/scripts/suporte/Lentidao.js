import React from 'react';
import '../../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../../index.css';
import Clipboard from 'react-clipboard.js';


class Lentidao extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextLent = this.getTextLent.bind(this);
        this.state = {
            descricao: '',
            reboot: '',
            fonte: '',
            wifi: '',
            horario: '',
            contato1: '',
            contato2: '',
            mcontato: '',
            alertou: '',
            instabilidade: '',
            distancia: '',
            testes: '',
            dispositivos: '',
        };
    }

    getTextLent() {
        return `LENTIDÃO
    
Descreva detalhadamente  a reclamação/solicitação do cliente.
R: ${this.state.descricao}
    
- Existe alguma instabilidade ou incidente ocorrendo?
R: ${this.state.instabilidade}
    
- Conferiu a Fonte e Cabo de Energia, evitando mal contato ou desligamento?
R: ${this.state.fonte}
    
- Questionou sobre a Distância que utiliza?
R: ${this.state.distancia}
    
- Rebootou/Reiniciou o roteador? (Botão Power, desliga e  liga)
R: ${this.state.reboot}
    
- Realizou novos teste com o cliente? (navegação ou velocidade no site fast.com)
R: ${this.state.testes}
    
- Cliente utiliza quantos dispositivos no local? (celular, tv, tablet, notebook, videogame)
R: ${this.state.dispositivos}
    
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
        this.setState({ wifi: '' });
        this.setState({ horario: '' });
        this.setState({ mcontato: '' });
        this.setState({ alertou: '' });
        this.setState({ descricao: '' });
        this.setState({ instabilidade: '' });
        this.setState({ distancia: '' });
        this.setState({ testes: '' });
        this.setState({ dispositivos: '' });
    }

    render() {
        return (
            <div style={{ fontSize: 18, margin: '10px' }}>
                <div style={{ textAlign: 'center' }}><label ><b>LENTIDÃO</b></label></div>
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
                        - Existe alguma instabilidade ou incidente ocorrendo?
                    </b>
                    <br />
                    <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='instabilidade' name='instabilidade' value='Sim'
                        checked={this.state.instabilidade === 'Sim'} onChange={(e) => this.setState({ instabilidade: e.target.value })} /> Sim</div>
                                       <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='instabilidade' name='instabilidade' value='Nao'
                        checked={this.state.instabilidade === 'Nao'} onChange={(e) => this.setState({ instabilidade: e.target.value })} /> Não</div>
                </label>
                <br />
                <label>
                    <b>
                        - Conferiu a Fonte e Cabo de Energia, evitando mal contato ou desligamento?
                    </b>
                    <br />
                    <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='fonte' name='fonte' value='Sim'
                        checked={this.state.fonte === 'Sim'} onChange={(e) => this.setState({ fonte: e.target.value })} /> Sim</div>
                      <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='fonte' name='fonte' value='Nao'
                        checked={this.state.fonte === 'Nao'} onChange={(e) => this.setState({ fonte: e.target.value })} /> Não</div>
                </label>
                <br />
                <label>
                    <b>
                        - Questionou sobre a Distância que utiliza?
                    </b>
                    <br />
                    <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='distancia' name='distancia' value='Sim'
                        checked={this.state.distancia === 'Sim'} onChange={(e) => this.setState({ distancia: e.target.value })} /> Sim</div>
                     <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='distancia' name='distancia' value='Nao'
                        checked={this.state.distancia === 'Nao'} onChange={(e) => this.setState({ distancia: e.target.value })} /> Não</div>
                </label>
                <br />
                <label>
                    <b>
                        - Rebootou/Reiniciou o roteador? (Botão Power, desliga e  liga)
                    </b>
                    <br />
                    <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='reboot' name='reboot' value='Sim'
                        checked={this.state.reboot === 'Sim'} onChange={(e) => this.setState({ reboot: e.target.value })} /> Sim</div>
                       <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='reboot' name='reboot' value='Nao'
                        checked={this.state.reboot === 'Nao'} onChange={(e) => this.setState({ reboot: e.target.value })} /> Não</div>
                </label>
                <br />
                <label>
                    <b>
                        - Realizou novos teste com o cliente? (navegação ou velocidade no site fast.com)
                    </b>
                    <br />
                    <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='testes' name='testes' value='Sim'
                        checked={this.state.testes === 'Sim'} onChange={(e) => this.setState({ testes: e.target.value })} /> Sim</div>
                       <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='testes' name='testes' value='Nao'
                        checked={this.state.testes === 'Nao'} onChange={(e) => this.setState({ testes: e.target.value })} /> Não</div>
                </label>
                <br />
                <label>
                    <b>
                        - Cliente utiliza quantos dispositivos no local? (celular, tv, tablet, notebook, videogame)
                    </b>
                    <br />
                    <input type="text" style={{ width:400 }}name="dispositivos" value={this.state.dispositivos} onChange={(e) => this.setState({ dispositivos: e.target.value })} />
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
                    <Clipboard option-text={this.getTextLent} onSuccess={this.onSuccess} >
                        COPIAR
                    </Clipboard>
                    <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div>
            </div >
        );
    }
}
export default Lentidao;