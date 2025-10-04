import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CarroData {
  nome: string;
  ano: number;
  valor: string;
  velocidadeFinal: string;
  aceleracao: string;
  cor: string;
  imagem: string;
}

@Component({
  selector: 'app-comparar-carros',
  imports: [CommonModule],
  templateUrl: './comparar-carros.html',
  styleUrl: './comparar-carros.css'
})
export class CompararCarros implements OnInit, OnDestroy {
  
  // Dados dos carros com especificações detalhadas
  carrosData: { [key: number]: CarroData } = {
    1: {
      nome: "Mercedes AMG GT Black Series",
      ano: 2021,
      valor: "R$ 2.500.000",
      velocidadeFinal: "325 km/h",
      aceleracao: "3.2 segundos",
      cor: "Preto Obsidiana",
      imagem: "assets/IMG/2021-Mercedes-AMG-GT-Black-Series-009-2160-scaled.jpg"
    },
    2: {
      nome: "Lamborghini Huracán STO",
      ano: 2021,
      valor: "R$ 3.200.000",
      velocidadeFinal: "310 km/h",
      aceleracao: "3.0 segundos",
      cor: "Verde Mantis",
      imagem: "assets/IMG/STOVerde Mantis.jpg"
    },
    3: {
      nome: "Porsche 911 Carrera T",
      ano: 2023,
      valor: "R$ 950.000",
      velocidadeFinal: "291 km/h",
      aceleracao: "4.3 segundos",
      cor: "Branco Carrara",
      imagem: "assets/IMG/Porsche 911 Carrera T parked in a courtyard.jpg"
    },
    4: {
      nome: "Ford Mustang GTD",
      ano: 2025,
      valor: "R$ 2.300.000",
      velocidadeFinal: "325 km/h",
      aceleracao: "2.5 segundos",
      cor: "Performance White",
      imagem: "assets/IMG/Mustang-GTD-Spirit-of-America-2025_2.jpg"
    },
    5: {
      nome: "Audi R8 V10 Plus",
      ano: 2020,
      valor: "R$ 1.800.000",
      velocidadeFinal: "330 km/h",
      aceleracao: "3.1 segundos",
      cor: "Cinza Nardo",
      imagem: "assets/IMG/2020-audi-r8.jpg"
    },
    6: {
      nome: "Lamborghini Aventador SVJ",
      ano: 2019,
      valor: "R$ 5.500.000",
      velocidadeFinal: "350 km/h",
      aceleracao: "2.8 segundos",
      cor: "Verde Scandal",
      imagem: "assets/IMG/Verde Scandal.png"
    },
    7: {
      nome: "Porsche 911 Turbo S",
      ano: 2023,
      valor: "R$ 1.650.000",
      velocidadeFinal: "330 km/h",
      aceleracao: "2.7 segundos",
      cor: "Azul Gentian",
      imagem: "assets/IMG/porshe911-6104A1.jpg"
    },
    8: {
      nome: "Mercedes-Benz SLS AMG",
      ano: 2020,
      valor: "R$ 2.200.000",
      velocidadeFinal: "317 km/h",
      aceleracao: "3.7 segundos",
      cor: "Prata Iridium",
      imagem: "assets/IMG/mercedes-benz-sls-amg-black-series-.jpg"
    }
  };

  // Array para armazenar os carros selecionados
  carrosSelecionados: number[] = [];
  
  // Estado do modal
  modalAberto = false;

  // Estado do modal de alerta
  alertaAberto = false;
  mensagemAlerta = '';

  ngOnInit(): void {
    // Inicialização do componente
  }

  ngOnDestroy(): void {
    // Limpeza se necessário
    this.fecharModal();
    this.fecharAlerta();
  }

  // Verificar se um carro está selecionado
  isCarroSelecionado(carroId: number): boolean {
    return this.carrosSelecionados.includes(carroId);
  }

  // Alternar seleção de carro
  toggleCarroSelection(carroId: number): void {
    const index = this.carrosSelecionados.indexOf(carroId);
    
    if (index > -1) {
      // Remover o carro da lista de selecionados
      this.carrosSelecionados.splice(index, 1);
    } else {
      // Verificar se já existem 2 carros selecionados
      if (this.carrosSelecionados.length >= 2) {
        this.mostrarAlerta('Você só pode selecionar 2 carros para comparar!');
        return;
      }
      
      // Adicionar o carro à lista de selecionados
      this.carrosSelecionados.push(carroId);
    }
  }

