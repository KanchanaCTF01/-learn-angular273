import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MatSortModule } from '@angular/material/sort';

import { DashboardComponent as dashboard } from './dashboard/dashboard.component';

import { ProductsComponent as catalogProducts } from './catalog/products/products.component';
import { CategoriesComponent as catalogCategories } from './catalog/categories/categories.component';
import { ManufacturersComponent as catalogManufacturers } from './catalog/manufacturers/manufacturers.component';
import { ProductReviewsComponent as catalogProductReviews } from './catalog/product-reviews/product-reviews.component';
import { ProductTagsComponent as catalogProductTags } from './catalog/product-tags/product-tags.component';
import { ProductAttributesComponent as catalogProductAttributes } from './catalog/attributes/product-attributes/product-attributes.component';
import { SpecificationAttributesComponent as catalogSpecificationAttributes } from './catalog/attributes/specification-attributes/specification-attributes.component';
import { CheckoutAttributesComponent as catalogCheckoutAttributes } from './catalog/attributes/checkout-attributes/checkout-attributes.component';

import { SalesComponent as sales } from './sales/sales.component';
import { CustomersComponent as customers } from './customers/customers.component';
import { PromotionsComponent as promotions } from './promotions/promotions.component';
import { ContentManagementComponent as content } from './content-management/content-management.component';
import { ConfigurationComponent as confi } from './configuration/configuration.component';
import { SystemComponent as system } from './system/system.component';
import { ReportsComponent as reports } from './reports/reports.component';
import { HelpComponent as help } from './help/help.component';



@NgModule({
  declarations: [
    dashboard,
    catalogProducts,
    catalogCategories,
    catalogManufacturers,
    catalogProductReviews,
    catalogProductTags,
    catalogProductAttributes,
    catalogSpecificationAttributes,
    catalogCheckoutAttributes,
    sales,
    customers,
    promotions,
    content,
    confi,
    system,
    reports,
    help,
  ],

  imports: [
    CommonModule,
    MenuRoutingModule,
    MatSortModule,
  
  ]
})
export class MenuModule { }
