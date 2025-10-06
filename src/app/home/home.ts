// home.ts - VERSÃO SIMPLIFICADA E FUNCIONAL
import { Component, OnInit, OnDestroy, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html', 
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {

  @ViewChild('carouselImages') carouselImages!: ElementRef<HTMLDivElement>;

  currentIndex: number = 0;
  totalImages: number = 4; // Defina manualmente ou calcule dinamicamente
  private autoSlideTimer: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }
  
  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  @HostListener('window:resize')
  onResize(): void {
    // Força uma re-renderização
    this.updateCarousel();
  }

  updateCarousel(): void {
    if (!this.carouselImages) return;
    
    const translateX = -this.currentIndex * 100;
    this.carouselImages.nativeElement.style.transform = `translateX(${translateX}%)`;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
    this.updateCarousel();
    this.resetTimer();
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
    this.updateCarousel();
    this.resetTimer();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.updateCarousel();
    this.resetTimer();
  }

  private startAutoSlide(): void {
    this.stopAutoSlide();
    this.autoSlideTimer = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  private stopAutoSlide(): void {
    if (this.autoSlideTimer) {
      clearInterval(this.autoSlideTimer);
    }
  }

  private resetTimer(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  onMouseEnter(): void {
    this.stopAutoSlide();
  }

  onMouseLeave(): void {
    this.startAutoSlide();
  }
}