  // Obter texto informativo
  getInfoText(): string {
    if (this.carrosSelecionados.length === 2) {
      return '2 carros selecionados - Clique para comparar';
    } else if (this.carrosSelecionados.length === 1) {
      return 'Selecione mais 1 carro para comparar';
    } else {
      return 'Selecione exatamente 2 carros para comparar';
    }
  }

  // Obter cor do texto informativo
  getInfoTextColor(): string {
    return this.carrosSelecionados.length === 2 ? '#667eea' : '#666';
  }

  // Mostrar comparação no modal
  mostrarComparacao(): void {
    if (this.carrosSelecionados.length === 2) {
      this.modalAberto = true;
      document.body.style.overflow = 'hidden'; // Prevenir scroll do body
    }
  }

  // Fechar modal
  fecharModal(event?: Event): void {
    // Se o evento foi passado, verificar se o clique foi no backdrop
    if (event && event.target !== event.currentTarget) {
      return;
    }
    
    this.modalAberto = false;
    document.body.style.overflow = 'auto'; // Restaurar scroll do body
  }

  // Mostrar alerta personalizado
  private mostrarAlerta(mensagem: string): void {
    this.mensagemAlerta = mensagem;
    this.alertaAberto = true;
    document.body.style.overflow = 'hidden';
  }

  // Fechar alerta
  fecharAlerta(event?: Event): void {
    // Se o evento foi passado, verificar se o clique foi no backdrop
    if (event && event.target !== event.currentTarget) {
      return;
    }
    
    this.alertaAberto = false;
    document.body.style.overflow = 'auto';
  }

  // Listener para tecla ESC
  @HostListener('document:keydown', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      if (this.modalAberto) {
        this.fecharModal();
      } else if (this.alertaAberto) {
        this.fecharAlerta();
      }
    }
  }

  // Método para limpar seleções
  limparSelecoes(): void {
    this.carrosSelecionados = [];
  }

  // Método para obter dados de um carro específico
  getCarroData(carroId: number): CarroData | null {
    return this.carrosData[carroId] || null;
  }

  // Método para verificar se pode comparar
  podeComparar(): boolean {
    return this.carrosSelecionados.length === 2;
  }

  // Método para obter estatísticas da comparação
  getEstatisticasComparacao(): any {
    if (this.carrosSelecionados.length !== 2) {
      return null;
    }

    const carro1 = this.carrosData[this.carrosSelecionados[0]];
    const carro2 = this.carrosData[this.carrosSelecionados[1]];

    return {
      maisRapido: this.compararAceleracao(carro1.aceleracao, carro2.aceleracao),
      maiorVelocidade: this.compararVelocidade(carro1.velocidadeFinal, carro2.velocidadeFinal),
      maisNovo: carro1.ano > carro2.ano ? carro1.nome : carro2.nome,
      maisCaroIndex: this.compararPreco(carro1.valor, carro2.valor)
    };
  }

  // Métodos auxiliares para comparação
  private compararAceleracao(aceleracao1: string, aceleracao2: string): string {
    const tempo1 = parseFloat(aceleracao1.replace(' segundos', ''));
    const tempo2 = parseFloat(aceleracao2.replace(' segundos', ''));
    
    const carro1 = this.carrosData[this.carrosSelecionados[0]];
    const carro2 = this.carrosData[this.carrosSelecionados[1]];
    
    return tempo1 < tempo2 ? carro1.nome : carro2.nome;
  }

  private compararVelocidade(velocidade1: string, velocidade2: string): string {
    const vel1 = parseFloat(velocidade1.replace(' km/h', ''));
    const vel2 = parseFloat(velocidade2.replace(' km/h', ''));
    
    const carro1 = this.carrosData[this.carrosSelecionados[0]];
    const carro2 = this.carrosData[this.carrosSelecionados[1]];
    
    return vel1 > vel2 ? carro1.nome : carro2.nome;
  }

  private compararPreco(preco1: string, preco2: string): number {
    const valor1 = parseFloat(preco1.replace(/[R$\s.]/g, '').replace(',', '.'));
    const valor2 = parseFloat(preco2.replace(/[R$\s.]/g, '').replace(',', '.'));
    
    return valor1 > valor2 ? 0 : 1;
  }
}