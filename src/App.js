import React from 'react';
import './App.css';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdownLink } from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css';

import Desconexao from "./scripts/suporte/Desconexao"
import Lentidao from "./scripts/suporte/Lentidao"
import Quedas from "./scripts/suporte/Quedas"
import RoteadorDesconfig from "./scripts/suporte/RoteadorDesconfig"
import AlteracaoSenha from "./scripts/suporte/AlteracaoSenha"
import TelefoniaFixo from "./scripts/telefonia/TelefoniaFixo"
import TelefoniaMovel from "./scripts/telefonia/TelefoniaMovel"
import LentidaoQuedas from "./scripts/operações/LentidaoQuedas"
import LinkLoss from "./scripts/operações/LinkLoss"
import SinalAtenuado from "./scripts/operações/SinalAtenuado"
import ProblemasSites from "./scripts/noc/ProblemasSites"
import RedirecionamentoPortas from "./scripts/noc/RedirecionamentoPortas"
import AlterarVencimento from "./scripts/financeiro/AlterarVencimento"
import ContestacaoFinanceira from "./scripts/financeiro/ContestacaoFinanceira"
import Desbloqueio from "./scripts/financeiro/Desbloqueio"
import DescontoSLARompido from "./scripts/financeiro/DescontoSLARompido"
import NegociacaoDivida from "./scripts/financeiro/NegociacaoDivida"
import AlteracaoEndereco from "./scripts/comercial/AlteracaoEndereco"
import Cancelamento from "./scripts/comercial/Cancelamento"
import MudancaEnderecoGrupo from "./scripts/comercial/MudancaEnderecoGrupo"
import ReativacaoContrato from "./scripts/comercial/ReativacaoContrato"
import SuspencaoTemporaria from "./scripts/comercial/SuspencaoTemporaria"
import TransferenciaEndereco from "./scripts/comercial/TransferenciaEndereco"
import Upgrade from "./scripts/comercial/Upgrade"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { showingDesc } = this.state;
    const { showingLent } = this.state;
    const { showingQued } = this.state;
    const { showingDesb } = this.state;
    const { showingProb } = this.state;
    const { showingRote } = this.state;
    const { showingSenh } = this.state;
    const { showingRedi } = this.state;
    const { showingLoss } = this.state;
    const { showingAten } = this.state;
    const { showingAlte } = this.state;
    const { showingNego } = this.state;
    const { showingFina } = this.state;
    const { showingCanc } = this.state;
    const { showingTran } = this.state;
    const { showingEnde } = this.state;
    const { showingFixo } = this.state;
    const { showingMovel } = this.state;
    const { showingReco } = this.state;
    const { showingUpgr } = this.state;
    const { showingMugr } = this.state;
    const { showingSute } = this.state;
    const { showingDeco } = this.state;
    const { showingLequ } = this.state;
    const { showingSina } = this.state;

    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#282c34' }}>
        <header>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-evenly' }}>
            <MDBDropdown>
              <MDBDropdownToggle caret color="info">
                Comercial
              </MDBDropdownToggle>
              <MDBDropdownMenu basic>

                <MDBDropdownItem onClick={() => this.setState({ showingCanc: !showingCanc })}>
                  <MDBDropdownLink tag='button' type='button'>
                    CANCELAMENTO
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingTran: !showingTran })}>
                  <MDBDropdownLink tag='button' type='button'>
                    TRANSFERÊNCIA DE ENDEREÇO
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingEnde: !showingEnde })}>
                  <MDBDropdownLink tag='button' type='button'>
                    ALTERAÇÃO DE ENDEREÇO
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingReco: !showingReco })}>
                  <MDBDropdownLink tag='button' type='button'>
                    REATIVAÇÃO DE CONTRATO
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingSute: !showingSute })}>
                  <MDBDropdownLink tag='button' type='button'>
                    SUSPENÇÃO TEMPORÁRIA
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingMugr: !showingMugr })}>
                  <MDBDropdownLink tag='button' type='button'>
                    MUDANÇA DE ENDEREÇO ENTRE GRUPO
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingUpgr: !showingUpgr })}>
                  <MDBDropdownLink tag='button' type='button'>
                    LEAD: UPGRADE/DOWNGRADE
                  </MDBDropdownLink>
                </MDBDropdownItem>

              </MDBDropdownMenu>
            </MDBDropdown>

            <MDBDropdown>
              <MDBDropdownToggle caret color="info">Suporte Técnico</MDBDropdownToggle>
              <MDBDropdownMenu basic>

                <MDBDropdownItem onClick={() => this.setState({ showingDesc: !showingDesc })}>
                  <MDBDropdownLink tag='button' type='button'>
                    DESCONEXÃO
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingLent: !showingLent })}>
                  <MDBDropdownLink tag='button' type='button'>
                    LENTIDÃO
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingQued: !showingQued })}>
                  <MDBDropdownLink tag='button' type='button'>
                    QUEDAS
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingRote: !showingRote })}>
                  <MDBDropdownLink tag='button' type='button'>
                    ROTEADOR DESCONFIGURADO
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingSenh: !showingSenh })}>
                  <MDBDropdownLink tag='button' type='button'>
                    ALTERAÇÃO DE SSID/SENHA
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingAten: !showingAten })}>
                  <MDBDropdownLink tag='button' type='button'>
                    SINAL ATENUADO
                  </MDBDropdownLink>
                </MDBDropdownItem>

              </MDBDropdownMenu>
            </MDBDropdown>

            <MDBDropdown>
              <MDBDropdownToggle caret color="info">Financeiro</MDBDropdownToggle>
              <MDBDropdownMenu basic>

                <MDBDropdownItem onClick={() => this.setState({ showingDesb: !showingDesb })}>
                  <MDBDropdownLink tag='button' type='button'>
                    DESBLOQUEIO
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingAlte: !showingAlte })}>
                  <MDBDropdownLink tag='button' type='button'>
                    ALTERAR VENCIMENTO
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingNego: !showingNego })}>
                  <MDBDropdownLink tag='button' type='button'>
                    NEGOCIAÇÃO DE DÍVIDA
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingFina: !showingFina })}>
                  <MDBDropdownLink tag='button' type='button'>
                    CONTESTAÇÃO FINANCEIRA
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingDeco: !showingDeco })}>
                  <MDBDropdownLink tag='button' type='button'>
                    DESCONTO -  DESCONTO POR SLA ROMPIDO
                  </MDBDropdownLink>
                </MDBDropdownItem>

              </MDBDropdownMenu>
            </MDBDropdown>

            <MDBDropdown>
              <MDBDropdownToggle caret color="info">Telefonia</MDBDropdownToggle>
              <MDBDropdownMenu basic>

                <MDBDropdownItem onClick={() => this.setState({ showingFixo: !showingFixo })}>
                  <MDBDropdownLink tag='button' type='button'>
                    TELEFONIA FIXA
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingMovel: !showingMovel })}>
                  <MDBDropdownLink tag='button' type='button'>
                    TELEFONIA MÓVEL
                  </MDBDropdownLink>
                </MDBDropdownItem>

              </MDBDropdownMenu>
            </MDBDropdown>

            <MDBDropdown>
              <MDBDropdownToggle caret color="info">NOC</MDBDropdownToggle>
              <MDBDropdownMenu basic>

                <MDBDropdownItem onClick={() => this.setState({ showingProb: !showingProb })}>
                  <MDBDropdownLink tag='button' type='button'>
                    PROBLEMAS PARA ACESSAR SITE
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingRedi: !showingRedi })}>
                  <MDBDropdownLink tag='button' type='button'>
                    REDIRECIONAMENTO DE PORTAS
                  </MDBDropdownLink>
                </MDBDropdownItem>

              </MDBDropdownMenu>
            </MDBDropdown>

            <MDBDropdown>
              <MDBDropdownToggle caret color="info">Operações</MDBDropdownToggle>
              <MDBDropdownMenu basic>

                <MDBDropdownItem onClick={() => this.setState({ showingLoss: !showingLoss })}>
                  <MDBDropdownLink tag='button' type='button'>
                    MANUTENÇÃO - LINK LOSS
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingSina: !showingSina })}>
                  <MDBDropdownLink tag='button' type='button'>
                    MANUTENÇÃO - SINAL ATENUADO
                  </MDBDropdownLink>
                </MDBDropdownItem>

                <MDBDropdownItem onClick={() => this.setState({ showingLequ: !showingLequ })}>
                  <MDBDropdownLink tag='button' type='button'>
                    MANUTENÇÃO - LENTIDÃO/QUEDAS
                  </MDBDropdownLink>
                </MDBDropdownItem>

              </MDBDropdownMenu>
            </MDBDropdown>
          </div>

          <div style={{ flexDirection: 'column', margin: '5px' }}>
            <div>
              {showingSina
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingSina: !showingSina })}>X</button>
                    </div>
                    <SinalAtenuado />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingLequ
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingLequ: !showingLequ })}>X</button>
                    </div>
                    <LentidaoQuedas />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingDeco
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingDeco: !showingDeco })}>X</button>
                    </div>
                    <DescontoSLARompido />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingSute
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingSute: !showingSute })}>X</button>
                    </div>
                    <SuspencaoTemporaria />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingMugr
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingMugr: !showingMugr })}>X</button>
                    </div>
                    <MudancaEnderecoGrupo />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingUpgr
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingUpgr: !showingUpgr })}>X</button>
                    </div>
                    <Upgrade />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingReco
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingReco: !showingReco })}>X</button>
                    </div>
                    <ReativacaoContrato />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingDesc
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingDesc: !showingDesc })}>X</button>
                    </div>
                    <Desconexao />
                  </div>
                </div>
                : null
              }
            </div>


            <div>
              {showingLent
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingLent: !showingLent })}>X</button>
                    </div>
                    <Lentidao />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingMovel
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingMovel: !showingMovel })}>X</button>
                    </div>
                    <TelefoniaMovel />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingFixo
                ? <div>
                    <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingFixo: !showingFixo })}>X</button>
                    </div>
                    <TelefoniaFixo />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingQued
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingQued: !showingQued })}>X</button>
                    </div>
                    <Quedas />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingProb
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingProb: !showingProb })}>X</button>
                    </div>
                    <ProblemasSites />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingRote
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingRote: !showingRote })}>X</button>
                    </div>
                    <RoteadorDesconfig />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingSenh
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingSenh: !showingSenh })}>X</button>
                    </div>
                    <AlteracaoSenha />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingRedi
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingRedi: !showingRedi })}>X</button>
                    </div>
                    <RedirecionamentoPortas />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingLoss
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingLoss: !showingLoss })}>X</button>
                    </div>
                    <LinkLoss />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingAten
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingAten: !showingAten })}>X</button>
                    </div>
                    <SinalAtenuado />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingDesb
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingDesb: !showingDesb })}>X</button>
                    </div>
                    <Desbloqueio />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingAlte
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingAlte: !showingAlte })}>X</button>
                    </div>
                    <AlterarVencimento />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingNego
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingNego: !showingNego })}>X</button>
                    </div>
                    <NegociacaoDivida />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingFina
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingFina: !showingFina })}>X</button>
                    </div>
                    <ContestacaoFinanceira />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingCanc
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingCanc: !showingCanc })}>X</button>
                    </div>
                    <Cancelamento />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingTran
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingTran: !showingTran })}>X</button>
                    </div>
                    <TransferenciaEndereco />
                  </div>
                </div>
                : null
              }
            </div>

            <div>
              {showingEnde
                ? <div>
                  <div style={{ color: "white", border: "5px solid", borderColor: "#a36a00" }}>
                    <div style={{ textAlign: 'center' }}>
                      <button onClick={() => this.setState({ showingEnde: !showingEnde })}>X</button>
                    </div>
                    <AlteracaoEndereco />
                  </div>
                </div>
                : null
              }
            </div>
          </div>
        </header>
      </div>
    );
  }
}


export default App;