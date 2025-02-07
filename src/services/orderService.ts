// import { Order } from '@/types/OrderTypes';
import axiosInstance from './axios';

const BASE_PATH = '/orders'

interface CreateReqOrder {
    custumerId: string
    mealId: string
    totalAmount: number
    deliveryAddress: string
    paymentMethod: string
    paymentAmount: number

}

interface UpdateReqOrder {
    id: string
    custumerId: string
    mealId: string
    totalAmount: number
    deliveryAddress: string
    paymentMethod: string
    paymentAmount: number

}

export const orderService = {
    // Create order
    async createOrder(order: CreateReqOrder) {
        try {
        const response = await axiosInstance.post(`${BASE_PATH}/create`, order);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    // Fetch Order - get all orders
    async fetchOrder() {
        try{
        const response = await axiosInstance.get(`${BASE_PATH}/get`);
            return response.data;
        } catch(error) {
            console.log(error);
        }
    },

    // Fetch Single Order
    async getOrderById(id: string) {
        try {
            const response = await axiosInstance.get(`${BASE_PATH}/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    async getOrdersByCustomerId(customerId: string) {
        try {
            const response = await axiosInstance.get(`${BASE_PATH}/customer/${customerId}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    // Update Order
    async updateOrder(order: UpdateReqOrder) {
        if (!order.id) {
            new Error('Order ID is required for update');
        }
        try {
            const response = await axiosInstance.put(`${BASE_PATH}/${order.id}`, order);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    // Delete Order
    async deleteOrder(id: string) {
        try {
            await axiosInstance.delete(`${BASE_PATH}/${id}`);
        } catch (error) {
            console.log(error);
        }
    },
};