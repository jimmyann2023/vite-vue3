// 供应链 - 销售中心
import { PageView, RouteView } from '@/layouts';

// 订单管理
const salesOrderManagement = {
  name: 'salesOrderManagement',
  path: '/supplyChain/salesCenter/salesOrderManagement',
  redirect: '/salesCenter/salesOrderManagement/salesOrderList',
  component: RouteView,
  meta: { title: '订单管理' },
  children: [
    // 订单详情
    {
      name: 'salesOrderDetail',
      path: '/supplyChain/salesCenter/salesOrderManagement/salesOrderDetail',
      component: () => import('@/views/salesCenter/salesOrderManagement/salesOrderDetail'),
      meta: { title: '订单详情' },
      hidden: true,
    },
    // 订单列表
    {
      name: 'SalesManageOrderList',
      path: '/supplyChain/salesCenter/salesOrderManagement/salesOrderList',
      component: () => import('@/views/salesCenter/salesOrderManagement/salesOrderList'),
      meta: { title: '订单列表' },
      // hidden: true,
    },
    // 申请关闭列表
    {
      name: 'applyClosing',
      path: '/supplyChain/salesCenter/salesOrderManagement/applyClosing',
      component: () => import('@/views/salesCenter/salesOrderManagement/applyClosing'),
      meta: { title: '申请关闭列表' },
      // hidden: true,
    },
    {
      name: 'SalesOrderPrint',
      path: '/supplyChain/salesCenter/salesOrderManagement/SalesOrderPrint',
      component: () => import('@/views/salesCenter/salesOrderManagement/SalesOrderPrint'),
      meta: { title: '打印订单' },
      hidden: true,
    },
  ],
};

// 发货管理
const salesDeliveryManagement = {
  name: 'salesDeliveryManagement',
  path: '/supplyChain/salesCenter/salesDeliveryManagement',
  redirect: '/salesCenter/salesDeliveryManagement/waitDeliveryList',
  component: RouteView,
  meta: { title: '发货管理' },
  children: [
    // 待发货列表
    {
      name: 'waitDeliveryList',
      path: '/supplyChain/salesCenter/salesDeliveryManagement/waitDeliveryList',
      component: () => import('@/views/salesCenter/salesDeliveryManagement/WaitDeliveryList/index'),
      meta: { title: '待发货列表' },
      // hidden: true,
    },
    // 发货记录
    {
      name: 'DeliveryRecordList',
      path: '/supplyChain/salesCenter/salesDeliveryManagement/DeliveryRecordList',
      component: () => import('@/views/salesCenter/salesDeliveryManagement/DeliveryRecordList'),
      meta: { title: '发货记录' },
      // hidden: true,
    },
    // 发货详情
    {
      name: 'deliveryDetial',
      path: '/supplyChain/salesCenter/salesDeliveryManagement/deliveryDetial',
      component: () => import('@/views/salesCenter/salesDeliveryManagement/deliveryDetial'),
      meta: { title: '发货详情' },
      hidden: true,
    },
    // 打印发货单
    {
      name: 'deliveryPrint',
      path: '/supplyChain/salesCenter/salesDeliveryManagement/deliveryPrint',
      component: () => import('@/views/salesCenter/salesDeliveryManagement/deliveryPrint'),
      meta: { title: '打印发货单' },
      hidden: true,
    },
    // 打印二维码
    {
      name: 'deliveryQrCode',
      path: '/supplyChain/salesCenter/salesDeliveryManagement/deliveryQrCode',
      component: () => import('@/views/salesCenter/salesDeliveryManagement/deliveryQrCode'),
      meta: { title: '打印二维码' },
      hidden: true,
    },
    // 需方品检记录
    {
      name: 'SaleDemanderQuality',
      path: '/supplyChain/salesCenter/salesDeliveryManagement/demanderQuality',
      component: () => import('@/views/salesCenter/salesDeliveryManagement/DemanderQuality'),
      meta: { title: '需方品检记录' },
      // hidden: true,
    },
    {
      name: 'demanderQualityDetail',
      path: '/supplyChain/salesCenter/salesDeliveryManagement/demanderQualityDetail',
      component: () => import('@/views/salesCenter/salesDeliveryManagement/demanderQualityDetail'),
      meta: { title: '需方品检记录详情' },
      hidden: true,
    },
    // 需方入库记录
    {
      name: 'demanderWarehousing',
      path: '/supplyChain/salesCenter/salesDeliveryManagement/demanderWarehousing',
      component: () => import('@/views/salesCenter/salesDeliveryManagement/DemanderWarehousing'),
      meta: { title: '需方入库记录' },
      // hidden: true,
    },
    // 入库详情
    {
      name: 'demanderWarehousingDetail',
      path: '/supplyChain/salesCenter/salesDeliveryManagement/demanderWarehousingDetail',
      component: () =>
        import('@/views/salesCenter/salesDeliveryManagement/DemanderWarehousingDeatil'),
      meta: { title: '入库详情' },
      hidden: true,
    },
  ],
};

