import { LAYOUT } from '@/router/constant';

//  采购中心:[订单管理,收货管理,退货管理,供应商管理,对账管理,设置]

// 采购中心 --> 订单管理
const orderRoute = [
  {
    path: 'add',
    name: 'NewOrder',
    component: () =>
      import(/* webpackChunkName: "NewOrder" */ '@/views/purchasing/order/NewOrder.vue'),
  },
  {
    path: 'draf',
    name: 'Draf',
    component: () => import(/* webpackChunkName: "Draf" */ '@/views/purchasing/order/Draf.vue'),
  },
  {
    path: 'list',
    name: 'OrderList',
    component: () =>
      import(/* webpackChunkName: "OrderList" */ '@/views/purchasing/order/OrderList.vue'),
  },
  {
    path: 'confim',
    name: 'Confim',
    component: () => import(/* webpackChunkName: "Confim" */ '@/views/purchasing/order/Confim.vue'),
  },
];

// 采购中心
const purchasingChildRoute = [
  {
    path: 'order',
    name: 'Order',
    component: LAYOUT,
    children: [...orderRoute],
  },
  // {
  //   path: 'receiptGoods',
  //   name: purchasingModule + 'ReceiptGoods',
  //   component: getParentLayout(purchasingModule + 'ReceiptGoods'),
  //   meta: {
  //     title: t('routes.supplychain.purchasingCenter.ReceiptGoods.Goods'),
  //   },
  //   children: [...receiptGoodsRoute],
  // },
  // {
  //   path: 'returnGoods',
  //   name: purchasingModule + 'ReturnGoods',
  //   component: getParentLayout(purchasingModule + 'ReturnGoods'),
  //   meta: {
  //     title: t('routes.supplychain.purchasingCenter.ReturnGoods.Goods'),
  //   },
  //   children: [...returnGoodsRoute],
  // },
  // {
  //   path: 'supplier',
  //   name: purchasingModule + 'Supplier',
  //   component: getParentLayout(purchasingModule + 'Supplier'),
  //   meta: {
  //     title: t('routes.supplychain.purchasingCenter.supplier.supplier'),
  //   },
  //   children: [...supplierRoute],
  // },
  // {
  //   path: 'reconciliation',
  //   name: purchasingModule + 'Reconciliation',
  //   component: getParentLayout(purchasingModule + 'Reconciliation'),
  //   meta: {
  //     title: t(
  //       'routes.supplychain.purchasingCenter.Reconciliation.Reconciliation',
  //     ),
  //   },
  //   children: [...reconciliationRoute],
  // },
  // {
  //   path: 'settings',
  //   name: purchasingModule + 'Settings',
  //   component: getParentLayout(purchasingModule + 'Settings'),
  //   meta: {
  //     title: t('routes.supplychain.purchasingCenter.settings.settings'),
  //   },
  //   children: [...settingsRoute],
  // },
];

// 采购中心 二级路由
export const purchasingRoute = [
  {
    path: 'purchasingCenter',
    name: 'PurchasingCenter',
    component: LAYOUT,
    children: [...purchasingChildRoute],
  },
];

// 采购中心 --> 收货管理
// const receiptGoodsRoute = [
//   {
//     path: 'list',
//     name: purchasingModule + receiptGoodModule + 'receiptGoodsList',
//     component: microAppCompoent,
//     meta: {
//       title: t('routes.supplychain.purchasingCenter.ReceiptGoods.list'),
//     },
//   },
//   {
//     path: 'aq-await',
//     name: purchasingModule + receiptGoodModule + 'QualityInspectionAwaiting',
//     component: microAppCompoent,
//     meta: {
//       title: t(
//         'routes.supplychain.purchasingCenter.ReceiptGoods.AwaitingQualityInspection',
//       ),
//     },
//   },
//   {
//     path: 'aq-records',
//     name: purchasingModule + receiptGoodModule + 'QualityInspectionRecords',
//     component: microAppCompoent,
//     meta: {
//       title: t(
//         'routes.supplychain.purchasingCenter.ReceiptGoods.QualityInspectionRecords',
//       ),
//     },
//   },
//   {
//     path: 'to-be-stocked-list',
//     name: purchasingModule + receiptGoodModule + 'ToBeStockedList',
//     component: microAppCompoent,
//     meta: {
//       title: t(
//         'routes.supplychain.purchasingCenter.ReceiptGoods.ToBeStockedList',
//       ),
//     },
//   },
// ];
// 采购中心 --> 退货管理
// const returnGoodsRoute = [
//   {
//     path: 'add',
//     name: purchasingModule + returnGoodsModule + 'AddReturnGood',
//     component: microAppCompoent,
//     meta: {
//       title: t('routes.supplychain.purchasingCenter.ReturnGoods.add'),
//     },
//   },
//   {
//     path: 'records',
//     name: purchasingModule + returnGoodsModule + 'ReturnGoodRecords',
//     component: microAppCompoent,
//     meta: {
//       title: t('routes.supplychain.purchasingCenter.ReturnGoods.records'),
//     },
//   },
// ];
// 采购中心 --> 供应商管理
// const supplierRoute = [
//   {
//     path: 'isMy',
//     name: purchasingModule + supplierModule + 'IsMySupplier',
//     component: microAppCompoent,
//     meta: {
//       title: t('routes.supplychain.purchasingCenter.supplier.IsMy'),
//     },
//   },
//   {
//     path: 'list',
//     name: purchasingModule + supplierModule + 'SupplierList',
//     component: microAppCompoent,
//     meta: {
//       title: t('routes.supplychain.purchasingCenter.supplier.list'),
//     },
//   },
// ];
// 采购中心 --> 对账管理
// const reconciliationRoute = [
//   {
//     path: 'settings',
//     name: purchasingModule + 'settingDate',
//     component: microAppCompoent,
//     meta: {
//       title: t('routes.supplychain.purchasingCenter.Reconciliation.settings'),
//     },
//   },
//   {
//     path: 'list',
//     name: purchasingModule + 'reconciliationList',
//     component: microAppCompoent,
//     meta: {
//       title: t('routes.supplychain.purchasingCenter.Reconciliation.list'),
//     },
//   },
// ];
// 采购中心 --> 设置
// const settingsRoute = [
//   {
//     path: 'tt',
//     name: purchasingModule + settingsModule + 'TermsTransaction',
//     component: () => microAppCompoent,
//     meta: {
//       title: t('routes.supplychain.purchasingCenter.settings.TermsTransaction'),
//     },
//   },
//   {
//     path: 'orderProcess',
//     name: purchasingModule + settingsModule + 'OrderProcess',
//     component: () => microAppCompoent,
//     meta: {
//       title: t('routes.supplychain.purchasingCenter.settings.OrderProcess'),
//     },
//   },
// ];
