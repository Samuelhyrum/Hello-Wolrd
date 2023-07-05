import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit{
  
  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      const id: string | null = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.productService.readById(id).subscribe(
          product => {
            this.product = product;
          },
          error => {
            console.error(error); // Lida com possíveis erros na chamada do serviço
          }
        );
      } else {
        console.error('ID não foi fornecido'); // Lida com o caso em que o ID é nulo
      }
    }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage("Produto excluido com Sucesso")
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
