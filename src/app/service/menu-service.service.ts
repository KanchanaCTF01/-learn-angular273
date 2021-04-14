import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor() { }

  getMenuList() {
    const menuList: MenuItem[] = [
      {
        group: { code: 'dashboard', name: 'Dashboard' },
        menus: [] 
              
      },

      {
        group: { code: 'catalog', name: 'Catalog' },
        menus: [
          { code: 'products', name: 'Products' },
          { code: 'categories', name: 'Categories' },
          { code: 'manufacturers', name: 'Manufacturers' },
          { code: 'productReviews', name: 'Product reviews' },
          { code: 'productTags', name: 'Product tags' },
          { code: 'productAttributes', name: 'Product attributes' },
          { code: 'specificationAttributes', name: 'Specification attributes' },
          { code: 'checkoutAttributes', name: 'Checkout attributes' },
        ]      
      },
      {
        group: { code: 'sales', name: 'Sales' },
        menus: [
          { code: 'orders', name: 'Orders' },
          { code: 'returnRequests', name: 'Return requests' },
          { code: 'recurringPayments', name: 'Recurring payments' },
          { code: 'giftCards', name: 'Gift cards' },
          { code: 'shoppingCartsWishlists', name: 'Shopping carts and wishlists' },
        ]
      },
      {
        group: { code: 'customers', name: 'Customers' },
        menus: [
          { code: 'customers', name: 'Customers' },
          { code: 'customerRoles', name: 'Customer roles' },
          { code: 'onlineCustomers', name: 'Online customers' },
          { code: 'vendors', name: 'Vendors' },
          { code: 'activityLog', name: 'Activity log' },
          { code: 'activityTypes', name: 'Activity Types' },
          { code: 'requestsLog', name: 'GDPR requests (log)' },
        ]
      },
      {
        group: { code: 'promotions', name: 'Promotions' },
        menus: [
          { code: 'discounts', name: 'Discounts' },
          { code: 'affiliates', name: 'Affiliates' },
          { code: 'newsletterSubscribers', name: 'Newsletter subscribers' },
          { code: 'campaigns', name: 'Campaigns' },      
        ]
      },
      {
        group: { code: 'content', name: 'Content management' },
        menus: [
          { code: 'topics', name: 'Topics (pages)' },
          { code: 'message', name: 'Message templates ' },
          { code: 'newsItems', name: 'News items' },
          { code: 'newsComments', name: 'News comments' },      
          { code: 'blogPosts', name: 'Blog posts' },      
          { code: 'blogComments', name: 'Blog comments' },      
          { code: 'polls', name: 'Polls' },      
          { code: 'forums', name: 'Forums' },      
        ]
      },
      {
        group: { code: 'configurations', name: 'Configurations' },
        menus: [
          { code: 'settings', name: 'Settings' },
          { code: 'emailAccounts', name: 'Email accounts' },
          { code: 'stores', name: 'Stores' },
          { code: 'countries', name: 'Countries' },      
          { code: 'languages', name: 'Languages' },      
          { code: 'currencies', name: 'Currencies' },      
          { code: 'paymentMethods', name: 'Payment methods' },      
          { code: 'paymentRestrictions', name: 'Payment restrictions' },      
          { code: 'taxProviders', name: 'Tax providers' },      
          { code: 'taxCategories', name: 'Tax categories' },      
          { code: 'shipping', name: 'Shipping' },      
          { code: 'accessControlList', name: 'Access control list' },      
          { code: 'widgets', name: 'Widgets' },      
          { code: 'authentication', name: 'Authentication' },      
          { code: 'localPlugins', name: 'Local plugins' },      
          { code: 'allPluginsThemes', name: 'All plugins and themes' },      
        ]
      },
      {
        group: { code: 'system', name: 'System' },
        menus: [
          { code: 'systemInfprmation', name: 'System information' },
          { code: 'log', name: 'Log' },
          { code: 'warnings', name: 'Warnings' },
          { code: 'maintenance', name: 'Maintenance' },      
          { code: 'messageQueue', name: 'Message queue' },      
          { code: 'scheduleTasks', name: 'Schedule tasks' },      
          { code: 'searchEngine', name: 'Search engine friendly page names' },      
          { code: 'templates', name: 'Templates' },      
        ]
      },
      {
        group: { code: 'reports', name: 'Reports' },
        menus: [
          { code: 'salesSummary', name: 'Sales summary' },
          { code: 'lowStock', name: 'Low stock' },
          { code: 'bestsellers', name: 'Bestsellers' },
          { code: 'productsNeverPurchased', name: 'Products never purchased' },      
          { code: 'countrySales', name: 'Country sales' },      
          { code: 'customerReports', name: 'Customer reports' },         
        ]
      },
      {
        group: { code: 'help', name: 'Help' },
        menus: [
          { code: 'helpTopics', name: 'Help topics' },
          { code: 'communityForums', name: 'Community forums' },
          { code: 'premiunSupportServices', name: 'Premium support service' },  
        ]
      },
    ];
    return menuList;
  }

  getSubMenuName(menuCode: string) {
    const menuList = this.getMenuList();
    for (const group of menuList) {
      for (const menu of group.menus) {
        return ` > ${menu.name}`;
      }
    }
    return '';
  }
}

export interface MenuItem {
  group: Menu;
  menus: Menu[];
}

export interface Menu {
  code: string;
  name: string;
}
