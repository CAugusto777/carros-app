import { Component, OnInit, OnDestroy, ElementRef, viewChild } from '@angular/core';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html', 
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy { // Nome de classe PascalCase

  // Acessa o elemento DOM principal referenciado com #carouselContainer no HTML
  private readonly containerRef = viewChild.required<ElementRef<HTMLElement>>('carouselContainer'); 

  // Acessa a div interna das imagens
  private readonly imagesRef = viewChild.required<ElementRef<HTMLElement>>('carouselImages'); 

  // Referências para os botões
  private readonly prevButton = viewChild.required<ElementRef<HTMLElement>>('prevButton');
  private readonly nextButton = viewChild.required<ElementRef<HTMLElement>>('nextButton');

  // 1. Variáveis de Estado
  private currentIndex: number = 0;
  private totalImages: number = 0;
  private slideInterval: number = 5000; // Aumentei o intervalo para 5s
  private autoSlideTimer: number | undefined; 

  // 2. Método do Ciclo de Vida: Inicialização
  ngOnInit(): void {
    // Busca as imagens dentro do contêiner após a view ser inicializada
    const images = this.imagesRef().nativeElement.querySelectorAll('img');
    this.totalImages = images.length;

    if (this.totalImages <= 1) {
      console.warn('Carrossel desativado: elementos DOM ausentes ou apenas um slide.');
      // Oculta botões via CSS se não houver lógica Angular para isso.
      return; 
    }

    this.initialize();
  }
  
  // 3. Método do Ciclo de Vida: Limpeza
  ngOnDestroy(): void {
    this.stopAutoSlide(); // Garante que o timer seja limpo
  }

  // 4. Funções de Controle e Lógica
  
  public updateCarousel(): void {
    // VERIFICAÇÃO DE SEGURANÇA
    const imagesRef = this.imagesRef();
    const containerRef = this.containerRef();
    if (!containerRef || !imagesRef) {
        console.error('Erro: Elementos do Carrossel não carregados (containerRef ou imagesRef).');
        return; 
    }
    
    // Acesso ao elemento nativo
    const containerEl = containerRef.nativeElement;
    const imagesEl = imagesRef.nativeElement;
    
    // 1. Calcula a largura do contêiner (e, portanto, de um slide)
    const containerWidth: number = containerEl.clientWidth; 

    // 2. Aplica a transformação com interpolação
    imagesEl.style.transform = 
        `translateX(-${containerWidth * this.currentIndex}px)`;
}

  public nextSlide(): void { // Pode ser público para o HTML
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
    this.updateCarousel();
    this.resetTimer();
  }

  public prevSlide(): void { // Pode ser público para o HTML
    this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
    this.updateCarousel();
    this.resetTimer();
  }

  // Mantendo o slide aleatório
  private showRandomSlide(): void {
      let newIndex: number;
      do {
          newIndex = Math.floor(Math.random() * this.totalImages);
      } while (newIndex === this.currentIndex);
      this.currentIndex = newIndex;
      this.updateCarousel();
  }

  // 5. Funções de Controle do Timer

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
  
  // 6. Inicialização (Agrupando lógica de attachEventListeners)
  private initialize(): void {
    // O Angular usa o template HTML para anexar eventos (veja o HTML de exemplo abaixo)
    this.updateCarousel();
    this.startAutoSlide(); 
  }

  // Funções de manipulação de mouse (que serão chamadas no HTML)
  public onMouseEnter(): void {
    this.stopAutoSlide();
  }

  public onMouseLeave(): void {
    this.startAutoSlide();
  }
}