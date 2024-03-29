import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from 'app/services/atendimento/atendimento.service';
import { PacienteService } from 'app/services/paciente/paciente.service';
import Chart from 'chart.js';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  public quantidadeAtendimentoMes = 0;
  public faturamentoMensal = 0;
  public quantidadeAtendimentoNegadoMes = 0;
  public quantidadeNovosPacientesMes = 0;


  constructor(private atendimentoService: AtendimentoService,
              private pacienteService: PacienteService){

  }

  buildAtendimentoDoMes(){
    this.atendimentoService.capturarQuantidadeAtendimentoMes()
    .subscribe(
      retorno => this.quantidadeAtendimentoMes = retorno);
  }

  buildAtendimentoNegadosDoMes(){
    this.atendimentoService.capturarQuantidadeAtendimentoNegadoMes()
    .subscribe(
      retorno => this.quantidadeAtendimentoNegadoMes = retorno);
  }

  buildFaturamentoMensal(){
    this.atendimentoService.capturarFaturamentoMensal()
    .subscribe(
      retorno => this.faturamentoMensal = retorno);
  }

  buildPacientesNovosMes(){
    this.pacienteService.capturarQuantidadeNovosPacientesMes()
    .subscribe(
      retorno => this.quantidadeNovosPacientesMes = retorno);
  }

  

    ngOnInit(){
      this.buildAtendimentoDoMes();
      this.buildAtendimentoNegadosDoMes();
      this.buildFaturamentoMensal();
      this.buildPacientesNovosMes();
      this.chartColor = "#FFFFFF";

      this.canvas = document.getElementById("chartHours");
      this.ctx = this.canvas.getContext("2d");

      this.chartHours = new Chart(this.ctx, {
        type: 'line',

        data: {
          labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
          datasets: [{
              borderColor: "#6bd098",
              backgroundColor: "#6bd098",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354, 338, 354]
            },
            {
              borderColor: "#f17e5d",
              backgroundColor: "#f17e5d",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420, 408, 420]
            },
            {
              borderColor: "#fcc468",
              backgroundColor: "#fcc468",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484, 478, 484]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                fontColor: "#9f9f9f",
                beginAtZero: false,
                maxTicksLimit: 5,
                //padding: 20
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "#ccc",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent",
                display: false,
              },
              ticks: {
                padding: 20,
                fontColor: "#9f9f9f"
              }
            }]
          },
        }
      });

    }
}
