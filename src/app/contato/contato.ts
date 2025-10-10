import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

interface SuggestionForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  message: string;
  priority: string;
  newsletter: boolean;
  lgpdAccepted: boolean;
}

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contato.html',
  styleUrls: ['./contato.css']
})
export class Contato {
  suggestionForm: SuggestionForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'geral',
    message: '',
    priority: 'normal',
    newsletter: false,
    lgpdAccepted: false
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  showLgpdModal = false;

  categories = [
    { value: 'geral', label: 'Sugestão Geral' },
    { value: 'parceria', label: 'Parceria' },
    { value: 'reclamacao', label: 'Reclamação' },
    { value: 'elogio', label: 'Elogio' }
  ];

  priorities = [
    { value: 'baixa', label: 'Baixa' },
    { value: 'normal', label: 'Normal' },
    { value: 'alta', label: 'Alta' },
    { value: 'urgente', label: 'Urgente' }
  ];

  onSubmit() {
    if (this.isFormValid()) {
      this.isSubmitting = true;
      this.submitError = false;
      
      // Simular envio do formulário
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.resetForm();
        
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      }, 2000);
    }
  }

  isFormValid(): boolean {
    return !!(
      this.suggestionForm.name.trim() &&
      this.suggestionForm.email.trim() &&
      this.suggestionForm.message.trim() &&
      this.suggestionForm.lgpdAccepted &&
      this.isValidEmail(this.suggestionForm.email)
    );
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  resetForm() {
    this.suggestionForm = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: 'geral',
      message: '',
      priority: 'normal',
      newsletter: false,
      lgpdAccepted: false
    };
  }

  formatPhone(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
      if (value.length <= 2) {
        value = value.replace(/(\d{0,2})/, '($1');
      } else if (value.length <= 7) {
        value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
      } else {
        value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
      }
    }
    
    this.suggestionForm.phone = value;
  }

  getCharacterCount(): number {
    return this.suggestionForm.message.length;
  }

  getCharacterCountClass(): string {
    const count = this.getCharacterCount();
    if (count > 450) return 'text-danger';
    if (count > 400) return 'text-warning';
    return 'text-muted';
  }

  openLgpdModal() {
    this.showLgpdModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeLgpdModal() {
    this.showLgpdModal = false;
    document.body.style.overflow = '';
  }

  // Novo método para prevenir fechamento ao clicar no conteúdo
  onModalContentClick(event: Event) {
    event.stopPropagation();
  }
}