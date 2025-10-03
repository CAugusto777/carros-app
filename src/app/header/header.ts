import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit, OnDestroy {
  isMenuOpen = false;

  ngOnInit(): void {
    // Inicialização do componente
  }

  ngOnDestroy(): void {
    // Limpeza se necessário
    this.closeMenu();
  }

  // Alternar o estado do menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    
    // Prevenir scroll do body quando o menu estiver aberto
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  // Fechar o menu
  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  // Listener para redimensionamento da janela
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    // Fechar o menu se a tela for redimensionada para desktop
    if (event.target.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  // Listener para tecla ESC
  @HostListener('document:keydown', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