// 补货管理
const replenishmentManagement = {
  name: 'replenishmentManagement',
  path: '/supplyChain/salesCenter/replenishmentManagement',
  redirect: '/salesCenter/replenishmentManagement/returnDemander',
  component: RouteView,
  meta: { title: '补货管理' },
  children: [
    // 需方退货单
    {
      name: 'returnDemander',
      path: '/supplyChain/salesCenter/replenishmentManagement/returnDemander',
      component: () => import('@/views/salesCenter/replenishmentManagement/returnDemander'),
      meta: { title: '需方退货单' },
      // hidden: true,
    },
    // 需方入库关闭记录
    {
      name: 'receiptClosingRecord',
      path: '/supplyChain/salesCenter/replenishmentManagement/receiptClosingRecord',
      component: () => import('@/views/salesCenter/replenishmentManagement/receiptClosingRecord'),
      meta: { title: '需方入库关闭记录' },
      // hidden: true,
    },
    // 补货记录列表
    {
      name: 'replenishmentRecord',
      path: '/supplyChain/salesCenter/replenishmentManagement/replenishmentRecord',
      component: () => import('@/views/salesCenter/replenishmentManagement/replenishmentRecord'),
      meta: { title: '补货记录列表' },
      // hidden: true,
    },
    {
      name: 'replenishmentRecordDetail',
      path: '/supplyChain/salesCenter/replenishmentManagement/replenishmentRecordDetail',
      component: () =>
        import('@/views/salesCenter/replenishmentManagement/replenishmentRecordDetail'),
      meta: { title: '查看补货单' },
      hidden: true,
    },
  ],
};
// 对账管理
const reconciliationManagement = {
  name: 'SaleReconciliationManagement',
  path: '/supplyChain/salesCenter/reconciliationManagement',
  redirect: '/salesCenter/reconciliationManagement/reconciliationOrderList',
  component: RouteView,
  meta: { title: '对账管理' },
  children: [
    // 对账单列表
    {
      name: 'reconciliationOrderList',
      path: '/supplyChain/salesCenter/reconciliationManagement/reconciliationOrderList',
      component: () =>
        import('@/views/salesCenter/reconciliationManagement/reconciliationOrderList'),
      meta: { title: '对账单列表' },
      // hidden: true,
    },
    // 对账单详情
    {
      name: 'reconciliationOrderDetail',
      path: '/supplyChain/salesCenter/reconciliationManagement/reconciliationOrderDetail',
      component: () =>
        import('@/views/salesCenter/reconciliationManagement/reconciliationOrderDetail'),
      meta: { title: '对账单详情' },
      hidden: true,
    },
  ],
};

const customerManagement = {
  name: 'SaleCustomerManagement',
  path: '/supplyChain/salesCenter/customerManagement',
  redirect: '/salesCenter/customerManagement/waitDeliveryList',
  component: RouteView,
  meta: { title: '客户管理' },
  children: [
    // 我的客户
    {
      name: 'myCustomer',
      path: '/supplyChain/salesCenter/customerManagement/myCustomer',
      component: () => import('@/views/salesCenter/customerManagement/myCustomer'),
      meta: { title: '我的客户' },
      // hidden: true,
    },
  ],
};

const salesCenterRouter = {
  path: '/supplyChain/salesCenter',
  name: 'salesCenter',
  meta: { title: '销售中心', icon: 'solution', powerFiled: 'gyl_xszx' },
  component: PageView,
  redirect: '/salesCenter/salesOrderManagement/salesOrderList',
  children: [
    salesOrderManagement,
    salesDeliveryManagement,
    replenishmentManagement,
    reconciliationManagement,
    customerManagement,
  ],
};

export { salesCenterRouter };
//  销售中心:[订单管理,发货管理,补货管理,对账管理,客户管理]
// // 销售中心
// const sellingChildRoute = [
//   {
//     path: 'order',
//     name: sellingModule + 'Order',
//     component: getParentLayout(sellingModule + 'Order'),
//     meta: {
//       title: t('routes.supplychain.selling.order'),
//     },
//     children: [...SorderRoute],
//   },
//   {
//     path: 'shipGoods',
//     name: sellingModule + 'shipGoods',
//     component: getParentLayout(sellingModule + 'shipGoods'),
//     meta: {
//       title: t('routes.supplychain.selling.shipGoods.shipGoods'),
//     },
//     children: [...shipRoute],
//   },

//   {
//     path: 'restockGoods',
//     name: sellingModule + 'restockGoods',
//     component: getParentLayout(sellingModule + 'restockGoods'),
//     meta: {
//       title: t('routes.supplychain.selling.restockGoods.restockGoods'),
//     },
//     children: [...restockGoodsRoute],
//   },
//   {
//     path: 'reconciliation',
//     name: sellingModule + 'Reconciliation',
//     component: getParentLayout(sellingModule + 'Reconciliation'),
//     meta: {
//       title: t('routes.supplychain.selling.Reconciliation.Reconciliation'),
//     },
//     children: [...SreconciliationRoute],
//   },
//   {
//     path: 'customer',
//     name: sellingModule + 'customer',
//     component: getParentLayout(sellingModule + 'customer'),
//     meta: {
//       title: t('routes.supplychain.selling.customer.customer'),
//     },
//     children: [...customerRoute],
//   },
// ];
