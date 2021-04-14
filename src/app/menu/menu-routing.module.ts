import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: dashboard },

  { path: 'catalog/products', component: catalogProducts },
  { path: 'catalog/categories', component: catalogCategories },
  { path: 'catalog/manufacturers', component: catalogManufacturers },
  { path: 'catalog/productReviews', component: catalogProductReviews },
  { path: 'catalog/productTags', component: catalogProductTags },
  { path: 'catalog/productAttributes', component: catalogProductAttributes },
  { path: 'catalog/specificationAttributes', component: catalogSpecificationAttributes },
  { path: 'catalog/checkoutAttributes', component: catalogCheckoutAttributes },

  { path: 'sales/orders', component: sales },
  { path: 'customers/customers', component: customers },
  { path: 'promotions/discounts', component: promotions },
  { path: 'content/topics', component: content },
  { path: 'configurations/settings', component: confi },
  { path: 'system/systemInfprmation', component: system },
  { path: 'reports/salesSummary', component: reports },
  { path: 'help/helpTopics', component: help },
  
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }

