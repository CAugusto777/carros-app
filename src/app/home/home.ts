// home.ts - VERSÃO CORRIGIDA
import { Component, OnInit, OnDestroy, ElementRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html', 
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {

  private readonly containerRef = viewChild.required<ElementRef<HTMLElement>>('carouselContainer'); 
  private readonly imagesRef = viewChild.required<ElementRef<HTMLElement>>('carouselImages'); 

  private currentIndex: number = 0;
  private totalImages: number = 0;
  private slideInterval: number = 5000;
  private autoSlideTimer: number | undefined;

  ngOnInit(): void {
    // Pequeno delay para garantir que o DOM esteja renderizado
    setTimeout(() => {
      this.initializeCarousel();
    }, 100);
  }
  
  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  private initializeCarousel(): void {
    const images = this.imagesRef().nativeElement.querySelectorAll('img');
    this.totalImages = images.length;

    if (this.totalImages <= 1) {
      console.warn('Carrossel com apenas um slide ou nenhum.');
      return; 
    }

    console.log('Carrossel inicializado com', this.totalImages, 'imagens');
    this.updateCarousel();
    this.startAutoSlide();
  }

  public updateCarousel(): void {
    const imagesRef = this.imagesRef();
    const containerRef = this.containerRef();
    
    if (!containerRef || !imagesRef) {
        return; 
    }
    
    const containerEl = containerRef.nativeElement;
    const imagesEl = imagesRef.nativeElement;
    
    const containerWidth: number = containerEl.clientWidth; 
    
    // CALCULA O DESLOCAMENTO CORRETO
    const translateX = - (this.currentIndex * 100);
    imagesEl.style.transform = `translateX(${translateX}%)`;
    
    console.log('Atualizando carrossel:', {
      currentIndex: this.currentIndex,
      containerWidth: containerWidth,
      translateX: translateX
    });
  }

  public nextSlide(): void {
    if (this.totalImages === 0) return;
    
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
    this.updateCarousel();
    this.resetTimer();
  }

  public prevSlide(): void {
    if (this.totalImages === 0) return;
    
    this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
    this.updateCarousel();
    this.resetTimer();
  }

  private showRandomSlide(): void {
    if (this.totalImages <= 1) return;
    
    let newIndex: number;
    do {
        newIndex = Math.floor(Math.random() * this.totalImages);
    } while (newIndex === this.currentIndex && this.totalImages > 1);
    
    this.currentIndex = newIndex;
    this.updateCarousel();
  }

  private startAutoSlide(): void {
    this.stopAutoSlide(); // Limpa qualquer timer existente
    this.autoSlideTimer = window.setInterval(() => {
      this.showRandomSlide();
    }, this.slideInterval);
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

  public onMouseEnter(): void {
    this.stopAutoSlide();
  }

  public onMouseLeave(): void {
    this.startAutoSlide();
  }

  // Adiciona listener para redimensionamento da janela
  public updateCarouselOnResize(): void {
    this.updateCarousel();
  }
}