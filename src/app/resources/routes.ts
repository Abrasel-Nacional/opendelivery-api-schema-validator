import * as _merchant from './schemas/merchant/merchant.json';
import * as _merchantStatus from './schemas/merchant/merchant-status.json';
import * as _merchantOnboard from './schemas/merchant/merchant-onboard.json';

import * as _orderDetails from './schemas/order/order-details.json';
import * as _orderPolling from './schemas/order/order-polling.json';
import * as _orderAck from './schemas/order/order-ack.json';
import * as _orderWebhook from './schemas/order/order-webhook.json';
import * as _orderConfirm from './schemas/order/order-confirm.json';
import * as _orderDispatch from './schemas/order/order-dispatch.json';
import * as _orderTracking from './schemas/order/order-tracking.json';
import * as _orderCancelRequest from './schemas/order/order-cancel-request.json';
import * as _orderCancelDeny from './schemas/order/order-cancel-deny.json';


import * as _logisticsNewDelivery from './schemas/logistics/logistics-newDelivery.json';

import { EntityIdEnum } from './entity-id';
import { EndpointIdEnum } from './endpoint-id';
import { IResource } from '../modules/models/entity-group';
import { HTTPMethodEnum } from '../modules/models/enums/http-method';
import { TypeSolicitationEnum } from '../modules/models/enums/type-solicitation';

export const resource: IResource = {
  entities: [
    {
      name: 'Order',
      id: EntityIdEnum.Order,
      endpoint: [
        {
          type: HTTPMethodEnum.GET,
          name: '/v1/orders/{orderId}',
          id: EndpointIdEnum.orderDetails,
          validationType: TypeSolicitationEnum.Response,
          validation: _orderDetails,
        },
        {
          type: HTTPMethodEnum.POST,
          name: '/v1/orders/{orderId}/confirm',
          id: EndpointIdEnum.orderConfirm,
          validationType: TypeSolicitationEnum.Request,
          validation: _orderConfirm,
        },
        {
          type: HTTPMethodEnum.POST,
          name: '/v1/orders/{orderId}/dispatch',
          id: EndpointIdEnum.orderDispatch,
          validationType: TypeSolicitationEnum.Both,
          validation: _orderDispatch,
        },
        {
          type: HTTPMethodEnum.POST,
          name: '/v1/orders/{orderId}/tracking',
          id: EndpointIdEnum.orderTracking,
          validationType: TypeSolicitationEnum.Request,
          validation: _orderTracking,
        }
      ],
    },
    {
      name: 'Order Polling',
      id: EntityIdEnum.EventsPolling,
      endpoint: [
        {
          type: HTTPMethodEnum.POST,
          name: '/v1/orders/events:polling',
          id: EndpointIdEnum.orderPolling,
          validationType: TypeSolicitationEnum.Response,
          validation: _orderPolling,
        },
        {
          type: HTTPMethodEnum.POST,
          name: '/v1/orders/events/acknologment',
          id: EndpointIdEnum.orderAck,
          validationType: TypeSolicitationEnum.Request,
          validation: _orderAck,
        }
      ]
    },
    {
      name: 'Order Webhook',
      id: EntityIdEnum.EventsWebhook,
      endpoint: [
        {
          type: HTTPMethodEnum.POST,
          name: '/v1/newEvent',
          id: EndpointIdEnum.orderWebhook,
          validationType: TypeSolicitationEnum.Request,
          validation: _orderWebhook,
        }
      ]
    },
    {
      name: 'Order Cancellation',
      id: EntityIdEnum.OrderCancellation,
      endpoint: [
        {
          type: HTTPMethodEnum.GET,
          name: '/v1/orders/{orderId}/requestCancellation',
          id: EndpointIdEnum.orderCancelRequest,
          validationType: TypeSolicitationEnum.Request,
          validation: _orderCancelRequest,
        },
        {
          type: HTTPMethodEnum.POST,
          name: '/v1/orders/{orderId}/denyCancellation',
          id: EndpointIdEnum.orderCancelDeny,
          validationType: TypeSolicitationEnum.Request,
          validation: _orderCancelDeny,
        }
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
          validationType: TypeSolicitationEnum.Both,
          validation: _logisticsNewDelivery,
        },
      ],
    },

    {
      name: 'Merchant',
      id: EntityIdEnum.Merchant,
      endpoint: [
        {
          type: HTTPMethodEnum.GET,
          name: '/v1/merchant',
          id: EndpointIdEnum.merchant,
          validationType: TypeSolicitationEnum.Response,
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
  ],
};
