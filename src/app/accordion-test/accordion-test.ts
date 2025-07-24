// accordion-test.ts

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, KeyValuePipe, NgForOf } from '@angular/common'; // CommonModule para ter acesso ao NgFor e KeyValuePipe
import { TuiAccordion } from '@taiga-ui/experimental';

@Component({
  selector: 'app-accordion-test',
  standalone: true,
  imports: [
    CommonModule,   // Importe o CommonModule
    TuiAccordion    // Importe o componente/diretiva do Taiga
  ],
  templateUrl: './accordion-test.html',
  styleUrl: './accordion-test.css',
  changeDetection: ChangeDetectionStrategy.OnPush, // Boa prática, vinda do exemplo
})
export class AccordionTest {
    // Copie exatamente o objeto de dados do exemplo para dentro da sua classe
    protected readonly data = {
        'Taiga UI cdk':
            'Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities',
        'Taiga UI core':
            'Basic elements needed to develop components, directives and more using Taiga UI design system',
        'Taiga UI kit':
            'The main set of components used to build Taiga UI based Angular applications',
    };
}