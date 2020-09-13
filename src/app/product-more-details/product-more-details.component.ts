import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-more-details',
  templateUrl: './product-more-details.component.html',
  styleUrls: ['./product-more-details.component.css']
})
export class ProductMoreDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}