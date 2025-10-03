import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class carrosel {

  // 1. Elementos DOM (Tipados para garantir que não são null e são do tipo correto)
  private carouselContainer: HTMLElement;
  private carouselImages: HTMLElement;
  private prevButton: HTMLElement;
  private nextButton: HTMLElement;
  private images: NodeListOf<HTMLImageElement>;

  // 2. Variáveis de Estado
  private currentIndex: number = 0;
  private totalImages: number;
  private slideInterval: number = 2000;
  // O tipo de retorno de setInterval() em um ambiente de navegador é 'number'
  private autoSlideTimer: number | undefined; 

  /**
   * O construtor busca os elementos DOM e inicializa o carrossel.
   * @param selector O seletor CSS do contêiner principal do carrossel (ex: '.carrosel')
   */
  constructor(selector: string) {
      // Assegura que os elementos sejam HTMLElement (Non-Null Assertion e Casting)
      this.carouselContainer = document.querySelector(selector) as HTMLElement;
      this.carouselImages = this.carouselContainer.querySelector('.carousel-images') as HTMLElement;
      this.prevButton = this.carouselContainer.querySelector('.prev') as HTMLElement;
      this.nextButton = this.carouselContainer.querySelector('.next') as HTMLElement;
      this.images = this.carouselContainer.querySelectorAll('.carousel-images img');

      this.totalImages = this.images.length;
      
      // Se a validação falhar, desativa o carrossel e retorna
      if (!this.carouselContainer || this.totalImages <= 1) {
          console.warn('Carrossel desativado: elementos DOM ausentes ou apenas um slide.');
          if(this.prevButton) this.prevButton.style.display = 'none';
          if(this.nextButton) this.nextButton.style.display = 'none';
          return;
      }

      this.initialize();
  }

  // 3. Funções Principais

  /**
   * Atualiza a posição do carrossel usando 'transform: translateX()'.
   */
  private updateCarousel(): void {
      const imageWidth: number = this.carouselContainer.clientWidth;
      // Usa 'this.' para acessar as propriedades da classe
      this.carouselImages.style.transform = `translateX(-${imageWidth * this.currentIndex}px)`;
  }

  /**
   * Move para um slide aleatório diferente do atual.
   */
  private showRandomSlide(): void {
      let newIndex: number;
      do {
          newIndex = Math.floor(Math.random() * this.totalImages);
      } while (newIndex === this.currentIndex);
      this.currentIndex = newIndex;
      this.updateCarousel();
  }

  /**
   * Move para o próximo slide (volta ao primeiro após o último).
   */
  private nextSlide(): void {
      this.currentIndex = (this.currentIndex + 1) % this.totalImages;
      this.updateCarousel();
  }

  /**
   * Move para o slide anterior (vai para o último após o primeiro).
   */
  private prevSlide(): void {
      this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
      this.updateCarousel();
  }

  // 4. Funções de Controle do Timer

  private startAutoSlide(): void {
      // Usa window.setInterval para tipar corretamente o retorno
      this.autoSlideTimer = window.setInterval(() => this.showRandomSlide(), this.slideInterval);
  }

  private stopAutoSlide(): void {
      if (this.autoSlideTimer !== undefined) {
          window.clearInterval(this.autoSlideTimer);
          this.autoSlideTimer = undefined; 
      }
  }

  private resetTimer(): void {
      this.stopAutoSlide();
      this.startAutoSlide();
  }

  // 5. Configuração de Eventos

  /**
   * Anexa todos os listeners de eventos aos elementos.
   */
  private attachEventListeners(): void {
      // Arrow functions são usadas para garantir que 'this' se refere à classe 'Carousel'
      this.nextButton.addEventListener('click', () => {
          this.nextSlide();
          this.resetTimer();
      });

      this.prevButton.addEventListener('click', () => {
          this.prevSlide();
          this.resetTimer();
      });

      this.carouselContainer.addEventListener('mouseenter', () => this.stopAutoSlide());
      this.carouselContainer.addEventListener('mouseleave', () => this.startAutoSlide());

      // Evento de redimensionamento para ajustar a posição do slide
      window.addEventListener('resize', () => this.updateCarousel());
  }

  // 6. Inicialização

  private initialize(): void {
      this.attachEventListeners();
      this.updateCarousel(); // Ajusta a posição inicial
      this.startAutoSlide(); // Inicia o timer
  }
}

// Inicialização do Carrossel: Aguarda o carregamento do DOM para instanciar a classe.
document.addEventListener('DOMContentLoaded', () => {
  // Cria uma nova instância da classe Carousel, usando o seletor da div principal.
  new carrosel('.carrosel');
});
  
