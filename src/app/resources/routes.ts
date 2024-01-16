import * as _merchant from './schemas/merchant/merchant.json';
import * as _merchantStatus from './schemas/merchant/merchant-status.json';
import * as _merchantOnboard from './schemas/merchant/merchant-onboard.json';

import * as _orderDetails from './schemas/order/order-details.json';
import * as _orderPolling from './schemas/order/order-polling.json';
import * as _orderAck from './schemas/order/order-ack.json';
import * as _orderWebhook from './schemas/order/order-webhook.json';
import * as _orderConfirm from './schemas/order/order-confirm.json';
import * as _orderDispatch from './schemas/order/order-dispatch.json';
import * as _orderReadyForPickup from './schemas/order/order-ready-for-pickup.json';

import * as _logisticsNewDelivery from './schemas/logistics/logistics-newDelivery.json';

import { EntityIdEnum } from './entity-id';
import { EndpointIdEnum } from './endpoint-id';
import { IResource } from '../modules/models/entity-group';
import { HTTPMethodEnum } from '../modules/models/enums/http-method';

export const resource: IResource = {
  entities: [
    {
      name: 'Merchant',
      id: EntityIdEnum.Merchant,
      endpoint: [
        {
          type: HTTPMethodEnum.GET,
          name: '/v1/merchant',
          id: EndpointIdEnum.merchant,
          validation: _merchant,
        }, //,
        // {
        //   type: HTTPMethodEnum.GET,
        //   name: "/v1/merchant/status",
        //   id: EndpointIdEnum.merchantStatus,
        //   validation: _merchantStatus
        // },
        // {
        //   type: HTTPMethodEnum.PUT,
        //   name: "/v1/merchant//v1/merchantOnboarding",
        //   id: EndpointIdEnum.merchantOnboard,
        //   validation: _merchantOnboard
        // }
      ],
    },
    {
      name: 'Order',
      id: EntityIdEnum.Order,
      endpoint: [
        {
          type: HTTPMethodEnum.GET,
          name: '/v1/orders/{orderId}',
          id: EndpointIdEnum.orderDetails,
          validation: _orderDetails,
        },
        {
          type: HTTPMethodEnum.POST,
          name: '/v1/orders/events:polling',
          id: EndpointIdEnum.orderPolling,
          validation: _orderPolling,
        },
        {
          type: HTTPMethodEnum.POST,
          name: '/v1/orders/events/acknologment',
          id: EndpointIdEnum.orderAck,
          validation: _orderAck,
        },
        {
          type: HTTPMethodEnum.POST,
          name: '/v1/orders/newEvent',
          id: EndpointIdEnum.orderWebhook,
          validation: _orderWebhook,
        },
        {
          type: HTTPMethodEnum.POST,
          name: '/v1/orders/{orderId}/confirm',
          id: EndpointIdEnum.orderConfirm,
          validation: _orderConfirm,
        },
        {
          type: HTTPMethodEnum.POST,
          name: '/v1/orders/{orderId}/readyForPickup',
          id: EndpointIdEnum.orderReadyForPickup,
          validation: _orderReadyForPickup,
        },
        {
          type: HTTPMethodEnum.POST,
          name: '/v1/orders/{orderId}/dispatch',
          id: EndpointIdEnum.orderDispatch,
          validation: _orderDispatch,
        },
      ],
    },
    {
      name: 'Logistics',
      id: EntityIdEnum.Logistics,
      endpoint: [
        {
          type: HTTPMethodEnum.POST,
          name: '/v1/logistics/delivery',
          id: EndpointIdEnum.logisticsNewDelivery,
          validation: _logisticsNewDelivery,
        },
      ],
    },
  ],
};
