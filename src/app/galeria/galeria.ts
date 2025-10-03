import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class Galeria implements OnInit, OnDestroy {
  currentSlide = 0;
  totalSlides = 5;
  autoSlideInterval: any;
  isAutoSliding = true;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateSlide();
    this.resetAutoSlide();
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
    this.updateSlide();
    this.resetAutoSlide();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateSlide();
    this.resetAutoSlide();
  }

  private updateSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === this.currentSlide);
    });
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentSlide);
    });
  }

  private startAutoSlide() {
    if (this.isAutoSliding) {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000); // Muda slide a cada 5 segundos
    }
  }

  private stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  private resetAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  toggleAutoSlide() {
    this.isAutoSliding = !this.isAutoSliding;
    if (this.isAutoSliding) {
      this.startAutoSlide();
    } else {
      this.stopAutoSlide();
    }
  }

  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  handleFileSelect(event: any) {
    const files = event.target.files;
    const fileInfo = document.getElementById('fileInfo');
    
    if (files && files.length > 0) {
      let fileNames = '';
      for (let i = 0; i < files.length; i++) {
        fileNames += files[i].name;
        if (i < files.length - 1) fileNames += ', ';
      }
      
      if (fileInfo) {
        fileInfo.textContent = `${files.length} arquivo(s) selecionado(s): ${fileNames}`;
        fileInfo.classList.add('success');
      }
      
      // Simular upload (aqui você pode implementar a lógica real de upload)
      setTimeout(() => {
        if (fileInfo) {
          fileInfo.textContent = 'Upload realizado com sucesso!';
        }
      }, 2000);
    }
  }
}
